import { TLogoVariants } from "./types";
import purePinesWhite from "../public/original/logos/pure_pines_white.png";
import purePinesBrown from "../public/original/logos/pure_pines_brown.png";
import purePinesBlack from "../public/original/logos/pure_pines_black.png";
import pinePlateWhite from "../public/original/logos/pine-plate-white.png";
import pinePlateBrown from "../public/original/logos/pine-plate-brown.png";
import pinePlateBlack from "../public/original/logos/pine-plate-black.png";
import fullIdentityWhite from "../public/original/logos/full-identity-white.png";
import fullIdentityBrown from "../public/original/logos/full-identity-brown.png";
import fullIdentityBlack from "../public/original/logos/full-identity-black.png";
import signatureTextWhite from "../public/original/logos/signature-text-white.png";
import signatureTextBrown from "../public/original/logos/signature-text-brown.png";
import signatureTextBlack from "../public/original/logos/signature-text-black.png";

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
        src: purePinesWhite,
      },
      {
        id: "pure-pines-brown",
        filePath: "",
        src: purePinesBrown,
      },
      {
        id: "pure-pines-black",
        filePath: "",
        src: purePinesBlack,
      },
    ],
  },
  pine_plate: {
    name: "Pine Plate",
    colors: [
      {
        id: "pine-plate-white",
        filePath: "",
        src: "/original/logos/pine-plate-white.png",
      },
      {
        id: "pine-plate-brown",
        filePath: "",
        src: "/original/logos/pine-plate-brown.png",
      },
      {
        id: "pine-plate-black",
        filePath: "",
        src: "/original/logos/pine-plate-black.png",
      },
    ],
  },
  full_identity: {
    name: "Full Identity",
    colors: [
      {
        id: "full-identity-white",
        filePath: "",
        src: "/original/logos/full-identity-white.png",
      },
      {
        id: "full-identity-brown",
        filePath: "",
        src: "/original/logos/full-identity-brown.png",
      },
      {
        id: "full-identity-black",
        filePath: "",
        src: "/original/logos/full-identity-black.png",
      },
    ],
  },
  signature_text: {
    name: "Signature Text",
    colors: [
      {
        id: "signature-text-white",
        filePath: "",
        src: "/original/logos/signature-text-white.png",
      },
      {
        id: "signature-text-brown",
        filePath: "",
        src: "/original/logos/signature-text-brown.png",
      },
      {
        id: "signature-text-black",
        filePath: "",
        src: "/original/logos/signature-text-black.png",
      },
    ],
  },
};
