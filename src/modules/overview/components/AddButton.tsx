import { Button, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface Props {
  onClick: () => void;
  title: string;
}

export const AddButton = ({ onClick, title }: Props) => {
  return (
    <Button onClick={onClick} sx={{ marginBottom: "12px" }}>
      <Box mr={1}>
        <AddCircleOutlineIcon />
      </Box>
      Add {title}
    </Button>
  );
};
