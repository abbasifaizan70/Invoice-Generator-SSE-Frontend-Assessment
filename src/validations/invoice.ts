import * as Yup from "yup";

export const validationSchema = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  companyEmail: Yup.string().email("Invalid email format").required("Company Email is required"),
  companyCountry: Yup.string().required("Country is required"),
  companyCity: Yup.string().required("City is required"),
  companyPostalCode: Yup.string()
    // .matches(/^\d+$/, "Postal Code must be a number")
    .required("Postal Code is required"),
  companyStreetAddress: Yup.string().required("Street Address is required"),

  clientName: Yup.string().required("Client's Name is required"),
  clientEmail: Yup.string().email("Invalid email format").required("Client's Email is required"),
  clientCountry: Yup.string().required("Country is required"),
  clientCity: Yup.string().required("City is required"),
  clientPostalCode: Yup.string()
    // .matches(/^\d+$/, "Postal Code must be a number")
    .required("Postal Code is required"),
  clientStreetAddress: Yup.string().required("Street Address is required"),

  invoiceDate: Yup.date().required("Invoice Date is required"),
  paymentTerms: Yup.string().required("Payment Terms are required"),
  projectDescription: Yup.string().required("Project Description is required"),

  items: Yup.array()
    .of(
      Yup.object({
        itemName: Yup.string().required("Item Name is required"),
        qty: Yup.number()
          .positive("Quantity must be greater than 0")
          .required("Quantity is required"),
        price: Yup.number()
          .positive("Price must be greater than 0")
          .required("Price is required"),
        total: Yup.number().required("Total is required"),
      })
    )
    .min(1, "At least one item is required"),
});
