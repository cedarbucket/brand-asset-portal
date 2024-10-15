export interface AppThemeComplete {
  colors: {
    [key: string]: string;
  };
  space: {
    [key: string]: string | number;
  };
  fontSizes: {
    [key: string]: string | number;
  };
  fontWeights: {
    [key: string]: number;
  };
  radii: {
    [key: string]: string | number;
  };
  shadows: {
    [key: string]: string;
  };
  breakpoints:
    | {
        [key: string]: string;
      }
    | string[];
  zIndex: {
    [key: string]: number;
  };
  transitions: {
    [key: string]: string;
  };
  borders: {
    [key: string]: string;
  };
  textVariants: {
    [key: string]: {
      [property: string]: string | number;
    };
  };
  buttonVariants: {
    [key: string]: {
      [property: string]: string | number;
    };
  };
  buttonStyles: {
    [key: string]: {
      [property: string]: string | number;
    };
  };
  fonts: {
    [key: string]: string;
  };
  lineHeights: {
    [key: string]: number | string;
  };
  letterSpacing: {
    [key: string]: string;
  };
  sizes: {
    [key: string]: string | number;
  };
  formElements: {
    [element: string]: {
      [property: string]: string | number;
    };
  };
}

export type AppTheme = Partial<AppThemeComplete>;
