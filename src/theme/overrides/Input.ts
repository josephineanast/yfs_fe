import { ThemeOptions } from "@mui/material";
import { pxToRem } from "@/utils";

export const input: ThemeOptions["components"] = {
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& > .MuiSvgIcon-root": {
          color: theme.palette.neutral.light,
        },
        "&.Mui-focused > .MuiSvgIcon-root": {
          color: theme.palette.primary.main,
        },
        "&.Mui-error > .MuiSvgIcon-root": {
          color: theme.palette.error.main,
          fontWeight: 300,
        },
        "&.Mui-disabled": {
          backgroundColor: "#f6f8fc",
        },
      }),
      input: {
        borderRadius: 6,
        fontSize: pxToRem(14),
      },
      multiline: {
        "&.MuiInputBase-root": {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
      inputAdornedStart: {
        marginLeft: 10,
      },
      inputAdornedEnd: {
        marginRight: 10,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 6,
      },
      input: {
        paddingTop: 12.5,
        paddingBottom: 12.5,
        borderRadius: 6,
      },
      notchedOutline: ({ theme }) => ({
        ".MuiOutlinedInput-root &": {
          borderColor: theme.palette.neutral.main,
        },
        ".MuiOutlinedInput-root.Mui-disabled &": {
          borderColor: theme.palette.neutral.light,
        },
      }),
    },
  },
};
