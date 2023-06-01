import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/Index";

export const NoteView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Typography fontSize={39} fontWeight="light">
        20 de junio, 2023
      </Typography>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          fullWidth
          variant="filled"
          placeholder="Ingrese un Titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          fullWidth
          variant="filled"
          multiline
          placeholder="Deja un detalle para el dia de hoy"
          label="Detalle"
          sx={{ border: "none", mb: 1 }}
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
