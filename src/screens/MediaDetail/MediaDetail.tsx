import { useEffect } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { MediaDetailQueryParams, MediaType } from "../../models/media";
import GradientBox from "../../shared/GradientBox";
import MovieDetail from "./MovieDetail";
import TVDetail from "./TVDetail";

type LocationState = {
  state?: {
    mediaType: MediaType;
  };
};

const MediaDetail: React.FC = () => {
  const history = useHistory();
  const params = useParams() as MediaDetailQueryParams;
  const locationState = history.location as LocationState;

  const shouldRender =
    locationState && locationState.state && params && params.id;

  const renderMedia = (type: MediaType) => {
    if (type === "tv") {
      return <TVDetail />;
    } else {
      return <MovieDetail tmdbId={params.id as number} />;
    }
  };

  if (!locationState.state) return <Redirect push to="/" />;

  return (
    <>
      {shouldRender && renderMedia(locationState.state.mediaType)}
    </>
  );
};

export default MediaDetail;
