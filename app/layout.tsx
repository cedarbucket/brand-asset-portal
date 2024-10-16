import type { Metadata } from "next";
import BaseLayout from "./base-layout";

export const metadata: Metadata = {
  title: "Nextjs Styled Boilerplate",
  description:
    "Nextjs, styled components, styled system, typescript based boilerplate repo with dark and light mode functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}
