import { BASE_COLORS } from "@/theme";

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
