import { useEffect } from 'react';
import { useCabinetStore } from '../store/useCabinetStore';

/**
 * Custom hook for keyboard shortcuts
 */
export const useKeyboard = () => {
  const selectedCabinetId = useCabinetStore((state) => state.selectedCabinetId);
  const removeCabinet = useCabinetStore((state) => state.removeCabinet);
  const saveProject = useCabinetStore((state) => state.saveProject);
  const loadProject = useCabinetStore((state) => state.loadProject);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent shortcuts when typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'Delete':
        case 'Backspace':
          if (selectedCabinetId) {
            e.preventDefault();
            removeCabinet(selectedCabinetId);
          }
          break;

        case 's':
        case 'S':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            saveProject();
          }
          break;

        case 'l':
        case 'L':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            loadProject();
          }
          break;

        case 'Escape':
          useCabinetStore.getState().clearSelection();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCabinetId, removeCabinet, saveProject, loadProject]);
};
