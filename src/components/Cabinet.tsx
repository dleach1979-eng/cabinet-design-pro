import React, { useRef, useState } from 'react';
import { Mesh, BoxGeometry } from 'three';
import type { ThreeEvent } from '@react-three/fiber';
import { useCabinetStore } from '../store/useCabinetStore';
import type { Cabinet as CabinetType } from '../types';

interface CabinetProps {
  cabinet: CabinetType;
}

/**
 * 3D Cabinet component
 * Represents a cabinet with selectable, movable, and editable properties
 */
export const Cabinet: React.FC<CabinetProps> = ({ cabinet }) => {
  const meshRef = useRef<Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const selectedCabinetId = useCabinetStore((state) => state.selectedCabinetId);
  const selectCabinet = useCabinetStore((state) => state.selectCabinet);
  const moveCabinet = useCabinetStore((state) => state.moveCabinet);

  const isSelected = selectedCabinetId === cabinet.id;

  // Convert inches to world units (1 inch = 1 unit for simplicity)
  const width = cabinet.dimensions.width;
  const height = cabinet.dimensions.height;
  const depth = cabinet.dimensions.depth;

  // Handle click to select
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    selectCabinet(cabinet.id);
  };

  // Handle double-click to focus
  const handleDoubleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    // TODO: Implement camera focus on this cabinet
  };

  // Handle drag to move (simplified - just updates position)
  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    if (isSelected) {
      e.stopPropagation();
      setIsDragging(true);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (isDragging && meshRef.current) {
      e.stopPropagation();
      // Simple drag on XZ plane
      const newX = e.point.x;
      const newZ = e.point.z;
      moveCabinet(cabinet.id, [newX, cabinet.position[1], newZ]);
    }
  };

  // Cabinet colors based on type and selection
  const getColor = () => {
    if (isSelected) return '#3b82f6'; // Blue when selected
    if (hovered) return '#d1d5db'; // Light gray when hovered
    switch (cabinet.type) {
      case 'base': return '#8b7355'; // Wood brown
      case 'upper': return '#a0826d'; // Lighter wood
      case 'tall': return '#6b5344'; // Darker wood
      default: return '#8b7355';
    }
  };

  return (
    <group position={cabinet.position}>
      {/* Main cabinet box */}
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color={getColor()}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Selection outline */}
      {isSelected && (
        <lineSegments>
          <edgesGeometry args={[new BoxGeometry(width, height, depth)]} />
          <lineBasicMaterial color="#60a5fa" linewidth={2} />
        </lineSegments>
      )}

      {/* Door representation (simple front panel) */}
      <mesh position={[0, 0, depth / 2 + 0.5]} castShadow>
        <boxGeometry args={[width - 2, height - 2, 1]} />
        <meshStandardMaterial
          color={isSelected ? '#2563eb' : '#654321'}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* Door frame (for shaker style) */}
      {cabinet.doorStyle === 'shaker' && (
        <mesh position={[0, 0, depth / 2 + 1]}>
          <boxGeometry args={[width - 8, height - 8, 0.5]} />
          <meshStandardMaterial
            color={isSelected ? '#1e40af' : '#4a2511'}
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>
      )}

      {/* Simple handle */}
      <mesh position={[width / 3, 0, depth / 2 + 1.5]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 6, 16]} />
        <meshStandardMaterial color="#d4d4d8" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
};
