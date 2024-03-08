import { ThemeOptions } from "@mui/material";
import { pxToRem } from "@/utils";

export const tableOverrides: ThemeOptions["components"] = {
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }) => ({
        background: theme.palette.grey[50],
        position: "relative",
        zIndex: 1,
        "&::before": {
          content: '""',
          position: "absolute",
          width: `calc(100% + ${theme.spacing(8)})`,
          height: "100%",
          top: 0,
          left: `-${theme.spacing(4)}`,
          background: theme.palette.grey[50],
          zIndex: -1,
          border: `solid 1px ${theme.palette.grey[100]}`,
        },
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.grey[600],
        fontSize: pxToRem(14),
        paddingTop: 14,
        paddingBottom: 14,
      }),
      body: {
        border: 0,
      },
      head: ({ theme }) => ({
        fontSize: pxToRem(14),
        fontWeight: 500,
        color: theme.palette.grey[600],
        border: 0,
      }),
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(0, 4),
      }),
    },
  },
};
