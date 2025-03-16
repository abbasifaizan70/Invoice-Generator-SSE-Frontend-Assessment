import React from "react";
import { Formik, Form } from "formik";
import { Box, Grid2, Divider, Container } from "@mui/material";
import InvoiceForm from "./InvoiceForm";
import InvoicePreview from "./InvoicePreview";
import { createInvoiceInitialValues } from "../../utils/utils";
import { validationSchema } from "../../validations/invoice";
import { FormValues } from "../../types/invoice";
import logo from "../../assets/images/logos/logo.png";
import FormHeader from "./FormHeader";
import { showToast } from "../ToastNotification";

interface NewInvoiceProps {
  handleCreate: (values: FormValues, { resetForm }: any) => void;
}

const NewInvoice: React.FC<NewInvoiceProps> = ({ handleCreate }) => {
  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    console.log("Submitted Invoice Data:", values);
    handleCreate(values, { resetForm });
  };

  return (
    <Formik
      initialValues={createInvoiceInitialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleReset, handleSubmit, values }) => (
        <Form>
          <Box
            component="img"
            sx={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "15px",
            }}
            src={logo}
            alt="Company Logo"
          />
          <Divider sx={{ marginY: 2, color: "#EAECF0", opacity: "100%" }} />
          <Container maxWidth="lg">
            <FormHeader handleSubmit={handleSubmit} handleReset={handleReset} />
            <Grid2
              container
              spacing={2}
              sx={{ mt: 1, mb: 2, alignItems: "stretch" }}
            >
              <InvoiceForm />
              <InvoicePreview data={values} />
            </Grid2>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default NewInvoice;
