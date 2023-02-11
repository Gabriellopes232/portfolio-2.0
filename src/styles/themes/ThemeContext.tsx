import React, { createContext, ReactNode, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { combineTheme, dark, light } from '.';

interface Props {
  children: ReactNode;
}

const ThemeToggleContext = createContext<
  | {
      toggleTheme: () => void;
      currentTheme: string;
    }
  | undefined
>(undefined);

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark));

  const toggleTheme = () => {
    setTheme(
      theme.title === 'light' ? combineTheme(dark) : combineTheme(light)
    );
  };

  return (
    <ThemeToggleContext.Provider
      value={{ toggleTheme, currentTheme: theme.title }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;
