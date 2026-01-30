import { useEffect } from 'react';
import { Canvas3D } from './components/Canvas3D';
import { Toolbar } from './components/Toolbar';
import { Sidebar } from './components/Sidebar';
import { PropertiesPanel } from './components/PropertiesPanel';
import { SettingsPanel } from './components/SettingsPanel';
import { useKeyboard } from './hooks/useKeyboard';
import { useCabinetStore } from './store/useCabinetStore';

/**
 * Main App component
 * Professional cabinet design application with 3D visualization
 */
function App() {
  // Load saved project on mount
  const loadProject = useCabinetStore((state) => state.loadProject);
  
  useEffect(() => {
    loadProject();
  }, [loadProject]);

  // Initialize keyboard shortcuts
  useKeyboard();

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-950 text-white overflow-hidden">
      {/* Top Toolbar */}
      <Toolbar />

      {/* Main content area with 3D canvas */}
      <div className="flex-1 relative">
        {/* Left Sidebar */}
        <Sidebar />

        {/* 3D Canvas */}
        <Canvas3D />

        {/* Right Properties Panel */}
        <PropertiesPanel />

        {/* Settings Modal */}
        <SettingsPanel />
      </div>
    </div>
  );
}

export default App;
