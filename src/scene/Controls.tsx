import React, { useRef, useEffect } from 'react';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useUIStore } from '../store/useUIStore';

/**
 * Navigation controls for the 3D scene
 * Implements pan, zoom, and orbit controls with preset views
 */
export const Controls: React.FC = () => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();
  const currentView = useUIStore((state) => state.currentView);

  // Apply view preset when it changes
  useEffect(() => {
    if (!controlsRef.current) return;

    const controls = controlsRef.current;
    const distance = 150; // Distance from target

    // Animate to preset view
    switch (currentView) {
      case 'top':
        camera.position.set(0, distance, 0);
        camera.lookAt(0, 0, 0);
        break;
      case 'front':
        camera.position.set(0, 50, distance);
        camera.lookAt(0, 50, 0);
        break;
      case 'side':
        camera.position.set(distance, 50, 0);
        camera.lookAt(0, 50, 0);
        break;
      case 'isometric':
        camera.position.set(distance * 0.7, distance * 0.7, distance * 0.7);
        camera.lookAt(0, 40, 0);
        break;
      case '3d':
        camera.position.set(100, 80, 100);
        camera.lookAt(0, 40, 0);
        break;
    }

    controls.update();
  }, [currentView, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      
      // Mouse button configuration
      mouseButtons={{
        LEFT: 2,    // Rotate on left click
        MIDDLE: 0,  // Pan on middle button
        RIGHT: 1,   // Pan on right button
      }}
      
      // Enable damping for smooth movement
      enableDamping
      dampingFactor={0.05}
      
      // Zoom settings
      enableZoom
      zoomSpeed={0.8}
      minDistance={20}
      maxDistance={500}
      
      // Pan settings
      enablePan
      panSpeed={1.0}
      screenSpacePanning={false}
      
      // Rotation settings
      enableRotate
      rotateSpeed={0.5}
      
      // Constraints
      maxPolarAngle={Math.PI / 2 - 0.1} // Prevent camera from going below ground
      minPolarAngle={0}
      
      // Target point (what the camera looks at)
      target={[0, 40, 0]}
    />
  );
};
