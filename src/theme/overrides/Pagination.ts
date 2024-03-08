import { ThemeOptions } from "@mui/material";

export const paginationOverrides: ThemeOptions["components"] = {
  MuiPagination: {
    defaultProps: {
      shape: "rounded",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        "& > .Mui-selected": {
          color: theme.palette.primary.main,
        },
      }),
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&.Mui-selected": {
          background: "none",
          color: theme.palette.primary.main,
          "&:hover": {
            background: theme.palette.primary.main,
          },
        },
        "&:hover": {
          background: theme.palette.primary.main,
          color: theme.palette.neutral.semantic,
        },
      }),
      icon: ({ theme }) => ({
        color: theme.palette.primary.main,
      }),
      text: ({ theme }) => ({
        color: theme.palette.neutral.main,
      }),
    },
  },
};
