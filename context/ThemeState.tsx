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
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeState = createContext<AppStateType>({} as AppStateType);

export const ThemeStateProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <ThemeState.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeState.Provider>
  );
};
