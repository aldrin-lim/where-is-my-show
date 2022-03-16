import SearchBox from "../components/Search/SearchBox";
import Header from "../template/Header";
import MediaEntry from "../components/MediaEntry/MediaEntry";

import "../style/style.css";
import { Container } from "@mui/material";
import Footer from "../template/Footer";

const Home = () => {
  return (
    <>
      <MediaEntry label="Top Movies" />
      <MediaEntry label="Top TV Shows" />
    </>
  );
};

export default Home;
