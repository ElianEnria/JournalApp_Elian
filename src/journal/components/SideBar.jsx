import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName, photoURL } = useSelector((state) => state.auth); //voy a buscar al authSlice
  const { notes } = useSelector( state => state.journal );
  // const objNotes = Object.values(notes);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          {/* si tiene foto muestra sino no muestra */}
          {photoURL && (
            <Box sx={{ pr: 1 }}>
              <img
                src={photoURL}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                alt="User"
              />
            </Box>
          )}
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
          {/* {Array.isArray(objNotes) &&
            objNotes.map((note) => <SideBarItem key={note.id} {...note} />)} */}
        </List>
      </Drawer>
    </Box>
  );
};
