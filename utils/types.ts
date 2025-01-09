import { BASE_COLORS, BASE_FONTS } from "@/theme";

export type TLogoColor = {
  id: string;
  filePath: string;
  src: string;
};

export type TLogoVariant = {
  name: string;
  colors: TLogoColor[];
};

export type TLogoVariants = {
  [K in
    | "pure_pines"
    | "pine_plate"
    | "full_identity"
    | "signature_text"]: TLogoVariant;
};

export type TColors = Array<{
  id: string;
  color: keyof typeof BASE_COLORS;
  label: string;
  hex: string;
}>;

export type TFonts = Array<{
  id: string;
  name: string;
  font: keyof typeof BASE_FONTS;
  files: Array<string>;
}>;

export type TMockups = Array<{
  id: string;
  filePath: string;
  preview: string;
}>;

export type TDocumentKey = "business-card" | "letterhead" | "email-signature";

export type TDocuments = Array<{
  key: TDocumentKey;
  label: string;
}>;

export type TBusinessCards = Array<{
  id: string;
  label: string;
  preview: string;
  filePath: string;
}>;

export type TLetterhead = {
  id: string;
  filePath: string;
  preview: string;
};

export type TEmailSignature = {
  id: string;
  filePath: string;
  preview: string;
};

export type TSocialMediaPlatformKey = "facebook" | "instagram" | "linkedin";

export type TSocialMediaPlatforms = Array<{
  key: TSocialMediaPlatformKey;
  label: string;
}>;

export type TSocialPlatform = Array<{
  id: string;
  label: string;
  preview: Array<string>;
  files: Array<string>;
}>;
