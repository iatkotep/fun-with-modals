import { extendTheme } from "@chakra-ui/react";
import { components, colors, typography, styles } from "./_";
import { TGenericObject } from "../global/types";

export type TUIStyles = {
  [key: string]: any;
  base?: TGenericObject;
  sm?: TGenericObject;
  smm?: TGenericObject;
  md?: TGenericObject;
  lg?: TGenericObject;
  xl?: TGenericObject;
  xxl?: TGenericObject;
};

export type TBreakpoints = {
  [key: string]: number;
};

interface ISystemBreakpoints extends TBreakpoints {
  base: number;
  sm: number;
  smm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}
export const SystemBreakpoints: ISystemBreakpoints = {
  base: 0,
  sm: 320,
  smm: 500,
  md: 600,
  lg: 960,
  xl: 1200,
  xxl: 1536,
};

const breakpoints = Object.entries(SystemBreakpoints).reduce(
  (acc, [name, value]) => ({ ...acc, [name]: `${value}px` }),
  {}
);

const overrides = {
  // components,
  // colors,
  // styles,
  breakpoints,
  // ...typography,
};
const theme: any = extendTheme(overrides);

export default theme;
