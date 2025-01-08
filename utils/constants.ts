import { BASE_COLORS } from "@/theme";
import {
  TBusinessCards,
  TColors,
  TDocuments,
  TEmailSignature,
  TFonts,
  TLetterhead,
  TLogoVariants,
  TMockups,
} from "./types";

export const HeaderLinks = [
  {
    label: "Logos",
    href: "/logos",
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

export const Fonts: TFonts = [
  {
    id: "neutra-text",
    name: "Neutra Text",
    font: "neutraTextBook",
    files: [
      "/assets/fonts/NeutraText-Book.otf",
      "/assets/fonts/NeutraText-Bold.otf",
    ],
  },
  {
    id: "poiret-one",
    font: "poiretOneRegular",
    name: "Poiret One",
    files: ["/assets/fonts/PoiretOne-Regular.ttf"],
  },
];

export const Mockups: TMockups = [
  {
    id: "alpha",
    preview: "/assets/images/mockup_alpha_image.png",
    filePath: "/assets/pdfs/alpha.pdf",
  },
  {
    id: "beta",
    preview: "/assets/images/mockup_beta_image.png",
    filePath: "/assets/pdfs/beta.pdf",
  },
  {
    id: "charlie",
    preview: "/assets/images/mockup_charlie_image.png",
    filePath: "/assets/pdfs/charlie.pdf",
  },
];

export const DocumentTypes: TDocuments = [
  {
    key: "business-card",
    label: "Business Card Designs",
  },
  {
    key: "letterhead",
    label: "Letterhead Designs",
  },
  {
    key: "email-signature",
    label: "Email Signature Designs",
  },
];

export const BusinessCards: TBusinessCards = [
  {
    id: "standard",
    preview: "/assets/svgs/standard-front.svg",
    filePath: "/assets/pdfs/Standard.pdf",
    label: "Standard",
  },
  {
    id: "minimal",
    preview: "/assets/svgs/minimal-front.svg",
    filePath: "/assets/pdfs/Minimal.pdf",
    label: "Minimal",
  },
  {
    id: "premium",
    preview: "/assets/svgs/premium-front.svg",
    filePath: "/assets/pdfs/Premium.pdf",
    label: "Premium",
  },
];

export const Letterhead: TLetterhead = {
  id: "body",
  preview: "/assets/svgs/letterhead-body.svg",
  filePath: "/assets/pdfs/Letterhead.pdf",
};

export const EmailSignature: TEmailSignature = {
  id: "",
  preview: "/assets/svgs/email-signature.svg",
  filePath: "/assets/images/email_signature_image.png",
};
