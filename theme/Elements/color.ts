export const BASE_COLORS = {
  primary: "#000000",
  white: "#ffffff",
  black: "#000000",
  eerieBlack: "#1E1E1E",
  coffeeBrown: "#775D47",
  grey: "#C1C1C1",
  lightGrey: "#C1C1C173",
  success: "#3f8f29",
  error: "#cc0000",
  transparent: "",
  background: "",
  foreground: "",
};

export const LIGHT_COLORS = {
  ...BASE_COLORS,
  background: "#FFFFFF",
  foreground: "#000000",
};

export const DARK_COLORS = {
  ...BASE_COLORS,
  background: "#000000",
  foreground: "#FFFFFF",
};

export type AppColors = keyof typeof BASE_COLORS;
