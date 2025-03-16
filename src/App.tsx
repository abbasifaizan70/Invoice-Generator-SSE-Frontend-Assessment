import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import NewInvoiceContainer from "./container/NewInvoice";
import { ToastNotification } from "./components/ToastNotification";
import "@fontsource/rubik"; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastNotification />
      <NewInvoiceContainer />
    </ThemeProvider>
  );
}

export default App;
