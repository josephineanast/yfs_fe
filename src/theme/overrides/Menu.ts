import { ThemeOptions } from "@mui/material";

export const menuOverrides: ThemeOptions["components"] = {
  MuiMenuItem: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.neutral.main,
        "&:hover": {
          backgroundColor: theme.palette.special.dashboardBg,
        },
        "&:active": {
          backgroundColor: theme.palette.neutral.light,
        },
        "&.Mui-selected": {
          color: theme.palette.primary.main,
          backgroundColor: "inherit !important",
        },
      }),
    },
  },
};
