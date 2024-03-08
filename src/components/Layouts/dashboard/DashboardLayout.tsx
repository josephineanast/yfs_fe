import React from "react";
// material
import { Box } from "@mui/material";
// components
import { DashboardHeader } from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
// data
import navItems from "./SidebarNavItems";
import { Spinner } from "@/components/Elements";
import { EmptyLayout } from "../EmptyLayout";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const sidebarWidth = 200;

  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          width: sidebarWidth,
          height: "100vh",
          maxHeight: "100vh",
        }}
      >
        <DashboardSidebar navItems={navItems} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#fff",
          ml: `${sidebarWidth}px`,
          minHeight: "100vh",
        }}
      >
        <DashboardHeader />
        <React.Suspense
          fallback={
            <EmptyLayout>
              <Spinner />
            </EmptyLayout>
          }
        >
          <Box component="main" sx={{ m: 4 }}>
            {children}
          </Box>
        </React.Suspense>
      </Box>
    </Box>
  );
};
