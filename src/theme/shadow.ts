import { ThemeOptions, Shadows } from "@mui/material";

export const shadows: ThemeOptions["shadows"] = [
  "none",
  "0 6px 12px 0 rgba(140, 152, 164, 0.1)",
  "0 6px 24px 0 rgba(140, 152, 164, 0.15)",
  "0 10px 40px 0 rgba(140, 152, 164, 0.25)",
  "0 2px 16px 0 rgba(140, 152, 164, 0.15)",
  "0 4px 16px 0 rgba(140, 152, 164, 0.2)",
  ...Array(19).fill("none"),
] as Shadows;
