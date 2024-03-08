import { ThemeOptions } from "@mui/material";
import { pxToRem } from "../../utils";
import { LinkBehavior } from "../../components/Elements";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export const buttonOverrides: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableRipple: true,
      LinkComponent: LinkBehavior,
    },
    styleOverrides: {
      root: ({
        theme,
        ownerState: { color, variant = "contained", disabled },
      }) => ({
        textTransform: "none",
        fontSize: pxToRem(12),
        "&.Mui-disabled": {
          color: theme.palette.neutral.main,
          ...(variant === "text" && {
            backgroundColor: "transparent",
          }),
          ...(variant === "outlined" && {
            backgroundColor: theme.palette.neutral.light,
            border: `solid 1px ${theme.palette.neutral.main}`,
          }),
          ...(variant === "contained" && {
            backgroundColor: theme.palette.neutral.light,
          }),
        },
        ...(variant === "contained" && {
          color:
            color && color !== "inherit"
              ? theme.palette[`${color}`].contrastText
              : "inherit",
          backgroundColor:
            color && color !== "inherit" && !disabled
              ? theme.palette[`${color}`].main
              : "inherit",
          "&:hover": {
            backgroundColor:
              color && color !== "inherit"
                ? theme.palette[`${color}`].dark
                : "inherit",
          },
          "&:active": {
            color:
              color && color !== "inherit"
                ? theme.palette[`${color}`].contrastText
                : "inherit",
            backgroundColor:
              color && color !== "inherit"
                ? theme.palette[`${color}`].darker
                : "inherit",
          },
        }),
        ...(variant === "outlined" && {
          color:
            color && color !== "inherit"
              ? color === "neutral"
                ? theme.palette.grey[600]
                : theme.palette[`${color}`].main
              : "inherit",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
            color:
              color && color !== "inherit"
                ? theme.palette[`${color}`].dark
                : "inherit",
            borderColor:
              color && color !== "inherit"
                ? theme.palette[`${color}`].dark
                : "inherit",
          },
          "&:active": {
            backgroundColor: "transparent",
            color:
              color && color !== "inherit"
                ? theme.palette[`${color}`].darker
                : "inherit",
            borderColor:
              color && color !== "inherit"
                ? theme.palette[`${color}`].darker
                : "inherit",
          },
          "&.Mui-disabled": {
            backgroundColor: "transparent",
          },
        }),
        ...(variant === "text" && {
          color:
            color && color !== "inherit"
              ? theme.palette[`${color}`].main
              : "inherit",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
            color:
              color && color !== "inherit"
                ? theme.palette[`${color}`].dark
                : "inherit",
          },
          "&:active": {
            backgroundColor: "transparent",
            color:
              color && color !== "inherit"
                ? theme.palette[`${color}`].darker
                : "inherit",
          },
        }),
      }),
      sizeSmall: {
        borderRadius: 6,
      },
      sizeMedium: {
        borderRadius: 8,
        padding: "10px 12px",
      },
      sizeLarge: {
        borderRadius: 10,
        padding: "12px 14px",
      },
    },
  },
};
