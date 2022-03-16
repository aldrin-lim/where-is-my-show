import React from 'react';
import { Box } from "@mui/system";
import Star from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";
import colors from "../style/color";
import getMediaPoster from '../util/getMediaPoster';

export type MediaItemProps = {
  title: string;
  thumbnail: string;
  date?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    color: colors.white
  },
  title: {
    margin: 0,
  },
  date: {
    margin: 0,
  },
  thumbnail: {
    width: 200,
    height: 300,
  }
}));


const MediaItem:React.FC<MediaItemProps> = ({ title, thumbnail, date }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <img className={styles.thumbnail} src={getMediaPoster(thumbnail)} alt="movie poster" />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mt={2}>
          <h4 className={styles.title}>{ title }</h4>
          <h5 className={styles.date}>{ date }</h5>
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
