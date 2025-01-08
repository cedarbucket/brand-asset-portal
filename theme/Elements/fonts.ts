export const BASE_FONTS: Record<AppThemeFonts, string> = {
  heading: "DMSansBold",
  subHeading: "DMSansSemiBold",
  body: "DMSansRegular",
  neutraTextBook: "NeutraTextBook",
  neutraTextBold: "NeutraTextBold",
  poiretOneRegular: "PoiretOneRegular",
};

export type AppThemeFonts =
  | "heading"
  | "subHeading"
  | "body"
  | "neutraTextBook"
  | "neutraTextBold"
  | "poiretOneRegular";
