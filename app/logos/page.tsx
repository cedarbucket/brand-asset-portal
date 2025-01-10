import { Metadata } from "next";
import { LogosPage } from "./LogosPage";

export const metadata: Metadata = {
  title: "Logos | Cedar Bucket | Brand Asset Portal",
  description:
    "Cedar Bucket is a brand asset portal that allows you to manage your brand assets in one place.",
};

export default function Logos() {
  return <LogosPage />;
}
