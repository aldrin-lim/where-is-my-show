import React, { useState } from "react";
import Header from "./Header";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import SearchBox from "../components/Search/SearchBox";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import SignIn from "../screens/SignIn";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
  },
}));
const Layout: React.FC = ({ children }) => {
  const location = useLocation();
  const styles = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);
  return (
    <>
      <Box className={styles.root}>
        <Header toggleDrawer={toggleDrawer} />
        {location.pathname === "/home" && <SearchBox />}
        <Container className={styles.container} maxWidth="lg">
          {children}
        </Container>
        <Footer />
        <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <SignIn />
        </Drawer>
      </Box>
    </>
  );
};

export default Layout;
