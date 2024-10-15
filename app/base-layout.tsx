"use client";
import { ThemeStateProvider } from "@/context/ThemeState";
import { AppThemeProvider } from "@/theme/AppThemeProvider";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeStateProvider>
          <AppThemeProvider>{children}</AppThemeProvider>
        </ThemeStateProvider>
      </body>
    </html>
  );
}
