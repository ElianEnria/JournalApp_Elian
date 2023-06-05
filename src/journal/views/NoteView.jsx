import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/Index";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const NoteView = () => {
  const { active: note } = useSelector((state) => state.journal);
  const { body, title, onInputChange, formState, date } = useForm(note);
  const dateString = useMemo(() => {
    const newDate = new Date(date);
    const formatDate = new Intl.DateTimeFormat("es-ES", {
      dateStyle: "full",
    }).format(newDate);
    return formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
  }, [date]);

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
        {dateString}
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
          name="title"
          value={title}
          onChange={onInputChange}
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
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
