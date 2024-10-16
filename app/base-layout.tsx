"use client";
import { ThemeStateProvider } from "@/context/ThemeState";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { GlobalStyle } from "@/theme/GlobalStyle";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeStateProvider>
          <AppThemeProvider>
            <GlobalStyle />
            {children}
          </AppThemeProvider>
        </ThemeStateProvider>
      </body>
    </html>
  );
}
