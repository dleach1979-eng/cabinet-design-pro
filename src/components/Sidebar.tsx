import React from 'react';
import { useUIStore } from '../store/useUIStore';
import { useCabinetStore } from '../store/useCabinetStore';
import type { CabinetType } from '../types';

/**
 * Left sidebar component library
 * Displays available cabinet types and components
 */
export const Sidebar: React.FC = () => {
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const addCabinet = useCabinetStore((state) => state.addCabinet);

  if (!sidebarOpen) {
    return (
      <div className="absolute left-0 top-12 bottom-0 bg-gray-900 text-white">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-800 transition-colors"
          title="Open Sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  }

  const cabinetTypes: { type: CabinetType; label: string; description: string }[] = [
    { type: 'base', label: 'Base Cabinet', description: '24"D × 36"W × 34.5"H' },
    { type: 'upper', label: 'Upper Cabinet', description: '12"D × 36"W × 30"H' },
    { type: 'tall', label: 'Tall Cabinet', description: '24"D × 36"W × 84"H' },
  ];

  const handleDragStart = (e: React.DragEvent, type: CabinetType) => {
    e.dataTransfer.setData('cabinetType', type);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div className="absolute left-0 top-12 bottom-0 w-64 bg-gray-900 text-white shadow-xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Component Library</h2>
        <button
          onClick={toggleSidebar}
          className="p-1 hover:bg-gray-800 rounded transition-colors"
          title="Close Sidebar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Cabinet types */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Cabinets
          </h3>
          {cabinetTypes.map((item) => (
            <div
              key={item.type}
              draggable
              onDragStart={(e) => handleDragStart(e, item.type)}
              onClick={() => addCabinet(item.type)}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded cursor-pointer transition-colors group"
            >
              <div className="flex items-center gap-3">
                {/* Icon placeholder */}
                <div className="w-12 h-12 bg-gray-700 group-hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Door Styles section */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Door Styles
          </h3>
          <div className="space-y-2">
            <div className="bg-gray-800 hover:bg-gray-700 p-3 rounded cursor-pointer transition-colors">
              <div className="font-medium text-sm">Shaker</div>
              <div className="text-xs text-gray-400">Classic frame and panel</div>
            </div>
            <div className="bg-gray-800 hover:bg-gray-700 p-3 rounded cursor-pointer transition-colors">
              <div className="font-medium text-sm">Flat Panel</div>
              <div className="text-xs text-gray-400">Modern minimalist</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-xs text-gray-400">
        Click or drag to add components
      </div>
    </div>
  );
};
