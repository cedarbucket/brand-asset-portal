import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type AppStateType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string | null>>;
};

export const ThemeState = createContext<AppStateType>({} as AppStateType);

export const ThemeStateProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("dark");
    }
  }, []);

  if (theme === null) {
    return null;
  }

  return (
    <ThemeState.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeState.Provider>
  );
};
