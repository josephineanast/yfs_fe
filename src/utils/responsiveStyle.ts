import { breakpoints } from "@/theme/breakpoints";
import { Breakpoint } from "@mui/material";
import { CSSProperties } from "react";

export type ResponsiveStyle = { [key in Breakpoint]?: CSSProperties };

export const responsiveStyle = (styles: ResponsiveStyle) => {
  const bp = breakpoints.values;

  if (bp === undefined) return {};

  const bpKeys = Object.keys(bp) as Breakpoint[];
  const initalStyles: CSSProperties = {};
  const cssStyles: CSSProperties = bpKeys.reduce((obj, key) => {
    const screen = bp[`${key}`];
    const style = styles[`${key}`];
    return { ...obj, [`@media (min-width: ${screen}px)`]: style };
  }, initalStyles);

  return cssStyles;
};
