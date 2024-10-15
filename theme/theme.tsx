import { defaultTheme } from "./Modes/defaultTheme";

export type AppTheme = typeof defaultTheme;
export type AppThemeColors = keyof AppTheme["colors"];

export const themeMap = {
  default: defaultTheme,
};

export type ThemeMode = keyof typeof themeMap;
export const ThemeKeys = Object.keys(themeMap);

import { AppBorderRadii, AppSpaceProps, AppColors } from "./Elements";
import {
  ColorProps,
  BorderRadiusProps,
  SpaceProps,
  PositionProps,
} from "styled-system";

export type ThemedColorProps = {
  [Property in keyof ColorProps]: AppColors;
};

export type ThemedBorderRadiusProps = {
  [Property in keyof BorderRadiusProps]: AppBorderRadii | AppBorderRadii[];
};

export type ThemedSpaceProps = {
  [Property in keyof SpaceProps]: AppSpaceProps | AppSpaceProps[];
};
export type ThemedPositionProps = {
  [Property in keyof PositionProps]: AppSpaceProps | AppSpaceProps[];
};

export function getTheme(): AppTheme {
  return defaultTheme;
}
