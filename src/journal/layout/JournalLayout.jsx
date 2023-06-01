import { Box, Toolbar } from "@mui/material";

import { NavBar, SideBar } from "../components/Index";

const drawerWidth = 290;
export const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__fast"
    >
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
