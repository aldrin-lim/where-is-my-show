import React from "react";
import Header from "./Header";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import SearchBox from "../components/Search/SearchBox";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%'
  },
  container: {
    width: '100%',
    height: '100%',
  }
}))
const Layout: React.FC = ({ children }) => {
  const location = useLocation();
  const styles = useStyles();
  return (
    <>
      <Box className={styles.root} >
        <Header />
        {location.pathname === "/home" && <SearchBox />}
        <Container className={styles.container} maxWidth="lg">{children}</Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
