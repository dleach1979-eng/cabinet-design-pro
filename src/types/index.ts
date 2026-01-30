// Cabinet types
export type CabinetType = 'base' | 'upper' | 'tall';
export type DoorStyle = 'shaker' | 'flat';

// Cabinet dimensions interface
export interface Dimensions {
  width: number;  // in inches
  height: number; // in inches
  depth: number;  // in inches
}

// Cabinet interface
export interface Cabinet {
  id: string;
  type: CabinetType;
  position: [number, number, number]; // [x, y, z] in world space
  dimensions: Dimensions;
  doorStyle: DoorStyle;
  selected?: boolean;
}

// Global parameters interface
export interface GlobalParameters {
  upperCabinetDepth: number;
  baseCabinetDepth: number;
  baseCabinetHeight: number;
  upperCabinetHeight: number;
  tallCabinetHeight: number;
  defaultDoorStyle: DoorStyle;
}

// View preset types
export type ViewPreset = 'top' | 'front' | 'side' | 'isometric' | '3d';

// Navigation mode types
export type NavigationMode = 'pan' | 'orbit' | 'zoom';

// UI state interface
export interface UIState {
  activeNavigationMode: NavigationMode | null;
  currentView: ViewPreset;
  sidebarOpen: boolean;
  propertiesPanelOpen: boolean;
  settingsPanelOpen: boolean;
  showDimensions: boolean;
  showGrid: boolean;
}

// Project state interface
export interface ProjectState {
  name: string;
  cabinets: Cabinet[];
  selectedCabinetId: string | null;
  globalParameters: GlobalParameters;
}
