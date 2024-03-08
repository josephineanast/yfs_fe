import { ThemeOptions } from "@mui/material";
import { pxToRem } from "@/utils";

export const tabOverrides: ThemeOptions["components"] = {
  MuiTabs: {
    styleOverrides: {
      root: ({ theme }) => ({
        ".MuiTab-textColorPrimary": {
          padding: 0,
          color: theme.palette.neutral.main,
          fontSize: pxToRem(14),
          fontWeight: 500,
          textTransform: "capitalize",
        },
      }),
    },
  },
  MuiTab: {
    defaultProps: {
      iconPosition: "start",
    },
  },
};
