import React from "react";
import Header from './Header';
import { Container } from "@mui/material";
import Footer from "./Footer";
import SearchBox from "../components/Search/SearchBox";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <SearchBox />
      <Container maxWidth="lg">
        { children }
      </Container>
      <Footer />
    </>
  )
}

export default Layout;