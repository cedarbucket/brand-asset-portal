"use client";
import { ThemeProvider } from "styled-components";

import { ThemeState } from "@/context/ThemeState";
import { useContext } from "react";
import { DARK_THEME } from "./Modes/dark";
import { LIGHT_THEME } from "./Modes/light";

type AppThemeProviderProps = {
  children: React.ReactNode;
};

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const { theme } = useContext(ThemeState);
  const activeTheme = theme === "dark" ? DARK_THEME : LIGHT_THEME;
  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};
