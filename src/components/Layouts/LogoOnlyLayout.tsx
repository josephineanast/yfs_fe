import React from "react";
// material
import { Box } from "@mui/material";

interface LogoOnlyLayoutProps {
  children: React.ReactNode;
}

export const LogoOnlyLayout = ({ children }: LogoOnlyLayoutProps) => {
  return (
    <>
      <Box sx={{ width: "100%", pt: 8, display: "grid", placeItems: "center" }}>
        <Box
          component="img"
          src="/assets/images/logo.png"
          sx={{ width: 120 }}
        />
      </Box>
      {children}
    </>
  );
};
