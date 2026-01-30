import React from 'react';
import { useUIStore } from '../store/useUIStore';
import { useCabinetStore } from '../store/useCabinetStore';

/**
 * Right properties panel
 * Displays and allows editing of selected cabinet properties
 */
export const PropertiesPanel: React.FC = () => {
  const propertiesPanelOpen = useUIStore((state) => state.propertiesPanelOpen);
  const togglePropertiesPanel = useUIStore((state) => state.togglePropertiesPanel);
  const selectedCabinetId = useCabinetStore((state) => state.selectedCabinetId);
  const cabinets = useCabinetStore((state) => state.cabinets);
  const updateCabinet = useCabinetStore((state) => state.updateCabinet);
  const removeCabinet = useCabinetStore((state) => state.removeCabinet);

  const selectedCabinet = cabinets.find((c) => c.id === selectedCabinetId);

  if (!propertiesPanelOpen) {
    return (
      <div className="absolute right-0 top-12 bottom-0 bg-gray-900 text-white">
        <button
          onClick={togglePropertiesPanel}
          className="p-2 hover:bg-gray-800 transition-colors"
          title="Open Properties"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    );
  }

  const handleDimensionChange = (key: 'width' | 'height' | 'depth', value: string) => {
    if (!selectedCabinet) return;
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue <= 0) return;
    
    updateCabinet(selectedCabinet.id, {
      dimensions: {
        ...selectedCabinet.dimensions,
        [key]: numValue,
      },
    });
  };

  const handlePositionChange = (axis: number, value: string) => {
    if (!selectedCabinet) return;
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    
    const newPosition: [number, number, number] = [...selectedCabinet.position];
    newPosition[axis] = numValue;
    updateCabinet(selectedCabinet.id, { position: newPosition });
  };

  const handleDoorStyleChange = (style: 'shaker' | 'flat') => {
    if (!selectedCabinet) return;
    updateCabinet(selectedCabinet.id, { doorStyle: style });
  };

  const handleDelete = () => {
    if (!selectedCabinet) return;
    if (confirm('Are you sure you want to delete this cabinet?')) {
      removeCabinet(selectedCabinet.id);
    }
  };

  return (
    <div className="absolute right-0 top-12 bottom-0 w-80 bg-gray-900 text-white shadow-xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Properties</h2>
        <button
          onClick={togglePropertiesPanel}
          className="p-1 hover:bg-gray-800 rounded transition-colors"
          title="Close Properties"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {!selectedCabinet ? (
          <div className="text-center text-gray-400 mt-8">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <p>No cabinet selected</p>
            <p className="text-sm mt-2">Click on a cabinet to edit its properties</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cabinet info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Cabinet Info
              </h3>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm">
                  <span className="text-gray-400">Type:</span>{' '}
                  <span className="font-medium capitalize">{selectedCabinet.type}</span>
                </div>
                <div className="text-sm mt-1">
                  <span className="text-gray-400">ID:</span>{' '}
                  <span className="font-mono text-xs">{selectedCabinet.id}</span>
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Dimensions (inches)
              </h3>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm mb-1">Width</label>
                  <input
                    type="number"
                    value={selectedCabinet.dimensions.width}
                    onChange={(e) => handleDimensionChange('width', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    min="6"
                    step="0.5"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Height</label>
                  <input
                    type="number"
                    value={selectedCabinet.dimensions.height}
                    onChange={(e) => handleDimensionChange('height', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    min="6"
                    step="0.5"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Depth</label>
                  <input
                    type="number"
                    value={selectedCabinet.dimensions.depth}
                    onChange={(e) => handleDimensionChange('depth', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    min="6"
                    step="0.5"
                  />
                </div>
              </div>
            </div>

            {/* Position */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Position (world units)
              </h3>
              <div className="space-y-2">
                <div>
                  <label className="block text-sm mb-1">X</label>
                  <input
                    type="number"
                    value={selectedCabinet.position[0].toFixed(2)}
                    onChange={(e) => handlePositionChange(0, e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    step="1"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Y</label>
                  <input
                    type="number"
                    value={selectedCabinet.position[1].toFixed(2)}
                    onChange={(e) => handlePositionChange(1, e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    step="1"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Z</label>
                  <input
                    type="number"
                    value={selectedCabinet.position[2].toFixed(2)}
                    onChange={(e) => handlePositionChange(2, e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    step="1"
                  />
                </div>
              </div>
            </div>

            {/* Door Style */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Door Style
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleDoorStyleChange('shaker')}
                  className={`w-full p-3 rounded text-left transition-colors ${
                    selectedCabinet.doorStyle === 'shaker'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  <div className="font-medium">Shaker</div>
                  <div className="text-xs opacity-80">Classic frame and panel</div>
                </button>
                <button
                  onClick={() => handleDoorStyleChange('flat')}
                  className={`w-full p-3 rounded text-left transition-colors ${
                    selectedCabinet.doorStyle === 'flat'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  <div className="font-medium">Flat Panel</div>
                  <div className="text-xs opacity-80">Modern minimalist</div>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div>
              <button
                onClick={handleDelete}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
              >
                Delete Cabinet
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
