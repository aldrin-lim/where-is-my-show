import { Media, MediaResponse } from "../models/media";

const buildMediaData = (media: MediaResponse): Media => {
  const date = media.first_air_date || media.release_date
  const title = media.title || media.name || media.original_title || media.original_name || ''
  return {
    id: media.id,
    title: title,
    thumbnail: media.poster_path,
    date: date
      ? new Date(date).toLocaleDateString()
      : "",
    mediaType: media.media_type
  }
};

export default buildMediaData