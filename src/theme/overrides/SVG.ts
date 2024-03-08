import { ThemeOptions } from "@mui/material";

export const svgIconOverrides: ThemeOptions["components"] = {
  MuiSvgIcon: {
    defaultProps: {
      fontSize: "small",
    },
  },
};
