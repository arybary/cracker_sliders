export interface CrackerPropsState {
  crackerPropsValue1: number;
  crackerPropsValue2: number;
  crackerPropsValue3: number;
  crackerPropsValue4: number;
}

export type PackOptions = "small" | "medium" | "large";

export interface PackState {
  selectedPack: PackOptions | null;
}

export interface Cracker {
  id: string;
  props: CrackerPropsState;
  cost: number;
  weight: number;
}

export interface CrackerPropsForSlider {
  id: number;
  name: keyof CrackerPropsState;
  value: number;
  color: string;
  disabled: boolean;
  maxValue: number;
}
