import { styled, Box, Typography, MenuItem, Select } from "@mui/material";
import { Pagination, PaginationProps } from "../Pagination";

export interface TablePaginationProps extends PaginationProps {
  count: number;
  page: number;
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
  onPageChange?: (newPage: number) => void;
  onRowsPerPageChange?: (newPageRowsPerPage: number) => void;
}

const StyledSelect = styled(Select<number>)(({ theme }) => ({
  color: theme.palette.neutral.main,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiOutlinedInput-input": {
    fontSize: 12,
  },
}));

const SelectRowPerPageContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 1,
  borderRadius: 6,
  padding: "0 7.2px",
  height: 41.4,
});

// ---------------------------------------------------------------------------------

export const TablePagination = (props: TablePaginationProps) => {
  const {
    rowsPerPage = 10,
    rowsPerPageOptions = [10, 25, 50, 100],
    count,
    onRowsPerPageChange,
    onPageChange,
    page,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <SelectRowPerPageContainer>
        <Typography variant="b3" color="grey.400">
          Showing :{" "}
        </Typography>
        <StyledSelect
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange?.(e.target.value as number)}
          MenuProps={{
            elevation: 3,
          }}
        >
          {rowsPerPageOptions.map((num) => (
            <MenuItem key={num} value={num}>
              {num}
            </MenuItem>
          ))}
        </StyledSelect>
        <Typography variant="b3" color="grey.400">
          of {count}
        </Typography>
      </SelectRowPerPageContainer>
      <Pagination
        count={Math.ceil(count / rowsPerPage)}
        page={page}
        onChange={(e, newPage) => onPageChange?.(newPage)}
      />
    </Box>
  );
};
