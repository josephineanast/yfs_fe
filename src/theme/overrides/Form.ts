import { ThemeOptions } from "@mui/material";
import { pxToRem } from "@/utils";

export const formOverrides: ThemeOptions["components"] = {
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 4,
        color: theme.palette.neutral.darker,
      }),
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: pxToRem(14),
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        marginRight: 0,
        "&.Mui-error": {
          fontWeight: 600,
        },
      },
    },
  },
};
