export interface CrackerPropsState {
  crackerPropsValue1: number;
  crackerPropsValue2: number;
  crackerPropsValue3: number;
  crackerPropsValue4: number;
}

export interface PackState {
  cost: number;
  weight: number;
}

export interface Cracker {
  id: string;
  props: CrackerPropsState;
  option: PackState;
}

export interface CrackerPropsForSlider {
  id: number;
  name: keyof CrackerPropsState;
  value: number;
  color: string;
  disabled: boolean;
  maxValue: number;
}
