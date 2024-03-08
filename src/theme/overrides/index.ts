import { ThemeOptions } from "@mui/material";
import _merge from "lodash-es/merge";

import { buttonOverrides } from "./Button";
import { cssBaselineOverrides } from "./CssBaseline";
import { typographyOverrides } from "./Typography";
import { input } from "./Input";
import { paginationOverrides } from "./Pagination";
import { tabOverrides } from "./Tabs";
import { tableOverrides } from "./Table";
import { switchOverrides } from "./Switch";
import { svgIconOverrides } from "./SVG";
import { menuOverrides } from "./Menu";
import { listOverides } from "./List";
import { selectOverrides } from "./Select";
import { formOverrides } from "./Form";

export const componentsOverrides: ThemeOptions["components"] = _merge(
  buttonOverrides,
  cssBaselineOverrides,
  typographyOverrides,
  input,
  paginationOverrides,
  tabOverrides,
  tableOverrides,
  switchOverrides,
  svgIconOverrides,
  menuOverrides,
  listOverides,
  selectOverrides,
  formOverrides
);
