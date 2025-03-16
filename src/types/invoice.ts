// enums
export enum PaymentTerms {
  NET_10_DAYS = "Net 10 Days",
  NET_20_DAYS = "Net 20 Days",
  NET_30_DAYS = "Net 30 Days",
}

// types.ts
export interface Item {
  itemName: string;
  qty: number;
  price: number;
  total: number;
}

export interface FormValues {
  companyName: string;
  companyEmail: string;
  companyCountry: string;
  companyCity: string;
  companyPostalCode: string;
  companyStreetAddress: string;

  clientName: string;
  clientEmail: string;
  clientCountry: string;
  clientCity: string;
  clientPostalCode: string;
  clientStreetAddress: string;
  invoiceDate: string;
  paymentTerms: PaymentTerms;
  projectDescription: string;
  items: Item[];
}

export interface FieldConfig {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

export interface SectionConfig {
  title: string;
  fields: FieldConfig[];
}
