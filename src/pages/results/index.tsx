import { FormGetResult } from "@/modules/results/components";
import { Head } from "@/components/Elements";
import { Box } from "@mui/material";

export const Results = () => {
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
        <FormGetResult />
      </Box>
    </>
  );
};
