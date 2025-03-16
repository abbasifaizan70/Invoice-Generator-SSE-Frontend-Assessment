import { PaymentTerms } from "../types/invoice";



export const sections = [
    {
      title: "Bill From",
      fields: [
        { name: "companyName", label: "Company Name", type: "text", colSpan: 6 },
        { name: "companyEmail", label: "Company Email", type: "text", colSpan: 6 },
        { name: "companyCountry", label: "Country", type: "select", options: ["USA", "Canada"], colSpan: 4 },
        { name: "companyCity", label: "City", type: "text", colSpan: 4 },
        { name: "companyPostalCode", label: "Postal Code", type: "number", colSpan: 4 },
        { name: "companyStreetAddress", label: "Street Address", type: "text", colSpan: 12 },
      ],
    },
    {
      title: "Bill To",
      fields: [
        { name: "clientName", label: "Client's Name", type: "text", colSpan: 6 },
        { name: "clientEmail", label: "Client's Email", type: "text", colSpan: 6 },
        { name: "clientCountry", label: "Country", type: "select", options: ["USA", "Canada"], colSpan: 4 },
        { name: "clientCity", label: "City", type: "text", colSpan: 4 },
        { name: "clientPostalCode", label: "Postal Code", type: "number", colSpan: 4 },
        { name: "clientStreetAddress", label: "Street Address", type: "text", colSpan: 12 },
        { name: "invoiceDate", label: "Invoice Date", type: "date", colSpan: 6 },
        { name: "paymentTerms", label: "Payment Terms", type: "select", options: Object.values(PaymentTerms), colSpan: 6 },
        { name: "projectDescription", label: "Project Description", type: "text", colSpan: 12 },
      ],
    },
  ];
  
  export const createInvoiceInitialValues = {
    companyName: "",
    companyEmail: "",
    companyCountry: "",
    companyCity: "",
    companyPostalCode: "",
    companyStreetAddress: "",

    clientName: "",
    clientEmail: "",
    clientCountry: "",
    clientCity: "",
    clientPostalCode: "",
    clientStreetAddress: "",
    invoiceDate: new Date().toISOString().split("T")[0], // Defaults to today
    paymentTerms: PaymentTerms.NET_10_DAYS,
    projectDescription: "",

    items: [{ itemName: "", qty: 0, price: 0, total: 0 }],
  };
  