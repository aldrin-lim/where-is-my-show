
import { Box } from "@mui/system";
import Star from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";
import colors from "../style/color";


const useStyles = makeStyles(() => ({
  root: {
    color: colors.white
  },
  title: {
    margin: 0,
  },
  date: {
    margin: 0,
  }
}));


const MediaItem = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <img src="https://picsum.photos/200/300" alt="movie poster" />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mt={2}>
          <h4 className={styles.title}>Title</h4>
          <h5 className={styles.date}>Oct 3, 2015</h5>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          5
          <Star htmlColor="#fff" />
        </Box>
      </Box>
    </Box>
  );
};

export default MediaItem;
