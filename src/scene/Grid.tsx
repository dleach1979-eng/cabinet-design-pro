import React from 'react';
import { Grid as DreiGrid } from '@react-three/drei';
import { useUIStore } from '../store/useUIStore';

/**
 * Floor grid for reference and measurements
 * Shows a grid in inches (converted to world units)
 */
export const Grid: React.FC = () => {
  const showGrid = useUIStore((state) => state.showGrid);

  if (!showGrid) return null;

  // Grid size: 240 inches (20 feet) x 240 inches
  // Cell size: 12 inches (1 foot)
  return (
    <>
      <DreiGrid
        args={[240, 240]}
        cellSize={12}
        cellThickness={0.5}
        cellColor="#6b7280"
        sectionSize={60}
        sectionThickness={1}
        sectionColor="#374151"
        fadeDistance={300}
        fadeStrength={1}
        infiniteGrid={false}
        position={[0, 0, 0]}
      />
      
      {/* Ground plane to receive shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[500, 500]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </>
  );
};
