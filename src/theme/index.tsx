import { PropsWithChildren } from "react";
// material
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
//
import { componentsOverrides } from "./overrides";
import { breakpoints } from "./breakpoints";
import { palette } from "./palette";
import { typography } from "./typography";
import { shadows } from "./shadow";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    special: typeof palette.special;
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    special?: typeof palette.special;
  }

  interface SimplePaletteColorOptions {
    semantic?: string;
    darker?: string;
  }

  interface PaletteColor {
    semantic: string;
    darker: string;
  }
}

// ------------------------------------------------------------------------------------

export const theme = createTheme({
  breakpoints,
  palette,
  typography,
  shadows,
  components: componentsOverrides,
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
