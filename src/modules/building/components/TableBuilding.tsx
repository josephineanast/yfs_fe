import { useState } from "react";
import {
  Button,
  Box,
  TextField,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  InputAdornment,
  useMediaQuery,
  Grid,
} from "@mui/material";
import {} from "../hooks";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useGetDropdownAllProducts } from "../hooks";
import { useCreateBuilding } from "../hooks";
import { OptionsCreateBuildingInvoice } from "../api";
import { SelectChangeEvent } from "@mui/material/Select";
import { convertToISODateString } from "@/utils/convertDateToIso";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.light,
    padding: "24px",
    borderRadius: "8px",
  },
}));

interface Props {
  buildingName: string;
}

export const TableBuilding = ({ buildingName }: Props) => {
  const [formData, setFormData] = useState({
    buildingName: buildingName,
    invoiceDate: "",
    material: "",
    invoiceNo: "",
    nickname: "",
    footprint: "",
    buildingCodes: "",
    weight: "",
    quantity: "",
    priceOnInvoice: "",
    tonnesCo2e: "",
    emissionFactorId: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    const selectedOption = data?.data.find(
      (option) => option.englishName === value
    );

    const emissionFactorId = selectedOption ? selectedOption.id : 0;
    setFormData({ ...formData, [name as string]: value, emissionFactorId });
  };

  const handleSubmit = () => {
    const data = {
      ...formData,
      quantity: parseFloat(formData.quantity),
      weight: parseFloat(formData.weight),
      footprint: parseFloat(formData.footprint),
      priceOnInvoice: parseFloat(formData.priceOnInvoice),
      tonnesCo2e: parseFloat(formData.tonnesCo2e),
    };

    if (data.invoiceDate) {
      data.invoiceDate = convertToISODateString(data.invoiceDate) || "";
    }

    const dto: OptionsCreateBuildingInvoice = {
      body: data,
    };

    mutate(dto);
  };

  const { data } = useGetDropdownAllProducts();
  const { mutate } = useCreateBuilding();
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          maxWidth: isXsScreen
            ? 70
            : isSmScreen
            ? 200
            : isMdScreen
            ? 400
            : 1200,
          mx: "auto",
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Invoice Date</TableCell>
                <TableCell>Invoice no.</TableCell>
                <TableCell>Nick name</TableCell>
                <TableCell>
                  Manuel: kgCO2/xx{" "}
                  <LightTooltip
                    title="Here, you can manually enter an emission factor for the specific material/product/service. Please choose the unit for the emission factor"
                    placement="left"
                  >
                    <IconButton size="small">
                      <InfoOutlinedIcon fontSize="small" />
                    </IconButton>
                  </LightTooltip>
                </TableCell>
                <TableCell>Building Codes</TableCell>

                <TableCell>
                  Material/Product
                  <LightTooltip
                    title="Enter the name of the material, product, or service you want to search for."
                    placement="right"
                  >
                    <IconButton size="small">
                      <InfoOutlinedIcon fontSize="small" />
                    </IconButton>
                  </LightTooltip>
                </TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>
                  <LightTooltip
                    title="You can input weight per unit"
                    placement="right"
                  >
                    <IconButton size="small">
                      <InfoOutlinedIcon fontSize="small" />
                    </IconButton>
                  </LightTooltip>
                  Weight pr. unit
                </TableCell>

                <TableCell>Price on invoice (DKK)</TableCell>
                <TableCell>Tonnes CO2e</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    placeholder="DD-MM-YYYY"
                    sx={{ width: 100 }}
                    value={formData.invoiceDate}
                    onChange={handleChange}
                    name="invoiceDate"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder="Type here"
                    sx={{ width: 100 }}
                    value={formData.invoiceNo}
                    onChange={handleChange}
                    name="invoiceNo"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder="Name"
                    sx={{ width: 100 }}
                    value={formData.nickname}
                    onChange={handleChange}
                    name="nickname"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder="0"
                    value={formData.footprint}
                    onChange={handleChange}
                    name="footprint"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder="Type here"
                    value={formData.buildingCodes}
                    onChange={handleChange}
                    name="buildingCodes"
                  />
                </TableCell>

                <TableCell>
                  <Select
                    placeholder="Search"
                    sx={{ width: 200 }}
                    value={formData.material}
                    onChange={handleChangeSelect}
                    name="material"
                  >
                    {data?.data.map((option, index) => (
                      <MenuItem key={index} value={option.englishName}>
                        {option.englishName}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder="0"
                    value={formData.quantity}
                    onChange={handleChange}
                    name="quantity"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder="0"
                    value={formData.weight}
                    onChange={handleChange}
                    name="weight"
                  />
                </TableCell>

                <TableCell>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        value={formData.priceOnInvoice}
                        onChange={handleChange}
                        name="priceOnInvoice"
                        sx={{ width: 120 }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              Amount
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography>xx DKK</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="tonnesCo2e"
                        value={formData.tonnesCo2e}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography>xx tC02e</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          <Box display="flex" alignItems="center">
            <Button sx={{ mb: 1, mr: 1 }}>Choose File</Button>
            <Typography variant="b4">No file has been selected.</Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 6 }}>
            <Button onClick={handleSubmit}>Upload Invoice</Button>
            <LightTooltip title="Upload invoice here" placement="right">
              <IconButton size="small">
                <InfoOutlinedIcon fontSize="small" />
              </IconButton>
            </LightTooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
