import { styled, Box, Typography } from "@mui/material";
import { Select } from "@/components/Forms";
import { useState } from "react";

export interface TableFilterProps {
  label: string;
  options: Array<string | { label: string; value: string }>;
  onChange?: (value: string) => void;
}

const RootContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 1,
  borderRadius: 6,
  paddingLeft: "7.2px",
  height: 41.4,
});

const StyledSelect = styled(Select<{ label: string; value: string }>)(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    ".MuiSvgIcon-root": {
      color: theme.palette.grey[600],
    },
    ".MuiOutlinedInput-root.Mui-focused > .MuiSvgIcon-root": {
      color: theme.palette.grey[600],
    },
  })
);

const getOption = (option: TableFilterProps["options"][number]) => {
  if (typeof option === "string") {
    return {
      label: option,
      value: option,
    };
  }
  return option;
};

// --------------------------------------------------------------------------

export const TableFilter = (props: TableFilterProps) => {
  const { label, options: inputOptions, onChange } = props;
  const options = inputOptions.map((option) => getOption(option));

  const [value, setValue] = useState(getOption(options[0]));

  const handleChange = (value: { label: string; value: string }) => {
    setValue(value);
    onChange?.(value.value);
  };

  return (
    <RootContainer>
      <Typography variant="l1" color="grey.600">
        {label}:
      </Typography>
      <StyledSelect
        value={value}
        onChange={handleChange}
        options={options}
        getOptionLabel={(option) => option.label}
        required
      />
    </RootContainer>
  );
};
