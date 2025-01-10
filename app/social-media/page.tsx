import { Metadata } from "next";
import { SocialMediaPage } from "./SocialMediaPage";

export const metadata: Metadata = {
  title: "Social Media | Cedar Bucket | Brand Asset Portal",
  description:
    "Cedar Bucket is a brand asset portal that allows you to manage your brand assets in one place.",
};

export default function SocialMedia() {
  return <SocialMediaPage />;
}
