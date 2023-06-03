import { useDispatch, useSelector } from "react-redux";
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const { active: activeNote, isSavingNewNote } = useSelector(
    (state) => state.journal
  );

  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        risus ullamcorper, faucibus arcu non, convallis magna. Nullam
        consectetur lacus vitae dui semper, et pulvinar purus venenatis. Proin
        efficitur purus in velit semper, ut elementum ipsum fringilla. Aliquam
        tristique lacinia tortor at fringilla. Nunc congue quam ligula, sed
        vestibulum magna scelerisque non. Pellentesque aliquam blandit erat, eu
        fermentum mi fermentum eget. Cras interdum magna sed risus venenatis
        tempus. Nulla facilisi. Aliquam tristique metus ligula, eu blandit lacus
        rhoncus nec. Maecenas consectetur leo ac purus feugiat, vitae pulvinar
        leo efficitur. Curabitur varius, felis id condimentum ultrices, sapien
        odio volutpat enim, ut posuere sapien elit ut nulla. Vivamus consequat
        eget lorem eget vestibulum.
      </Typography> */}
      {(!!activeNote) ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSavingNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          "&:hover": { backgroundColor: "error.dark", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
