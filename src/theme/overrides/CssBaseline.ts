import { ThemeOptions } from "@mui/material";
import Inter from "@/assets/fonts/Inter.ttf";

export const cssBaselineOverrides: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: `
        @font-face {
          font-family: 'Inter';
          src: url('${Inter as string}') format('truetype');
        }
      `,
  },
};
