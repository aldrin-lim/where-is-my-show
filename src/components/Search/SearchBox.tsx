import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GradientBox from "../../shared/GradientBox";
import SearchField from "./SearchField";

const useStyles = makeStyles(() => ({
  searchField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingBottom: "100px",
  },
}));

const SearchBox = () => {
  const styles = useStyles();
  return (
    <GradientBox>
      <Container maxWidth="lg">
        <Box className={styles.searchField}>
          <Box position="relative">
            <SearchField />
          </Box>
        </Box>
      </Container>
    </GradientBox>
  );
};

export default SearchBox;
