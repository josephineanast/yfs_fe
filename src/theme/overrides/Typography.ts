import { ThemeOptions } from "@mui/material";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1: false;
    body2: false;
    button: false;
    caption: false;
    subtitle1: false;
    subtitle2: false;

    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;

    b1: true;
    b2: true;
    b3: true;
    b4: true;

    p1: true;
    p2: true;
    p3: true;
    p4: true;

    l1: true;
    l2: true;
    l3: true;
  }
}

export const typographyOverrides: ThemeOptions["components"] = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",

        b1: "p",
        b2: "p",
        b3: "p",
        b4: "p",

        p1: "p",
        p2: "p",
        p3: "p",
        p4: "p",

        l1: "span",
        l2: "span",
        l3: "span",
      },
    },
  },
};
