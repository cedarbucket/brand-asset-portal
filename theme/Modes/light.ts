import { BaseTheme } from "../BaseTheme";
import type { AppTheme } from "../AppTheme";
import { LIGHT_COLORS } from "@/theme/Elements/color";

export const LIGHT_THEME: AppTheme = {
  ...BaseTheme,
  colors: LIGHT_COLORS,
};
