import { create } from 'zustand';
import type { UIState, ViewPreset, NavigationMode } from '../types';

interface UIStore extends UIState {
  // Actions
  setNavigationMode: (mode: NavigationMode | null) => void;
  setCurrentView: (view: ViewPreset) => void;
  toggleSidebar: () => void;
  togglePropertiesPanel: () => void;
  toggleSettingsPanel: () => void;
  toggleDimensions: () => void;
  toggleGrid: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  // Initial state
  activeNavigationMode: null,
  currentView: '3d',
  sidebarOpen: true,
  propertiesPanelOpen: true,
  settingsPanelOpen: false,
  showDimensions: true,
  showGrid: true,

  // Actions
  setNavigationMode: (mode) => set({ activeNavigationMode: mode }),
  setCurrentView: (view) => set({ currentView: view }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  togglePropertiesPanel: () => set((state) => ({ propertiesPanelOpen: !state.propertiesPanelOpen })),
  toggleSettingsPanel: () => set((state) => ({ settingsPanelOpen: !state.settingsPanelOpen })),
  toggleDimensions: () => set((state) => ({ showDimensions: !state.showDimensions })),
  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
}));
