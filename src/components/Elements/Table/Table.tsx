import { ReactNode } from "react";
import {
  Box,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCellProps,
  TableSortLabel,
  Checkbox,
  TableContainer,
} from "@mui/material";
import { ActionItem, ActionMenu } from "./ActionMenu";
import SwapVertIcon from "@mui/icons-material/SwapVert";

export interface ColumnConfig<T> {
  /**
   * Text that will be used as column head.
   */
  label: string;
  labelIcon?: JSX.Element;
  /**
   * Function that will be used to render cell content. If render function is not provided,
   */
  render: (row: T) => ReactNode;
  /**
   * Props for MUI TableCell component.
   *
   * https://mui.com/material-ui/api/table-cell/#main-content
   */
  cellProps?: TableCellProps;
  /**
   * Function that will be executed when clicking the column head
   */
  onSort?: () => void;
}

export type TableConfig<T> = Array<ColumnConfig<T>>;

export interface TableProps<T extends Record<string, unknown>, Key> {
  /**
   * Table data in form of array of object.
   */
  data: T[];
  /**
   * Array of `ColumnConfig`.
   * @default []
   */
  config: TableConfig<T>;
  /**
   * Action menu items.
   */
  action?: Omit<ActionItem<T>, "disabled">;
  moreActions?: Array<ActionItem<T>>;
  /**
   * If `true` each row will have column number.
   * @default false
   */
  number?: boolean;
  /**
   * Functions that will be called on respective row click
   */
  onClickRow?: (row: T) => void;
  checkbox?: boolean;
  getKey: (row: T) => Key;
  selected?: T[];
  onSelect?: (selected: T[]) => void;
  allSelected?: boolean;
  toggleSelectAll?: () => void;
}

export const Table = <T extends Record<string, unknown>, Key>(
  props: TableProps<T, Key>
) => {
  const {
    data,
    config = [],
    action,
    moreActions = [],
    number = false,
    onClickRow,
    checkbox,
    selected = [],
    onSelect,
    getKey,
  } = props;

  const selectedKeys = selected.map((s) => getKey(s));

  const handleSelectAll = () => {
    if (!onSelect) return;

    const currentDataKeys = data.map((d) => getKey(d));

    if (currentDataKeys.every((d) => selectedKeys.includes(d))) {
      return onSelect?.(
        selected.filter((s) => !currentDataKeys.includes(getKey(s)))
      );
    }

    const newSelects = data.filter((d) => !selectedKeys.includes(getKey(d)));

    onSelect?.([...selected, ...newSelects]);
  };

  const handleSelect = (row: T) => {
    if (!onSelect) return;

    if (selectedKeys.includes(getKey(row))) {
      return onSelect(selected.filter((s) => getKey(s) !== getKey(row)));
    }
    onSelect([row, ...selected]);
  };

  const getTotalSelected = () => {
    return data.filter((d) => selectedKeys.includes(getKey(d))).length;
  };

  const totalSelected = getTotalSelected();
  const showActions = Boolean(action) || moreActions.length > 0;

  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            {checkbox && (
              <TableCell variant="head" padding="checkbox">
                <Checkbox
                  color="info"
                  indeterminate={
                    totalSelected > 0 && totalSelected < data.length
                  }
                  checked={totalSelected === data.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
            )}
            {number && <TableCell variant="head">No.</TableCell>}
            {config.map((configProps) => {
              const { label, labelIcon, onSort } = configProps;

              const LabelText =
                onSort === undefined ? (
                  label
                ) : (
                  <TableSortLabel
                    IconComponent={SwapVertIcon}
                    onClick={onSort}
                    sx={{ "& .MuiTableSortLabel-icon": { opacity: 1 } }}
                  >
                    {label}
                  </TableSortLabel>
                );

              if (labelIcon === undefined) {
                return (
                  <TableCell key={label} variant="head">
                    {LabelText}
                  </TableCell>
                );
              }

              return (
                <TableCell key={label} variant="head">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {labelIcon}
                    {LabelText}
                  </Box>
                </TableCell>
              );
            })}
            {showActions && <TableCell variant="head">ACTIONS</TableCell>}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, rowIdx) => (
            <TableRow
              key={String(getKey(row))}
              hover={Boolean(onClickRow)}
              onClick={onClickRow ? () => onClickRow(row) : undefined}
              sx={{ cursor: onClickRow ? "pointer" : undefined }}
            >
              {checkbox && (
                <TableCell padding="checkbox">
                  <Checkbox
                    color="info"
                    value={selectedKeys.includes(getKey(row))}
                    checked={selectedKeys.includes(getKey(row))}
                    onChange={() => handleSelect(row)}
                  />
                </TableCell>
              )}

              {number && <TableCell>{rowIdx + 1}</TableCell>}

              {config.map(({ label, render, cellProps }) => (
                <TableCell key={`col-${rowIdx}-${label}`} {...cellProps}>
                  {render?.(row)}
                </TableCell>
              ))}

              {showActions && (
                <TableCell padding="checkbox">
                  <ActionMenu
                    data={row}
                    action={action}
                    moreActions={moreActions}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
