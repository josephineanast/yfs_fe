import { useState, ReactNode, MouseEvent } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Box,
  Button,
  styled,
  ButtonProps,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface ActionItem<T> {
  label: string;
  icon: ReactNode;
  onAction?: (data: T) => void;
  disabled?: boolean | ((row: T) => boolean);
}

export interface ActionMenuProps<T> {
  data: T;
  action?: Omit<ActionItem<T>, "disable">;
  moreActions?: Array<ActionItem<T>>;
}

// -----------------------------------------------------------------------------

const ActionBtn = styled((props: ButtonProps) => (
  <Button {...props} variant="outlined" color="neutral" />
))(({ theme }) => ({
  color: theme.palette.grey[600],
}));

export const ActionMenu = <T extends Record<string, unknown>>({
  data,
  action,
  moreActions = [],
}: ActionMenuProps<T>) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (data: T, onAction?: (data: T) => void) => () => {
    onAction?.(data);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const showAction = Boolean(action);
  const showMoreActions = moreActions.length > 0;

  return (
    <>
      <Box display="flex">
        {showAction && (
          <ActionBtn
            startIcon={action?.icon}
            onClick={() => action?.onAction?.(data)}
            sx={(theme) =>
              showMoreActions ? { borderRadius: theme.spacing(1, 0, 0, 1) } : {}
            }
          >
            {action?.label}
          </ActionBtn>
        )}
        {showMoreActions && (
          <ActionBtn
            onClick={handleOpen}
            sx={(theme) =>
              showAction
                ? {
                    minWidth: 0,
                    padding: 0,
                    width: 32,
                    borderRadius: theme.spacing(0, 1, 1, 0),
                    borderLeft: "none",
                    "&:hover": { borderLeft: "none" },
                  }
                : {}
            }
          >
            {showAction ? "" : "More"}
            <KeyboardArrowDownIcon />
          </ActionBtn>
        )}
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          elevation: 3,
          sx: { minWidth: 150, maxWidth: "100%", borderRadius: 2, px: 1 },
        }}
      >
        <List>
          {moreActions.map(({ disabled, ...action }) => {
            const disableButton =
              (typeof disabled === "function" && disabled(data)) ||
              (typeof disabled !== "function" && Boolean(disabled));
            if (disableButton) return null;
            return (
              <ListItemButton
                key={action.label}
                onClick={handleAction(data, action.onAction)}
                sx={{ borderRadius: 2 }}
              >
                <ListItemIcon sx={{ color: "grey.600", minWidth: 36 }}>
                  {action.icon}
                </ListItemIcon>
                <ListItemText
                  primary={action.label}
                  color="inherit"
                  primaryTypographyProps={{ variant: "l1", color: "grey.600" }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Popover>
    </>
  );
};
