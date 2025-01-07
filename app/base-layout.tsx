"use client";
import { Box, Footer, Header } from "@/components";
import { ThemeStateProvider } from "@/context/ThemeState";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { GlobalStyle } from "../theme/GlobalStyle";

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
            <Box width={"100vw"} height={"100vh"} bg={"black"}>
              <Header />
              {children}
              <Footer />
            </Box>
          </AppThemeProvider>
        </ThemeStateProvider>
      </body>
    </html>
  );
}
