import { Metadata } from "next";
import { MockupsPage } from "./MockupsPage";

export const metadata: Metadata = {
  title: "Mockups | Cedar Bucket | Brand Asset Portal",
  description:
    "Cedar Bucket is a brand asset portal that allows you to manage your brand assets in one place.",
};

export default function Mockups() {
  return <MockupsPage />;
}
