import { TableAdmin } from "@/modules/admin/components/TableAdmin";
import { Head } from "@/components/Elements";
import { Box } from "@mui/material";

export const Admin = () => {
  return (
    <>
      <Head title="Admin Board" />
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: theme.spacing(4),
        })}
      >
        <TableAdmin />
      </Box>
    </>
  );
};
