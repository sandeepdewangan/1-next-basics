"use client";

import { createContext } from "react";
import React from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "red",
    secondary: "orange",
  },
};

export const ThemeContext = createContext<Theme>(defaultTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
};

export default ThemeProvider;
