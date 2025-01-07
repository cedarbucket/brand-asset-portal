import { StaticImageData } from "next/image";

export type TLogoColor = {
  id: string;
  filePath: string;
  src: string | StaticImageData;
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
