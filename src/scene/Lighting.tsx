import React from 'react';

/**
 * Lighting setup for the 3D scene
 * Includes ambient light and directional light with shadows
 */
export const Lighting: React.FC = () => {
  return (
    <>
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.5} />
      
      {/* Main directional light with shadows */}
      <directionalLight
        position={[10, 20, 10]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      {/* Fill light from the opposite side */}
      <directionalLight position={[-10, 10, -10]} intensity={0.3} />
    </>
  );
};
