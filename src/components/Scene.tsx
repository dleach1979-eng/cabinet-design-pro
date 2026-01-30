import React from 'react';
import { Lighting } from '../scene/Lighting';
import { Grid } from '../scene/Grid';
import { Controls } from '../scene/Controls';
import { Cabinet } from './Cabinet';
import { useCabinetStore } from '../store/useCabinetStore';

/**
 * Main 3D scene component
 * Contains all 3D elements: lighting, grid, cabinets, and controls
 */
export const Scene: React.FC = () => {
  const cabinets = useCabinetStore((state) => state.cabinets);
  const clearSelection = useCabinetStore((state) => state.clearSelection);

  // Click on background to deselect
  const handleBackgroundClick = () => {
    clearSelection();
  };

  return (
    <>
      {/* Lighting setup */}
      <Lighting />

      {/* Floor grid */}
      <Grid />

      {/* Navigation controls */}
      <Controls />

      {/* Axes helper for orientation */}
      <axesHelper args={[50]} />

      {/* Background plane for click detection */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        onClick={handleBackgroundClick}
      >
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Render all cabinets */}
      {cabinets.map((cabinet) => (
        <Cabinet key={cabinet.id} cabinet={cabinet} />
      ))}
    </>
  );
};
