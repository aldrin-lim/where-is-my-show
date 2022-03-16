import { Box } from "@mui/system";
import Star from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";
import colors from "../../style/color";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    gap: theme.spacing(2)
  },
  title: {
    margin: 0,
  },
  date: {
    margin: 0,
  },
  thumbnail: {
    width: 45,
  },
}));

const SearchItem = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <img
        className={styles.thumbnail}
        src="https://picsum.photos/200/300"
        alt="movie poster"
      />
      <Box>
        <Box>
          <h4 className={styles.title}>Title</h4>
          <h5 className={styles.date}>Oct 3, 2015</h5>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          5
          <Star htmlColor="#111" />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchItem;
