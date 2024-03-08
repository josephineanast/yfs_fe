import { ThemeOptions } from "@mui/material";

export const listOverides: ThemeOptions["components"] = {
  MuiListItemButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.neutral.main,
        "&:hover, &:hover.Mui-selected": {
          backgroundColor: theme.palette.special.dashboardBg,
        },
        "&:active": {
          backgroundColor: theme.palette.neutral.light,
        },
        "&.Mui-selected": {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.special.dashboardBg,
          ".MuiListItemIcon-root .MuiSvgIcon-root": {
            color: theme.palette.primary.main,
          },
          ".MuiListItemIcon-text": {
            color: theme.palette.primary.main,
          },
        },
      }),
    },
  },
  MuiListItemText: {
    defaultProps: {
      primaryTypographyProps: {
        variant: "b2",
      },
    },
  },
};
