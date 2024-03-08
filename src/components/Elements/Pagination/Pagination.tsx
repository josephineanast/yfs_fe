import {
  Pagination as MuiPagination,
  PaginationItem,
  Typography,
  Box,
  PaginationProps as MuiPaginationProps,
} from "@mui/material";

export type PaginationProps = Omit<MuiPaginationProps, "renderItem">;

export const Pagination = (props: PaginationProps) => {
  return (
    <Box
      sx={{
        width: "fit-content",
        borderRadius: 2,
        px: 0.4,
        py: 0.8,
      }}
    >
      <MuiPagination
        shape="rounded"
        {...props}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            size="small"
            components={{
              previous: () => (
                <Typography variant="l2" color="inherit">
                  Prev
                </Typography>
              ),
              next: () => (
                <Typography variant="l2" color="inherit">
                  Next
                </Typography>
              ),
            }}
            sx={(theme) => ({
              fontSize: 12,
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              },
            })}
          />
        )}
      />
    </Box>
  );
};
