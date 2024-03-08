// material
import { styled, Box, Stack } from "@mui/material";
// components

export interface DashboardHeaderProps {
  activePath: string;
}

const HeaderContainer = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  left: 0,
  padding: "14px 52px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  zIndex: 120,
  borderBottom: `solid 1px ${theme.palette.grey[100]}`,
}));

// ======================================================================================

export const DashboardHeader = () => {
  return (
    <HeaderContainer>
      <Stack direction="row" spacing={3}></Stack>
    </HeaderContainer>
  );
};
