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
import { AddButton, TableSubCategory } from "@/modules/overview/components";
import { useState } from "react";

export const Overview = () => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryDescription, setSubCategoryDescription] = useState("");
  const [subCategoryImage, setSubCategoryImage] = useState(null);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSubCategoryName("");
    setSubCategoryDescription("");
  };

  const handleAddSubCategory = () => {
    setOpen(true);
    setOpenDialog(false);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setSubCategoryImage(file);
  };

  return (
    <>
      <Head title="Dashboard" />
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
                src={
                  subCategoryImage ? URL.createObjectURL(subCategoryImage) : ""
                }
                alt="Sub-Category Image"
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
                  {subCategoryName}
                </Typography>
                <Typography component="p">{subCategoryDescription}</Typography>
              </Box>
            </Box>
          )}
          <AddButton onClick={handleOpenDialog} title="Sub-Category" />
          {open && (
            <TableSubCategory
              name={subCategoryName}
              description={subCategoryDescription}
            />
          )}
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Sub-Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Sub-Category Name"
            type="text"
            fullWidth
            value={subCategoryName}
            onChange={(e) => setSubCategoryName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={subCategoryDescription}
            onChange={(e) => setSubCategoryDescription(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <Typography mb={1}>Sub-Category Image</Typography>
            <Button
              variant="contained"
              component="label"
              startIcon={
                <Avatar
                  src={
                    subCategoryImage
                      ? URL.createObjectURL(subCategoryImage)
                      : ""
                  }
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
