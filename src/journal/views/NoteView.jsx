import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { ImageGallery } from "../components/Index";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSaveNote, startUpLoadingFiles } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();

  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { body, title, onInputChange, formState, date } = useForm(note);
  const dateString = useMemo(() => {
    const newDate = new Date(date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "America/Argentina/Buenos_Aires",
    };
    const formatDate = new Intl.DateTimeFormat("es-AR", options).format(
      newDate
    );
    return formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: "Nota actualizada",
        width: 600,
        icon: "success",
        text: messageSaved,
        padding: "3em",
        color: "#716add",
        background: "#fff",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `,
        confirmButtonText: "Cerrar",
      });
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if(target.files===0)return;

    dispatch(startUpLoadingFiles(target.files));
  }


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
        <IconButton color="primary" disabled={isSaving}>
          <label htmlFor="btnFile">
            {" "}
            {/* //id */}
            <UploadOutlined />
          </label>
        </IconButton>
        <input
          id="btnFile" //id del html
          style={{ display: "none" }}
          type="file"
          multiple
          onChange={onFileInputChange}
        />
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ padding: 2 }}
        >
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
