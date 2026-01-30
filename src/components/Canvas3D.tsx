import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';

/**
 * 3D Canvas wrapper component
 * Sets up the Three.js renderer with proper configuration
 */
export const Canvas3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{
          position: [100, 80, 100],
          fov: 50,
          near: 0.1,
          far: 2000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]} // Device pixel ratio for high-DPI displays
      >
        <Scene />
      </Canvas>
    </div>
  );
};
