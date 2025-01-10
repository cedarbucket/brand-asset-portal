import { Metadata } from "next";
import { ColorsPage } from "./ColorsPage";

export const metadata: Metadata = {
  title: "Colors | Cedar Bucket | Brand Asset Portal",
  description:
    "Cedar Bucket is a brand asset portal that allows you to manage your brand assets in one place.",
};

export default function Colors() {
  return <ColorsPage />;
}
