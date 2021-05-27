import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    red: "#f9423a",
    brown: "#a23530",
    black: "#a23530",
    grey: "#6e7679",
    lightGrey: "#e2e4e4",
		white: "#f1f1f2"
  },
  fontSizes: {
		verySmall: "8px",
    small: "12px",
    medium: "14px",
    large: "26px",
		veryLarge: "20px",
  },
  space: {
    verySmall: "4px",
    small: "8px",
    medium: "16px",
    large: "24px",
    veryLarge: "32px",
    huge: "32px",
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme