import { ThemeOptions } from "@mui/material";

export const switchOverrides: ThemeOptions["components"] = {
  MuiSwitch: {
    styleOverrides: {
      switchBase: ({ theme, ownerState: { color } }) => {
        const paletteKey =
          color === undefined || color === "default" ? "primary" : color;
        return {
          opacity: 1,
          color: theme.palette.neutral.semantic,
          "&.Mui-checked": {
            color: theme.palette.neutral.semantic,
          },
          "&.Mui-checked+.MuiSwitch-track": {
            opacity: 1,
            color: theme.palette.neutral.semantic,
            backgroundColor: theme.palette[`${paletteKey}`].main,
          },
        };
      },
      sizeMedium: {
        paddingTop: 9.5,
        paddingBottom: 9.5,

        ".MuiSwitch-switchBase": {
          transform: "translate(7px, 3px)",
          "&.Mui-checked": {
            transform: "translate(20px, 3px)",
          },
        },

        ".MuiSwitch-thumb": {
          width: 13,
          height: 13,
        },
      },
      sizeSmall: {
        paddingTop: 5,
        paddingBottom: 5,

        ".MuiSwitch-switchBase": {
          transform: "translate(7px, 3px)",
          "&.Mui-checked": {
            transform: "translate(16px, 3px)",
          },
        },

        ".MuiSwitch-thumb": {
          width: 9,
          height: 9,
        },
      },
      track: ({ theme, ownerState: { color } }) => ({
        opacity: 1,
        backgroundColor:
          theme.palette[
            color === undefined || color === "default" ? "primary" : color
          ].light,
        borderRadius: 16,
      }),
    },
  },
};
