import React, { ReactNode, useEffect } from "react";
import { ThemeContext, Theme, themes } from "./ThemeContext";

const getTheme = (): Theme => {
  const storedTheme = localStorage.getItem("theme");
  const userPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (storedTheme && Object.values(themes).includes(storedTheme)) {
    return storedTheme as Theme;
  } else {
    return userPrefersDark ? Theme.Dark : Theme.Light;
  }
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = React.useState<Theme>(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
