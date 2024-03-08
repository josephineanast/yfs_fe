import { ChangeEvent, ReactNode } from "react";
import {
  Box,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export interface TableHeaderProps {
  onSearch?: (searchValue: string) => void;
  SearchFieldProps?: TextFieldProps;
  children?: ReactNode;
}

const TextField = styled(MuiTextField)(({ theme }) => ({
  ".MuiInput-root:before": {
    bottom: -6,
    borderColor: theme.palette.grey[100],
  },
  ".MuiInput-root:after": {
    border: "none",
  },
  ".MuiInput-root:hover": {
    "&:before": {
      borderBottom: `solid 1px ${theme.palette.grey[400]} !important`,
    },
  },
}));

export const TableHeader = ({
  onSearch,
  SearchFieldProps,
  children,
}: TableHeaderProps) => {
  const handleChangeSeacrh = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch?.(event.target.value);
  };

  return (
    <Box display="flex" justifyContent="space-between" px={3} py={2} mb={0.75}>
      <TextField
        variant="standard"
        placeholder="Search ..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "grey.200" }} />
            </InputAdornment>
          ),
        }}
        onChange={handleChangeSeacrh}
        {...SearchFieldProps}
      />
      {children && <Box>{children}</Box>}
    </Box>
  );
};
