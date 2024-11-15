import { template5 } from "./assets";

// color design tokens export
export const colorTokens = {
  grey: {
    0: "#F5F5F5",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDEB",
    500: "#00D5DA",
    600: "#608BC1", // Changed to soft blue
    700: "#00D5BA",
    800: "#00D5AB",
    900: "#6A8EAE", // Soft blue dark
  },
  template1: {
    50: "#A1CAF1",
    100: "#004F98",
    200: "#00308F",
  },
  template2: {
    50: " #FDFF86 ",
    100: " #FFEE0D ",
    200: " #FFD500 ",
  },
  template3: {
    50: "#F8D6F7",
    100: "#9B308B",
    200: "#7F2972",
  },
  template4: {
    50: "#F83CBB",
    100: "#A70D67",
    200: "#8B1057",
  },
  template5: {
    50: "#333",
    100: "#666",
    200: "#999",
  },
  
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[900],
              main: colorTokens.primary[600],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            template1: {
              dark: colorTokens.template1[200],
              main: colorTokens.template1[100],
              light: colorTokens.template1[50],
            },
            template2: {
              dark: colorTokens.template2[200],
              main: colorTokens.template2[100],
              light: colorTokens.template2[50],
            },
            template3: {
              dark: colorTokens.template3[200],
              main: colorTokens.template3[100],
              light: colorTokens.template3[50],
            },
            template4: {
              dark: colorTokens.template4[200],
              main: colorTokens.template4[100],
              light: colorTokens.template4[50],
            },
            template5: {
              dark: colorTokens.template5[200],
              main: colorTokens.template5[100],
              light: colorTokens.template5[50],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[900],
              main: colorTokens.primary[600],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[100],
            },
            template1: {
              dark: colorTokens.template1[200],
              main: colorTokens.template1[100],
              light: colorTokens.template1[50],
            },
            template2: {
              dark: colorTokens.template2[200],
              main: colorTokens.template2[100],
              light: colorTokens.template2[50],
            },
            template3: {
              dark: colorTokens.template3[200],
              main: colorTokens.template3[100],
              light: colorTokens.template3[50],
            },
            template4: {
              dark: colorTokens.template4[200],
              main: colorTokens.template4[100],
              light: colorTokens.template4[50],
            },
            template5: {
              dark: colorTokens.template5[200],
              main: colorTokens.template5[100],
              light: colorTokens.template5[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
  };
};
