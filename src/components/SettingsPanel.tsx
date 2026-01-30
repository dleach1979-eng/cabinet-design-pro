import React from 'react';
import { useUIStore } from '../store/useUIStore';
import { useCabinetStore } from '../store/useCabinetStore';

/**
 * Settings panel for global parameters
 * Allows editing default dimensions and styles
 */
export const SettingsPanel: React.FC = () => {
  const settingsPanelOpen = useUIStore((state) => state.settingsPanelOpen);
  const toggleSettingsPanel = useUIStore((state) => state.toggleSettingsPanel);
  const globalParameters = useCabinetStore((state) => state.globalParameters);
  const updateGlobalParameters = useCabinetStore((state) => state.updateGlobalParameters);

  if (!settingsPanelOpen) return null;

  const handleParameterChange = (key: string, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue <= 0) return;
    updateGlobalParameters({ [key]: numValue });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Global Parameters</h2>
          <button
            onClick={toggleSettingsPanel}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
            title="Close Settings"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-sm text-gray-400 mb-6">
            These parameters will be used as defaults for new cabinets. Changes here will not affect existing cabinets.
          </p>

          <div className="space-y-6">
            {/* Cabinet Depths */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Default Depths (inches)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">Upper Cabinet Depth</label>
                  <input
                    type="number"
                    value={globalParameters.upperCabinetDepth}
                    onChange={(e) => handleParameterChange('upperCabinetDepth', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    min="6"
                    step="0.5"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Base Cabinet Depth</label>
                  <input
                    type="number"
                    value={globalParameters.baseCabinetDepth}
                    onChange={(e) => handleParameterChange('baseCabinetDepth', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    min="6"
                    step="0.5"
                  />
                </div>
              </div>
            </div>

            {/* Cabinet Heights */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Default Heights (inches)</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-2">Base Cabinet</label>
                  <input
                    type="number"
                    value={globalParameters.baseCabinetHeight}
                    onChange={(e) => handleParameterChange('baseCabinetHeight', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    min="6"
                    step="0.5"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Upper Cabinet</label>
                  <input
                    type="number"
                    value={globalParameters.upperCabinetHeight}
                    onChange={(e) => handleParameterChange('upperCabinetHeight', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    min="6"
                    step="0.5"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Tall Cabinet</label>
                  <input
                    type="number"
                    value={globalParameters.tallCabinetHeight}
                    onChange={(e) => handleParameterChange('tallCabinetHeight', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    min="6"
                    step="0.5"
                  />
                </div>
              </div>
            </div>

            {/* Default Door Style */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Default Door Style</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => updateGlobalParameters({ defaultDoorStyle: 'shaker' })}
                  className={`flex-1 p-4 rounded transition-colors ${
                    globalParameters.defaultDoorStyle === 'shaker'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  <div className="font-medium">Shaker</div>
                  <div className="text-xs opacity-80">Classic frame and panel</div>
                </button>
                <button
                  onClick={() => updateGlobalParameters({ defaultDoorStyle: 'flat' })}
                  className={`flex-1 p-4 rounded transition-colors ${
                    globalParameters.defaultDoorStyle === 'flat'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  }`}
                >
                  <div className="font-medium">Flat Panel</div>
                  <div className="text-xs opacity-80">Modern minimalist</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-700">
          <button
            onClick={toggleSettingsPanel}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
