import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h5: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0.15px",
      color: "#101828",
    },
    h4: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0.1px",
      color: "#101828",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      color: "#667085",
    },
    subtitle2:{
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "38px",
      color: "#76787D",
    },
    body1: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "38px",
      letterSpacing: "0%",
      color: "#101828",
    },
  },

  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0%,",
          color: "#344054",
          marginBottom: "6px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded corners
          borderColor: "#D0D5DD",
          backgroundColor: "#fff",
          boxShadow: "0px 1px 2px 0px #1018280D",
          height: "44px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7F56D9", // Hover effect
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7F56D9", // Focus color
          },
        },
        input: {
          color: "#101828", // Input text color
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
          letterSpacing: "0%",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          fontWeight: 400,
          marginTop: "2px",
          marginLeft: "5px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          padding: '5px 10px',
          border: 'none',
        },
        body: {
           padding: '5px 10px',
        },
      },
    },
  },
});

export default theme;
