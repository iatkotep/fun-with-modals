export type TPalette = {
  [key: number]: string;
};
export const colors: { [key: string]: TPalette } = {
  green: {
    900: "#4E5C4B", // ** Official
    800: "#70846B", // ** Official
    700: "#7E907A", // ** Official
    600: "#8D9D89", // ** Official
    500: "#9BA997", // ** Official
    400: "#A9B5A6", // ** Official
    300: "#B8C2B5", // ** Official
    200: "#D8E5D4", // ** Official
    100: "#F1F3F0", // ** Official
  },
  blue: {
    900: "#2D3F4C", // ** Official
    800: "#384F5F", // ** Official
    700: "#4C616F", // ** Official
    600: "#60727F", // ** Official
    500: "#74848F", // ** Official
    400: "#88959F", // ** Official
    300: "#9CA7AF", // ** Official
    200: "#AFB9BF", // ** Official
    100: "#EBEDEF", // ** Official
  },
  brown: {
    900: "#625A56", // ** Official
    800: "#7A716C", // ** Official
    700: "#877F7B", // ** Official
    600: "#958D89", // ** Official
    500: "#A29C98", // ** Official
    400: "#AFAAA7", // ** Official
    300: "#BDB8B6", // ** Official
    200: "#CAC6C4", // ** Official
    100: "#F2F1F0", // ** Official
  },
  sky: {
    900: "#ACC2D3", // ** Official
    800: "#BFD8EA", // ** Official
    700: "#C5DCEC", // ** Official
    600: "#CCE0EE", // ** Official
    500: "#D2E4F0", // ** Official
    400: "#D9E8F2", // ** Official
    300: "#DFECF5", // ** Official
    200: "#ECF3F9", // ** Official
    100: "#F9FBFD", // ** Official
  },
  tea: {
    900: "#CCD6BA", // ** Official
    800: "#E3EECF", // ** Official
    700: "#E6F0D4", // ** Official
    600: "#E9F1D9", // ** Official
    500: "#EBF3DD", // ** Official
    400: "#EEF5E2", // ** Official
    300: "#F1F7E7", // ** Official
    200: "#F7FAF1", // ** Official
    100: "#FCFDFA", // ** Official
  },
  blush: {
    900: "#DDC2A9", // ** Official
    800: "#F6D7BC", // ** Official
    700: "#F7DBC3", // ** Official
    600: "#F8DFC9", // ** Official
    500: "#F9E3D0", // ** Official
    400: "#FAE7D7", // ** Official
    300: "#FBEBDE", // ** Official
    200: "#FCF3EB", // ** Official
    100: "#FEFBF8", // ** Official
  },
  sand: {
    900: "#DDD8CE", // ** Official
    800: "#F5F0E5", // ** Official
    700: "#F6F2E8", // ** Official
    600: "#F7F3EA", // ** Official
    500: "#F8F5ED", // ** Official
    400: "#F9F6EF", // ** Official
    300: "#FCFAF6", // ** Official
    200: "#FDFCFA", // ** Official
    100: "#FEFEFC", // ** Official
  },
  red: {
    100: "#f9ccd2",
    200: "#e5999b",
    300: "#d87375",
    400: "#e15454",
    500: "#e5453d",
    600: "#d63c3b",
    700: "#c43335",
    800: "#b72d2e",
    900: "#a92223",
  },

  white: {
    900: "#ffffff",
    800: "#ffffff",
    700: "#ffffff",
    600: "#ffffff",
    500: "#ffffff",
    400: "#ffffff",
    300: "#ffffff",
    200: "#ffffff",
    100: "#ffffff",
  },
  black: {
    900: "#000000",
    800: "#000000",
    700: "#000000",
    600: "#000000",
    500: "#000000",
    400: "#000000",
    300: "#000000",
    200: "#000000",
    100: "#000000",
  },
};
export const getThemeColor = (color: string, value?: number): string => {
  const [colorName, val = "800"] = color.split(".");
  const colorValue = !!value ? value : Number(val);

  return colors[colorName][colorValue];
};
