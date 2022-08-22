import { neutral, primaryColor } from "./colors";

export const defaultTheme = {
  primaryColor: primaryColor[500],
  buttonColor: neutral[100],
  buttonBgColor: primaryColor[400],
  bgColor: neutral[100],
  textColor: neutral[600],
  textColorLight: neutral[400],
  lightBgColor: neutral[300],
};

export const darkTheme = {
  primaryColor: primaryColor[500],
  buttonColor: neutral[100],
  buttonBgColor: primaryColor[500],
  bgColor: neutral[500],
  textColor: neutral[100],
  lightBgColor: neutral[400],
  textColorLight: neutral[400],
};
