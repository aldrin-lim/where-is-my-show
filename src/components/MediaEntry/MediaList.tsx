import React from 'react';
import { Box } from "@mui/system";
import { Media } from "../../models/media";
import MediaItem from "../MediaItem";

type MediaListProps = {
  entries: Media[]
}

const MediaList: React.FC<MediaListProps> = ({ entries }) => {
  return (
    <Box display="flex" flexDirection="row" gap={5}>
      {
        entries.map(media => {
          const date = media.first_air_date || media.release_date;
          const dateFormatted = date ? new Date(date).toLocaleDateString() : ''
          const title = media.title || media.name || media.original_title || media.original_name || ''
          return (
            <MediaItem thumbnail={media.poster_path} title={title} date={dateFormatted}  />
          )
        })
      }
    </Box>
  );
};

export default MediaList;
