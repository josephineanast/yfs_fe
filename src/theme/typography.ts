import { ThemeOptions } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createTypography";
import { pxToRem, responsiveStyle } from "@/utils";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    b1: CSSProperties;
    b2: CSSProperties;
    b3: CSSProperties;
    b4: CSSProperties;

    p1: CSSProperties;
    p2: CSSProperties;
    p3: CSSProperties;
    p4: CSSProperties;

    l1: CSSProperties;
    l2: CSSProperties;
    l3: CSSProperties;
  }

  interface TypographyVariantsOptions {
    b1?: CSSProperties;
    b2?: CSSProperties;
    b3?: CSSProperties;
    b4?: CSSProperties;

    p1?: CSSProperties;
    p2?: CSSProperties;
    p3?: CSSProperties;
    p4?: CSSProperties;

    l1?: CSSProperties;
    l2?: CSSProperties;
    l3?: CSSProperties;
  }
}

const FONT_PRIMARY = "Inter";

export const typography: ThemeOptions["typography"] = {
  fontFamily: `${FONT_PRIMARY}, serif`,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: responsiveStyle({
    xs: {
      fontSize: pxToRem(36),
    },
    md: {
      fontSize: pxToRem(54),
    },
    lg: {
      fontSize: pxToRem(64),
    },
  }) as CSSProperties,
  h2: responsiveStyle({
    xs: {
      fontSize: pxToRem(28),
    },
    md: {
      fontSize: pxToRem(36),
    },
    lg: {
      fontSize: pxToRem(54),
    },
  }) as CSSProperties,
  h3: responsiveStyle({
    xs: {
      fontSize: pxToRem(22),
    },
    md: {
      fontSize: pxToRem(28),
    },
    lg: {
      fontSize: pxToRem(36),
    },
  }) as CSSProperties,
  h4: responsiveStyle({
    xs: {
      fontSize: pxToRem(18),
    },
    md: {
      fontSize: pxToRem(22),
    },
    lg: {
      fontSize: pxToRem(28),
    },
  }) as CSSProperties,
  h5: responsiveStyle({
    xs: {
      fontSize: pxToRem(18),
    },
    lg: {
      fontSize: pxToRem(22),
    },
  }) as CSSProperties,
  h6: responsiveStyle({
    xs: {
      fontSize: pxToRem(16),
    },
    lg: {
      fontSize: pxToRem(18),
    },
  }) as CSSProperties,
  b1: responsiveStyle({
    xs: {
      fontSize: pxToRem(14),
    },
    sm: {
      fontSize: pxToRem(16),
    },
  }) as CSSProperties,
  b2: {
    fontSize: pxToRem(14),
  },
  b3: {
    fontSize: pxToRem(12),
  },
  b4: {
    fontSize: pxToRem(10),
  },
  p1: responsiveStyle({
    xs: {
      fontSize: pxToRem(14),
    },
    sm: {
      fontSize: pxToRem(16),
    },
  }) as CSSProperties,
  p2: {
    fontSize: pxToRem(14),
  },
  p3: {
    fontSize: pxToRem(12),
  },
  p4: {
    fontSize: pxToRem(10),
  },
  l1: {
    fontSize: pxToRem(14),
  },
  l2: {
    fontSize: pxToRem(12),
  },
  l3: {
    fontSize: pxToRem(10),
  },
};
