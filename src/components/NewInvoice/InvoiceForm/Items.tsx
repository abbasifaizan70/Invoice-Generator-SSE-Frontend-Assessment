import React from "react";
import { Field, FieldArray, useFormikContext, FormikErrors, FormikTouched } from "formik";
import {
  Grid2 ,
  TextField,
  IconButton,
  Button,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import trash from "../../../assets/images/trash.png";
import { FormValues, Item } from "../../../types/invoice";

const Items = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext<FormValues>();



  return (
    <FieldArray name="items">
      {({ push, remove }) =>
        values.items.map((item, index) => {
          const itemErrors = errors.items?.[index] as FormikErrors<Item> | undefined;
          const itemTouched = touched.items?.[index] as FormikTouched<Item> | undefined;

          return (
            <React.Fragment key={index}>
              <Grid2 size="grow">
                <InputLabel>Item Name</InputLabel>
                <Field
                  as={TextField}
                  name={`items.${index}.itemName`}
                  fullWidth
                  error={itemTouched?.itemName && Boolean(itemErrors?.itemName)}
                  helperText={itemTouched?.itemName && itemErrors?.itemName}
                />
              </Grid2 >

              <Grid2 size={2}>
                <InputLabel>Qty.</InputLabel>
                <Field
                  as={TextField}
                  name={`items.${index}.qty`}
                  type="number"
                  fullWidth
                  error={itemTouched?.qty && Boolean(itemErrors?.qty)}
                  helperText={itemTouched?.qty && itemErrors?.qty}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = Number(e.target.value);
                    setFieldValue(`items.${index}.qty`, value);
                    setFieldValue(`items.${index}.total`, value * item.price);
                  }}
                />
              </Grid2 >

              <Grid2 size={2}>
                <InputLabel>Price</InputLabel>
                <Field
                  as={TextField}
                  name={`items.${index}.price`}
                  type="number"
                  fullWidth
                  error={itemTouched?.price && Boolean(itemErrors?.price)}
                  helperText={itemTouched?.price && itemErrors?.price}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = Number(e.target.value);
                    setFieldValue(`items.${index}.price`, value);
                    setFieldValue(`items.${index}.total`, item.qty * value);
                  }}
                />
              </Grid2 >

              <Grid2 size={2}>
                <InputLabel>Total</InputLabel>
                <Field as={TextField} name={`items.${index}.total`} fullWidth disabled />
              </Grid2 >

              {values.items.length > 1 && (
                <Grid2 sx={{ mt: 3}} textAlign="center">
                  <IconButton onClick={() => remove(index)}>
                    <img src={trash} alt="Delete" style={{ width: 24, height: 24 }} />
                  </IconButton>
                </Grid2>
              )}

              <Grid2 size={12} sx={{textAlign: 'center'}}>
                {index === values.items.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={() => push({ itemName: "", qty: 0, price: 0, total: 0 })}
                    sx={{
                      fontFamily: "Inter",
                      width: "100%",
                      backgroundColor: "#7F56D9",
                      textTransform: "capitalize",
                      fontWeight: "400",
                      fontSize: "16px",
                      letterSpacing: "0",
                    }}
                  >
                    <AddIcon />
                    Add New Item
                  </Button>
                )}
              </Grid2>
            </React.Fragment>
          );
        })
      }
    </FieldArray>
  );
};

export default Items;
