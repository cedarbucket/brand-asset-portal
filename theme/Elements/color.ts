export const BASE_COLORS = {
  white: "#ffffff",
  black: "#000000",
  grey: "#C1C1C1",
  lightGrey: "#C1C1C173",
  success: "#3f8f29",
  transparent: "",
  background: "",
  foreground: "",
};

export const LIGHT_COLORS = {
  ...BASE_COLORS,
  bg2: "#F4F6F9",
  background: "#FFFFFF",
  error: "#D84E4E",
  foreground: "#000000",
};

export const DARK_COLORS = {
  ...BASE_COLORS,
  background: "#000000",
  error: "#DC5F5F",
  foreground: "#FFFFFF",
};

export type AppColors = keyof typeof BASE_COLORS;
