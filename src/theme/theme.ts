import { extendTheme } from "@chakra-ui/react";

export type TBreakpoints = {
  [key: string]: number;
};

interface ISystemBreakpoints extends TBreakpoints {
  base: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}
export const SystemBreakpoints: ISystemBreakpoints = {
  // Standard
  base: 0,
  sm: 320,
  md: 768,
  lg: 960,
  xl: 1200,
  xxl: 1536,

  // Non-standard
  modalDesktop: 600,
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
