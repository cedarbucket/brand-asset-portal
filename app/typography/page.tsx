import { Metadata } from "next";
import { TypographyPage } from "./TypographyPage";

export const metadata: Metadata = {
  title: "Typography | Cedar Bucket | Brand Asset Portal",
  description:
    "Cedar Bucket is a brand asset portal that allows you to manage your brand assets in one place.",
};

export default function Typography() {
  return <TypographyPage />;
}
