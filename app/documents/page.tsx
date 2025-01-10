import { Metadata } from "next";
import { DocumentsPage } from "./DocumentsPage";

export const metadata: Metadata = {
  title: "Documents | Cedar Bucket | Brand Asset Portal",
  description:
    "Cedar Bucket is a brand asset portal that allows you to manage your brand assets in one place.",
};

export default function Documents() {
  return <DocumentsPage />;
}
