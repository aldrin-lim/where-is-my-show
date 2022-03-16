import { Box, Button, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieDetail, getMovieProvider } from "../../http/api";
import { MediaProviderResponse, MediaResponse } from "../../models/media";
import colors from "../../style/color";
import getMediaPoster from "../../util/getMediaPoster";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

type MovieDetailProps = {
  tmdbId: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    height: "100%",
  },
  backdrop: {
    width: "100%",
    position: "absolute",
    height: "400px",
    overflow: "hidden",
    zIndex: -1, // TODO: will make this in to background image in a div
  },
  backdropImage: {
    width: "100%",
  },
  poster: {
    margin: "0 auto",
    zIndex: 22,
    display: "block",
    width: "200px",
    border: `solid 15px ${colors.body}`,
    borderRadius: "10px",
  },
  posterImage: {
    width: "200px",
  },
  movieDetailContainer: {
    paddingTop: "250px",
    textAlign: "center",
    color: theme.palette.grey[400],
  },
  movieSubDesc: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontWeight: 600,
  },
  movieSubTitle: {
    color: theme.palette.grey[600],
  },
}));

const Backdrop: React.FC<{ url: string }> = ({ url }) => {
  const styles = useStyles();
  return (
    <Box className={styles.backdrop}>
      <img src={url} className={styles.backdropImage} alt="backdrop" />
    </Box>
  );
};

const Poster: React.FC<{ url: string }> = ({ url }) => {
  const styles = useStyles();
  return (
    <Box className={styles.poster}>
      <img src={url} className={styles.posterImage} alt="poster" />
    </Box>
  );
};

const MovieDetail: React.FC<MovieDetailProps> = ({ tmdbId }) => {
  const params = useParams();
  const styles = useStyles();
  const movieDetail = useQuery<MediaResponse>(["movieDetail", tmdbId], () =>
    getMovieDetail(tmdbId)
  );
  const movieProvider = useQuery<MediaProviderResponse>(
    ["movieProvider", tmdbId],
    () => getMovieProvider(tmdbId),
    {
      enabled: !!movieDetail.data?.id,
    }
  );

  // TODO: set this into actual user region, for now lets use US
  const streamingPlatforms =
    movieProvider.data &&
    movieProvider.data.results &&
    movieProvider.data.results["US"] &&
    movieProvider.data.results["US"].flatrate.map((item) => item.provider_name);

  if (movieProvider.isLoading) return <>Loading ...</>;

  if (movieDetail.error || movieProvider.error || !movieDetail.data)
    return <>Error</>;

  return (
    <Box className={styles.root}>
      <Backdrop url={getMediaPoster(movieDetail.data.backdrop_path)} />
      <Box className={styles.movieDetailContainer}>
        <Poster url={getMediaPoster(movieDetail.data.poster_path)} />
        <h1>{movieDetail.data.title}</h1>
        {movieDetail.data.runtime && (
          <p className={styles.movieSubDesc}>
            <span className={styles.movieSubTitle}>Runtime: </span>{" "}
            {movieDetail.data.runtime} mins
          </p>
        )}
        {movieDetail.data.genres && (
          <p className={styles.movieSubDesc}>
            <span className={styles.movieSubTitle}>Genre: </span>{" "}
            {movieDetail.data.genres.map((genre) => `${genre.name}, `)}
          </p>
        )}
        {streamingPlatforms && streamingPlatforms.length > 0 && <p className={styles.movieSubDesc}>
            <span className={styles.movieSubTitle}>Available on: </span>{" "}
            {streamingPlatforms.join(", ")}
          </p>}

        <Button variant="contained">
          <Box mr={1} mt={1}><NotificationsActiveIcon /></Box>  Notify me when available
        </Button>
        {/* {data.genres && <p className={styles.movieSubDesc}><span className={styles.movieSubTitle}>Genre: </span> {data.genres.map(genre => `${genre.name}, `)}</p>} */}
      </Box>
    </Box>
  );
};

export default MovieDetail;
