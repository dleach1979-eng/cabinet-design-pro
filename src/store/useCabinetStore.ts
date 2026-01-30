import { create } from 'zustand';
import type { Cabinet, GlobalParameters, CabinetType } from '../types';

interface CabinetStore {
  cabinets: Cabinet[];
  selectedCabinetId: string | null;
  globalParameters: GlobalParameters;
  
  // Actions
  addCabinet: (type: CabinetType) => void;
  removeCabinet: (id: string) => void;
  updateCabinet: (id: string, updates: Partial<Cabinet>) => void;
  selectCabinet: (id: string | null) => void;
  updateGlobalParameters: (params: Partial<GlobalParameters>) => void;
  moveCabinet: (id: string, position: [number, number, number]) => void;
  clearSelection: () => void;
  
  // Persistence
  saveProject: () => void;
  loadProject: () => void;
}

// Default global parameters
const defaultGlobalParameters: GlobalParameters = {
  upperCabinetDepth: 12,
  baseCabinetDepth: 24,
  baseCabinetHeight: 34.5,
  upperCabinetHeight: 30,
  tallCabinetHeight: 84,
  defaultDoorStyle: 'shaker',
};

// Helper to get default dimensions for cabinet type
const getDefaultDimensions = (type: CabinetType, globalParams: GlobalParameters) => {
  switch (type) {
    case 'base':
      return {
        width: 36,
        height: globalParams.baseCabinetHeight,
        depth: globalParams.baseCabinetDepth,
      };
    case 'upper':
      return {
        width: 36,
        height: globalParams.upperCabinetHeight,
        depth: globalParams.upperCabinetDepth,
      };
    case 'tall':
      return {
        width: 36,
        height: globalParams.tallCabinetHeight,
        depth: globalParams.baseCabinetDepth,
      };
  }
};

// Helper to get default position for cabinet type
const getDefaultPosition = (type: CabinetType, globalParams: GlobalParameters): [number, number, number] => {
  switch (type) {
    case 'base':
      return [0, globalParams.baseCabinetHeight / 2, 0];
    case 'upper':
      return [0, globalParams.baseCabinetHeight + globalParams.upperCabinetHeight / 2 + 18, 0];
    case 'tall':
      return [0, globalParams.tallCabinetHeight / 2, 0];
  }
};

export const useCabinetStore = create<CabinetStore>((set, get) => ({
  cabinets: [],
  selectedCabinetId: null,
  globalParameters: defaultGlobalParameters,

  addCabinet: (type: CabinetType) => {
    const { globalParameters, cabinets } = get();
    const id = `cabinet-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const newCabinet: Cabinet = {
      id,
      type,
      position: getDefaultPosition(type, globalParameters),
      dimensions: getDefaultDimensions(type, globalParameters),
      doorStyle: globalParameters.defaultDoorStyle,
    };

    set({ cabinets: [...cabinets, newCabinet] });
  },

  removeCabinet: (id: string) => {
    set((state) => ({
      cabinets: state.cabinets.filter((c) => c.id !== id),
      selectedCabinetId: state.selectedCabinetId === id ? null : state.selectedCabinetId,
    }));
  },

  updateCabinet: (id: string, updates: Partial<Cabinet>) => {
    set((state) => ({
      cabinets: state.cabinets.map((c) =>
        c.id === id ? { ...c, ...updates } : c
      ),
    }));
  },

  selectCabinet: (id: string | null) => {
    set({ selectedCabinetId: id });
  },

  updateGlobalParameters: (params: Partial<GlobalParameters>) => {
    set((state) => ({
      globalParameters: { ...state.globalParameters, ...params },
    }));
  },

  moveCabinet: (id: string, position: [number, number, number]) => {
    set((state) => ({
      cabinets: state.cabinets.map((c) =>
        c.id === id ? { ...c, position } : c
      ),
    }));
  },

  clearSelection: () => {
    set({ selectedCabinetId: null });
  },

  saveProject: () => {
    const { cabinets, globalParameters } = get();
    const project = { cabinets, globalParameters };
    localStorage.setItem('cabinet-design-project', JSON.stringify(project));
  },

  loadProject: () => {
    try {
      const saved = localStorage.getItem('cabinet-design-project');
      if (saved) {
        const project = JSON.parse(saved);
        set({
          cabinets: project.cabinets || [],
          globalParameters: project.globalParameters || defaultGlobalParameters,
        });
      }
    } catch (error) {
      console.error('Failed to load project:', error);
    }
  },
}));
