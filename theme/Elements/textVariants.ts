import { BASE_FONTS } from ".";

export const BASE_TEXT_VARIANTS = {
  heading: {
    fontSize: 35,
    fontFamily: BASE_FONTS.heading,
  },
  subHeading: {
    fontSize: 20,
    fontFamily: BASE_FONTS.subHeading,
  },
  body: {
    fontSize: 18,
    fontFamily: BASE_FONTS.body,
  },
};

export type AppTextVariants = keyof typeof BASE_TEXT_VARIANTS;
