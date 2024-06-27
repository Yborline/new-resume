import React from "react";

// Определяем перечисление для значений темы
export enum Theme {
  Light = "light",
  Dark = "dark",
}

export const themes = {
  dark: "dark",
  light: "light",
};

// Создаем интерфейс для объекта контекста
interface IThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

// Создаем контекст для темы
export const ThemeContext = React.createContext<IThemeContext>({
  theme: Theme.Light,
  setTheme: () => {},
});
