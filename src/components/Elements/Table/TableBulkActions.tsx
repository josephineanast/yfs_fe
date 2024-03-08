import { Button, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

export interface TableBulkActionsProps {
  totalSelected: number;
  actions: {
    label: string;
    icon?: ReactNode;
    type?: "error" | "warning" | "neutral" | "info" | "success";
    onAction?: () => void;
    disabled?: boolean;
  }[];
}

export const TableBulkActions = ({
  totalSelected,
  actions,
}: TableBulkActionsProps) => {
  if (totalSelected === 0) {
    return null;
  }

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="l1" color="grey.600" fontWeight={500}>
        {totalSelected} Selected
      </Typography>
      {actions.map(
        ({ label, icon, onAction, type = "neutral", disabled = false }) => (
          <Button
            key={label}
            variant="outlined"
            color={type}
            startIcon={icon}
            onClick={onAction}
            disabled={disabled}
          >
            {label}
          </Button>
        )
      )}
    </Stack>
  );
};
