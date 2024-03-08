import { ThemeOptions } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const selectOverrides: ThemeOptions["components"] = {
  MuiSelect: {
    defaultProps: {
      IconComponent: KeyboardArrowDownIcon,
    },
  },
};
