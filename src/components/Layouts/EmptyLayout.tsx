import { Box } from "@mui/material";

interface EmptyLayoutProps {
  children: React.ReactNode;
}

export const EmptyLayout = ({ children }: EmptyLayoutProps) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
