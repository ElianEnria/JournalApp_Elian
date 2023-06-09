import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius: 3 }}
      className="animate__animated animate__jackInTheBox animate__fast"

    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: "white"}}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" align="center" color="white">
          Selecciona o crea una nota
        </Typography>
      </Grid>
    </Grid>
  );
};
