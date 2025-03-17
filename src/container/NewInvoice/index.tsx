import React from "react";
import NewInvoice from "../../components/NewInvoice";
import { FormValues } from "../../types/invoice";
import { showToast } from "../../components/ToastNotification";

const NewInvoiceContainer = () => {
  const handleCreate = async (values: FormValues, { resetForm }: any) => {
    try {
      const response = await fetch("http://localhost:5000/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) throw Error("Error creating invoice");

      showToast({
        title: "Invoice created successfully!",
        description: "Your invoice has been created.",
        type: "success",
      });
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return <NewInvoice handleCreate={handleCreate} />;
};

export default NewInvoiceContainer;
