import { BaseTheme } from "../BaseTheme";
import type { AppTheme } from "../AppTheme";
import { DARK_COLORS } from "@/theme/Elements/color";

export const DARK_THEME: AppTheme = {
  ...BaseTheme,
  colors: DARK_COLORS,
};
