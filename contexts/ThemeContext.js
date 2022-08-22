import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { defaultTheme, darkTheme } from "../utils/theme";

export const ThemeContext = React.createContext();

export const ThemeToggleProvider = ({ children }) => {
  const [mode, setMode] = useLocalStorage("displayMode", "dark");

  const [activeTheme, setActiveTheme] = useState(darkTheme);

  useEffect(() => {
    if (mode === "normal") {
      setActiveTheme(darkTheme);
    }
    if (mode === "dark") {
      console.log("in");
      setActiveTheme(defaultTheme);
    }
  }, [mode]);

  const toggleTheme = () => {
    if (mode === "normal") {
      setMode("dark");
    }
    if (mode === "dark") {
      console.log("in");
      setMode("normal");
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, activeTheme }}>
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (context) {
    return context;
  } else {
    // throw new Error("This can only be used inside theme context");
    console.log("This can only be used inside theme context");
  }
};
