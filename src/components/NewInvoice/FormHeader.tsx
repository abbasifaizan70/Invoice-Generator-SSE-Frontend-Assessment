import { Button, Grid2, Typography } from "@mui/material";
import styles from "./NewInvoice.module.css";

interface FormHeaderProps {
  handleReset: VoidFunction;
  handleSubmit: any;
}

const FormHeader = ({ handleReset, handleSubmit }: FormHeaderProps) => {
  return (
    <Grid2
      sx={{
        paddingBottom: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid2 size={{ sm: 12, md: 8, lg: 8 }}>
        <Typography variant="h4">New Invoice</Typography>
        <Typography variant="subtitle1">
          Create a new invoice for your customers
        </Typography>
      </Grid2>
      <Grid2 size={{ sm: 12, md: 4, lg: 4 }}>
        <Button
          variant="outlined"
          onClick={handleReset}
          className={styles.outlinedButton}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          type="button"
          className={styles.filledButton}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Save
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default FormHeader;
