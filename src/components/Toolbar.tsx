import React from 'react';
import { useUIStore } from '../store/useUIStore';
import { useCabinetStore } from '../store/useCabinetStore';
import type { ViewPreset } from '../types';

/**
 * Top toolbar component
 * Contains navigation controls, view presets, and action buttons
 */
export const Toolbar: React.FC = () => {
  const currentView = useUIStore((state) => state.currentView);
  const setCurrentView = useUIStore((state) => state.setCurrentView);
  const toggleSettingsPanel = useUIStore((state) => state.toggleSettingsPanel);
  const toggleDimensions = useUIStore((state) => state.toggleDimensions);
  const showDimensions = useUIStore((state) => state.showDimensions);
  const addCabinet = useCabinetStore((state) => state.addCabinet);
  const saveProject = useCabinetStore((state) => state.saveProject);
  const loadProject = useCabinetStore((state) => state.loadProject);

  const viewButtons: { label: string; view: ViewPreset }[] = [
    { label: 'Top', view: 'top' },
    { label: 'Front', view: 'front' },
    { label: 'Side', view: 'side' },
    { label: 'Isometric', view: 'isometric' },
    { label: '3D', view: '3d' },
  ];

  return (
    <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between shadow-lg">
      {/* Left side - View controls */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold mr-2">View:</span>
        {viewButtons.map((btn) => (
          <button
            key={btn.view}
            onClick={() => setCurrentView(btn.view)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              currentView === btn.view
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Center - Add cabinet buttons */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold mr-2">Add:</span>
        <button
          onClick={() => addCabinet('base')}
          className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm transition-colors"
        >
          Base Cabinet
        </button>
        <button
          onClick={() => addCabinet('upper')}
          className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm transition-colors"
        >
          Upper Cabinet
        </button>
        <button
          onClick={() => addCabinet('tall')}
          className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm transition-colors"
        >
          Tall Cabinet
        </button>
      </div>

      {/* Right side - Additional controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleDimensions}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            showDimensions
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
          }`}
        >
          Dimensions
        </button>
        <button
          onClick={saveProject}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors"
        >
          Save
        </button>
        <button
          onClick={loadProject}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors"
        >
          Load
        </button>
        <button
          onClick={toggleSettingsPanel}
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
        >
          Settings
        </button>
      </div>
    </div>
  );
};
