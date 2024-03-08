import { ChangeEvent, useState } from "react";
import { TextField, Button, Container, Grid } from "@mui/material";
import { useCreateEnvImpact } from "../hooks/useCreateEnvImpact";
import { OptionsCreateEnvImpact } from "../api";

export const FormGetResult = () => {
  const { mutate } = useCreateEnvImpact();
  const [formData, setFormData] = useState({
    emissionsEstimate: "",
    energyUseEstimate: "",
    waterUsageEstimate: "",
    scopeOne: "",
    scopeTwo: "",
    scopeThree: "",
  });

  const onSubmit = () => {
    const parsedFormData = {
      emissionsEstimate: parseFloat(formData.emissionsEstimate),
      energyUseEstimate: parseFloat(formData.energyUseEstimate),
      waterUsageEstimate: parseFloat(formData.waterUsageEstimate),
      scopeOne: parseFloat(formData.scopeOne),
      scopeTwo: parseFloat(formData.scopeTwo),
      scopeThree: parseFloat(formData.scopeThree),
    };

    const dto: OptionsCreateEnvImpact = {
      body: parsedFormData,
    };

    mutate(dto);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Emissions Estimate"
              name="emissionsEstimate"
              value={formData.emissionsEstimate}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Energy Use Estimate"
              name="energyUseEstimate"
              value={formData.energyUseEstimate}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Water Usage Estimate"
              name="waterUsageEstimate"
              value={formData.waterUsageEstimate}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Scope One"
              name="scopeOne"
              value={formData.scopeOne}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Scope Two"
              name="scopeTwo"
              value={formData.scopeTwo}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Scope Three"
              name="scopeThree"
              value={formData.scopeThree}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
