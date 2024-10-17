import { BASE_COLORS, BASE_BORDER_RADII, BASE_SPACING } from ".";

export const BASE_BUTTON_VARIANTS = {
  primary: {
    backgroundColor: BASE_COLORS.primary,
    color: BASE_COLORS.white,
    border: "none",
    borderRadius: BASE_BORDER_RADII.xs,
    paddingLeft: BASE_SPACING.xxl,
    paddingRight: BASE_SPACING.xxl,
    paddingTop: BASE_SPACING.l,
    paddingBottom: BASE_SPACING.l,
    fontSize: BASE_SPACING.xxl,
  },
};
export type AppButtonVariants = keyof typeof BASE_BUTTON_VARIANTS;
