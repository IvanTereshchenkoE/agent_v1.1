import { ThemeContext, ThemeContextProps } from "components";
import { useContext } from "react";

const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  };
export { useTheme };
