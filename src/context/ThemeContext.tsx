import React, { createContext } from "react";

// Define the shape of the context value
interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Provide a default value
const defaultThemeContext: ThemeContextType = {
  theme: "light", // or "dark" if you prefer
  setTheme: () => {},
};

// Create the context
export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);
