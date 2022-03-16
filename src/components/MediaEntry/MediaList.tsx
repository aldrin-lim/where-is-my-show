import { Box } from "@mui/system";
import MediaItem from "../MediaItem";

const MediaList = () => {
  return (
    <Box display="flex" flexDirection="row" gap={5}>
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
      <MediaItem />
    </Box>
  );
};

export default MediaList;
