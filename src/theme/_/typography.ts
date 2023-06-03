import { TGenericObject } from '../../global/types';

export enum FontFamily {
  serif = 'Judson,serif',
  sans = 'Roboto,sans-serif',
  mono = 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
}

// const breakpoint = 'lg';
type TChakraValue = string | { [key: string]: string };
type TFontSpec = {
  [key: string]: TChakraValue;
  fontFamily: TChakraValue;
  fontSize: TGenericObject;
  fontWeight: TChakraValue;
  lineHeight: TChakraValue;
  letterSpacing: TChakraValue;
};
const headingLineHeight = '1.15';
const createFontSize = (size: number): TGenericObject => ({
  base: `${size}px`,
  // base: `${size / 1.6680887372}px`,
  // [breakpoint]: `${size}px`,
});
const FontSpecs: { [key: string]: TFontSpec } = {
  h1: {
    fontFamily: FontFamily.serif,
    fontSize: createFontSize(48.8),
    fontWeight: '400',
    lineHeight: headingLineHeight,
    letterSpacing: '0',
  },
  h2: {
    fontFamily: FontFamily.serif,
    fontSize: createFontSize(39.1),
    fontWeight: '400',
    lineHeight: headingLineHeight,
    letterSpacing: '0',
  },
  h3: {
    fontFamily: FontFamily.serif,
    fontSize: createFontSize(31.3),
    fontWeight: '400',
    lineHeight: headingLineHeight,
    letterSpacing: '0',
  },
  h4: {
    fontFamily: FontFamily.serif,
    fontSize: createFontSize(25),
    fontWeight: '400',
    lineHeight: headingLineHeight,
    letterSpacing: '0',
  },
  h5: {
    fontFamily: FontFamily.serif,
    fontSize: createFontSize(20),
    fontWeight: '400',
    lineHeight: headingLineHeight,
    letterSpacing: '0',
  },
  h6: {
    fontFamily: FontFamily.sans,
    fontSize: createFontSize(16),
    fontWeight: '700',
    lineHeight: '1.5',
    letterSpacing: '0',
  },
  copy: {
    fontFamily: FontFamily.sans,
    fontSize: { base: '15px' },
    fontWeight: '400',
    lineHeight: '1.6',
    letterSpacing: '0',
  },
  button: {
    fontFamily: FontFamily.serif,
    fontSize: { base: '17px' },
    fontWeight: '400',
    lineHeight: '1.0625',
    letterSpacing: '.02em',
  },
  caption: {
    fontFamily: FontFamily.sans,
    fontSize: { base: '12px' },
    fontWeight: '400',
    lineHeight: '1.3333333333',
    letterSpacing: '.02em',
  },
};

const getPropClass = (propKey: string | number): TGenericObject =>
  Object.entries(FontSpecs).reduce(
    (
      acc,
      [fontKind, fontSpec]: [fontKind: string, fontSpec: TGenericObject]
    ) => ({
      ...acc,
      [fontKind]: fontSpec[propKey],
    }),
    {}
  );
export const typography = {
  fonts: {
    heading: FontFamily.serif,
    body: FontFamily.sans,
    mono: FontFamily.mono,
  },
  fontSizes: getPropClass('fontSize'),
  fontWeights: getPropClass('fontWeight'),
  lineHeights: getPropClass('lineHeight'),
  letterSpacings: getPropClass('letterSpacing'),
};
export const getTypography = (kind: string) => FontSpecs[kind];
