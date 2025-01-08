"use client";
import { Box, Footer, Header } from "@/components";
import { ThemeStateProvider } from "@/context/ThemeState";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { GlobalStyle } from "../theme/GlobalStyle";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("cedar-token");
      if (!token && pathname !== "/") {
        router.push("/");
      }
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <ThemeStateProvider>
          <AppThemeProvider>
            <GlobalStyle />
            <Box width={"100vw"} height={"100vh"} bg={"black"}>
              {pathname !== "/" && <Header />}
              {children}
              {pathname !== "/" && <Footer />}
            </Box>
          </AppThemeProvider>
        </ThemeStateProvider>
      </body>
    </html>
  );
}
