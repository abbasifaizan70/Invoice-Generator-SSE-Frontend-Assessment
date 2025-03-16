import React from "react";
import {
  Box,
  Divider,
  Typography,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { FormValues } from "../../types/invoice";

interface Props {
  data: FormValues;
}

const InvoicePreview: React.FC<Props> = ({ data }) => {
  return (
    <Grid2
      size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
      sx={{
        backgroundColor: "#F5F5F5",
        borderRadius: '24px',
        padding: '24px',
      }}
    >
      <Typography variant="h6">Preview</Typography>
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 2, borderRadius: '16px',padding: '24px', boxShadow: '0px 8px 8px -4px #10182808, 0px 20px 24px -4px #10182814' }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            New Invoice
          </Typography>
          <Divider sx={{ marginY: 2, color: "#EAECF0", opacity: "100%" }} />
          <Grid2 container sx={{ mt: 1 }}>
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography variant="subtitle2">Invoice Date</Typography>
              <Typography variant="body1">{data.invoiceDate}</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography variant="subtitle2">Payment Terms</Typography>
              <Typography variant="body1">{data.paymentTerms}</Typography>
            </Grid2>
          </Grid2>

          <Grid2 container sx={{ mt: 1 }}>
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography variant="subtitle2">Billed From</Typography>
              <Typography variant="body1">{data.companyName}</Typography>
              <Typography variant="body1">{data.companyEmail}</Typography>
              <Typography variant="body1">
                {data.companyStreetAddress}
              </Typography>
              <Typography variant="body1">
                {data.companyCity}
                {data.companyCity && data.companyPostalCode && ", "}
                {data.companyPostalCode}
              </Typography>
              <Typography variant="body1">{data.companyCountry}</Typography>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography variant="subtitle2">Billed To</Typography>
              <Typography variant="body1">{data.clientName}</Typography>
              <Typography variant="body1">{data.clientEmail}</Typography>
              <Typography variant="body1">
                {data.clientStreetAddress}
              </Typography>
              <Typography variant="body1">
                {data.clientCity}
                {data.clientCity && data.clientPostalCode && ", "}
                {data.clientPostalCode}
              </Typography>
              <Typography variant="body1">{data.clientCountry}</Typography>
            </Grid2>
          </Grid2>

          <Grid2 container sx={{ mt: 1 }}>
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography variant="subtitle2">Project Description</Typography>
              <Typography variant="body1">{data.projectDescription}</Typography>
            </Grid2>
          </Grid2>

          <Grid2 container sx={{ mt: 1 }}>
            <TableContainer sx={{ borderBottom: "1px solid #EAECF0" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#F5F5F5" }}>
                    <TableCell>
                      <Typography variant="subtitle2">Item</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">Qty.</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">Price</Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: "right" }}>
                      <Typography variant="subtitle2">Total Amount</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data.items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography variant="body1">{item.itemName}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">{item.qty}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">${item.price}</Typography>
                      </TableCell>
                      <TableCell sx={{ textAlign: "right" }}>
                        <Typography variant="body1">
                          ${item.total.toFixed(2)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid2>

          <Grid2 container sx={{ mt: 1 }}>
            <Grid2 size={{ xs: 12 }} sx={{ textAlign: "right" }}>
              <Grid2
                size={{ xs: 6 }}
                sx={{ float: "right" }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Subtotal
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  $
                  {data.items
                    .reduce((sum, item) => sum + item.total, 0)
                    .toFixed(2)}
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 size={{ xs: 12 }} sx={{ textAlign: "right" }}>
              <Grid2
                size={{ xs: 6 }}
                sx={{ float: "right" }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Tax
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  10%
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 size={{ xs: 12 }} sx={{ textAlign: "right" }}>
              <Grid2
                size={{ xs: 6 }}
                sx={{ float: "right" }}
                display="flex"
                justifyContent="space-between"
              >
                <Typography variant="body1" sx={{ fontWeight:700, fontSize: '24px' }}>
                  Total
                </Typography>
                <Typography fontWeight="body1" sx={{ fontWeight:700, fontSize: '24px' }}>
                  $
                  {(
                    data.items.reduce((sum, item) => sum + item.total, 0) * 1.1
                  ).toFixed(2)}
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
    </Grid2>
  );
};

export default InvoicePreview;
