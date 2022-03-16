import React from 'react';
import { Box } from "@mui/system";
import { MediaResponse } from "../../models/media";
import MediaItem from "../MediaItem";
import { Link } from 'react-router-dom';

type MediaListProps = {
  entries: MediaResponse[]
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
            <Link to={{ state: { mediaType: media.media_type }, pathname: `/media/${media.id}` }}>
              <MediaItem thumbnail={media.poster_path} title={title} date={dateFormatted}  />
            </Link>
          )
        })
      }
    </Box>
  );
};

export default MediaList;
