import { Box } from "@mui/system";
import Star from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import getMediaPoster from "../../util/getMediaPoster";
import { Media } from "../../models/media";

type SearchItemProps = Pick<Media, "title" | "thumbnail" | "date">;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: theme.spacing(2),
  },
  title: {
    margin: 0,
  },
  date: {
    margin: 0,
  },
  thumbnail: {
    width: 45,
    backgroundColor: "#aaa",
  },
}));

const SearchItem: React.FC<SearchItemProps> = ({ title, thumbnail, date }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <img
        className={styles.thumbnail}
        src={getMediaPoster(thumbnail)}
        alt=""
      />
      <Box>
        <Box>
          <h4 className={styles.title}>{title}</h4>
          <h5 className={styles.date}>{date}</h5>
        </Box>

        <Box display="flex" flexDirection="row" alignItems="center">
          5
          <Star htmlColor="#111" />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchItem;
