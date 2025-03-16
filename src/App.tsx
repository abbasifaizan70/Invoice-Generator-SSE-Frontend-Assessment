import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import NewInvoiceContainer from "./container/NewInvoice";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster position="top-right" reverseOrder={false} />
      <NewInvoiceContainer />
    </ThemeProvider>
  );
}

export default App;
