import { BASE_COLORS } from "@/theme";
import { TColors, TLogoVariants } from "./types";

export const HeaderLinks = [
  {
    label: "Logos",
    href: "/",
  },
  {
    label: "Colors",
    href: "/colors",
  },
  {
    label: "Typography",
    href: "/typography",
  },
  {
    label: "Social Media",
    href: "/social-media",
  },
  {
    label: "Mockups",
    href: "/mockups",
  },
  {
    label: "Documents",
    href: "/documents",
  },
];

export const LogoVariants: TLogoVariants = {
  pure_pines: {
    name: "Pure Pines",
    colors: [
      {
        id: "pure-pines-white",
        filePath: "",
        src: "/assets/images/pure_pines_white.png",
      },
      {
        id: "pure-pines-brown",
        filePath: "",
        src: "/assets/images/pure_pines_brown.png",
      },
      {
        id: "pure-pines-black",
        filePath: "",
        src: "/assets/images/pure_pines_black.png",
      },
    ],
  },
  pine_plate: {
    name: "Pine Plate",
    colors: [
      {
        id: "pine-plate-white",
        filePath: "",
        src: "/assets/images/pine_plate_white.png",
      },
      {
        id: "pine-plate-brown",
        filePath: "",
        src: "/assets/images/pine_plate_brown.png",
      },
      {
        id: "pine-plate-black",
        filePath: "",
        src: "/assets/images/pine_plate_black.png",
      },
    ],
  },
  full_identity: {
    name: "Full Identity",
    colors: [
      {
        id: "full-identity-white",
        filePath: "",
        src: "/assets/images/full_identity_white.png",
      },
      {
        id: "full-identity-brown",
        filePath: "",
        src: "/assets/images/full_identity_brown.png",
      },
      {
        id: "full-identity-black",
        filePath: "",
        src: "/assets/images/full_identity_black.png",
      },
    ],
  },
  signature_text: {
    name: "Signature Text",
    colors: [
      {
        id: "signature-text-white",
        filePath: "",
        src: "/assets/images/signature_text_white.png",
      },
      {
        id: "signature-text-brown",
        filePath: "",
        src: "/assets/images/signature_text_brown.png",
      },
      {
        id: "signature-text-black",
        filePath: "",
        src: "/assets/images/signature_text_black.png",
      },
    ],
  },
};

export const Colors: TColors = [
  {
    id: "black",
    label: "Black",
    color: "black",
    hex: BASE_COLORS.black,
  },
  {
    id: "eerie-black",
    label: "Eerie Black",
    color: "eerieBlack",
    hex: BASE_COLORS.eerieBlack,
  },
  {
    id: "coffee-brown",
    label: "Coffee Brown",
    color: "coffeeBrown",
    hex: BASE_COLORS.coffeeBrown,
  },
  {
    id: "white",
    label: "White",
    color: "white",
    hex: BASE_COLORS.white,
  },
];
