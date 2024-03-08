import { Head } from "@/components/Elements";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
import { AddButton } from "@/modules/overview/components";
import { useState } from "react";
import { TableBuilding } from "@/modules/building/components";

export const Building = () => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [buildingName, setBuildingName] = useState("");
  const [buildingImage, setBuildingImage] = useState(null);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setBuildingName("");
  };

  const handleAddSubCategory = () => {
    setOpen(true);
    setOpenDialog(false);
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setBuildingImage(file);
  };

  return (
    <>
      <Head title="Building" />
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: theme.spacing(4),
        })}
      >
        <Box
          sx={(theme) => ({
            padding: theme.spacing(4),
          })}
        >
          {open && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Avatar
                src={buildingImage ? URL.createObjectURL(buildingImage) : ""}
                alt="Building Image"
                variant="circular"
                sx={{
                  height: 60,
                  width: 60,
                  mr: 2,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontWeight: 600 }}
                >
                  {buildingName}
                </Typography>
              </Box>
            </Box>
          )}
          <AddButton onClick={handleOpenDialog} title="Building" />
          {open && <TableBuilding buildingName={buildingName} />}
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Building</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Building Name"
            type="text"
            fullWidth
            value={buildingName}
            onChange={(e) => setBuildingName(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <Typography mb={1}>Building Image</Typography>
            <Button
              variant="contained"
              component="label"
              startIcon={
                <Avatar
                  src={buildingImage ? URL.createObjectURL(buildingImage) : ""}
                />
              }
            >
              Upload
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddSubCategory}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
