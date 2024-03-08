import { useState, MouseEvent, ReactNode, ChangeEvent } from "react";
import {
  Popover,
  MenuList,
  MenuItem as MuiMenuItem,
  OutlinedInput,
  Box,
  MenuItemProps,
  ListSubheader,
} from "@mui/material";
import { TextField, TextFieldProps } from "../TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export type SelectProps<P> = Omit<
  TextFieldProps,
  | "select"
  | "maxRows"
  | "minRows"
  | "multiline"
  | "rows"
  | "children"
  | "onChange"
  | "value"
> & {
  search?: boolean;
  options: P[];
  value?: P;
  onChange?: (value: P) => void;
  getOptionLabel?: (value: P) => string;
};

const MenuItem = ({
  selected,
  label,
  ...others
}: MenuItemProps & { label: ReactNode }) => {
  return (
    <MuiMenuItem
      {...others}
      selected={selected}
      sx={(theme) => ({
        borderRadius: theme.spacing(0.75),
        color: theme.palette.grey[600],
        "&.Mui-selected": {
          color: theme.palette.grey[600],
        },
        "&:hover": {
          background: theme.palette.grey[50],
        },
        "&:hover.Mui-selected": {
          background: `${theme.palette.grey[50]} !important`,
        },
        ...(selected
          ? { display: "flex", justifyContent: "space-between" }
          : {}),
      })}
    >
      <>{label}</>
      <Box
        sx={(theme) => ({
          width: 14,
          color: theme.palette.primary.main,
          pl: 1,
        })}
      >
        {selected && <>&#10003;</>}
      </Box>
    </MuiMenuItem>
  );
};

export function Select<P>(props: SelectProps<P>) {
  const {
    value,
    search = false,
    options,
    onChange,
    getOptionLabel = (value: P) => value as string,
    placeholder,
    ...others
  } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [_open, setOpen] = useState(false);
  const [searchValue, setSeachValue] = useState("");

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setAnchorEl(null), 500);
  };

  const handleClickItem = (newValue: P) => {
    handleClose();
    onChange?.(newValue);
  };

  const handleSeach = (event: ChangeEvent<HTMLInputElement>) => {
    setSeachValue(event.target.value);
  };

  const open = Boolean(anchorEl) && _open;

  const filteredOptions = options.filter((option) =>
    getOptionLabel(option).includes(searchValue)
  );

  return (
    <>
      <TextField
        {...others}
        select
        value={value ? getOptionLabel(value) : ""}
        SelectProps={{
          open: false,
          displayEmpty: true,
          IconComponent: KeyboardArrowDownIcon,
        }}
        InputProps={{
          onClick: handleClick,
        }}
      >
        {placeholder && (
          <MuiMenuItem value="" disabled>
            {placeholder}
          </MuiMenuItem>
        )}
        {options.map((option) => {
          const label = getOptionLabel(option);
          return (
            <MuiMenuItem key={label} value={label}>
              {label}
            </MuiMenuItem>
          );
        })}
      </TextField>
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 1,
          sx: (theme) => ({
            minWidth: anchorEl?.clientWidth,
            border: `solid 0.5px ${theme.palette.grey[100]}`,
            p: 1,
            borderRadius: 2,
          }),
        }}
      >
        {search && (
          <OutlinedInput
            fullWidth
            placeholder="Search ..."
            value={searchValue}
            onChange={handleSeach}
          />
        )}
        <MenuList>
          {filteredOptions.map((option) => {
            const optionLabel = getOptionLabel(option);
            const selected = value && getOptionLabel(value) === optionLabel;
            return (
              <MenuItem
                key={optionLabel}
                onClick={() => handleClickItem(option)}
                selected={selected}
                label={optionLabel}
              />
            );
          })}
          {search && filteredOptions.length === 0 && (
            <ListSubheader
              sx={{ color: "grey.600", fontSize: "1rem", fontWeight: 400 }}
            >
              No results found
            </ListSubheader>
          )}
        </MenuList>
      </Popover>
    </>
  );
}
