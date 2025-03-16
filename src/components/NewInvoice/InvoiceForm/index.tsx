import React from "react";
import { Field, useFormikContext } from "formik";
import {
  TextField,
  MenuItem,
  Typography,
  InputLabel,
  Paper,
  Grid2,
} from "@mui/material";
import { sections } from "../../../utils/utils";
import { FormValues } from "../../../types/invoice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Items from "./Items";

const InvoiceForm: React.FC = () => {
  const formik =
    useFormikContext<FormValues>();
const {  errors, touched } = formik;

  return (
    <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
      <Paper
        sx={{
          p: 3,
          borderRadius: 5,
          boxShadow: 0,
          border: "1px solid #D0D5DD",
        }}
      >
        <Grid2 container spacing={2}>
          {sections.map((section) => (
            <React.Fragment key={section.title}>
              
              <Grid2 size={{xs: 12}}>
                <Typography variant="h6">{section.title}</Typography>
              </Grid2>
              {section.fields.map((field) => (
                <Grid2 key={field.name} size={{xs: field.colSpan || 6}} >
                  <InputLabel>{field.label}</InputLabel>
                  <Field
                    as={TextField}
                    name={field.name}
                    type={field.type}
                    select={field.type === "select"}
                    fullWidth
                    InputLabelProps={
                      field.type === "date" ? { shrink: true } : undefined
                    }
                    error={
                      touched[field.name as keyof FormValues] &&
                      Boolean(errors[field.name as keyof FormValues])
                    }
                    helperText={
                      touched[field.name as keyof FormValues] &&
                      errors[field.name as keyof FormValues]
                    }
                    SelectProps={{
                      IconComponent: KeyboardArrowDownIcon,
                    }}
                  >
                    {field.options?.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid2>
              ))}
            </React.Fragment>
          ))}

          <Grid2 size={12}>
            <Typography variant="h6">Items List</Typography>
          </Grid2>
          <Items/>
        </Grid2>
      </Paper>
    </Grid2>
  );
};

export default InvoiceForm;
