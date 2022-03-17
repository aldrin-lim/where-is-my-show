import { useQuery } from "react-query";
import MediaEntry from "../components/MediaEntry/MediaEntry";
import { getTopMovies, getTopTVShows, signIn } from "../http/api";
import { MediaResponse } from "../models/media";

import "../style/style.css";

const Home = () => {
  const topMoviesQuery = useQuery<{ results: MediaResponse[] }>(
    ["topMovies"],
    getTopMovies,
    {
      staleTime: 300000, // set the caching up to 5 minutes
    }
  );
  const topTvShowsQuery = useQuery<{ results: MediaResponse[] }>(
    ["topTvShows"],
    getTopTVShows,
    {
      staleTime: 300000, // set the caching up to 5 minutes
    }
  );

  return (
    <>
      <MediaEntry
        isLoading={topMoviesQuery.isLoading}
        entries={topMoviesQuery.data?.results}
        error={topMoviesQuery.error}
        label="Top Movies"
      />
      <MediaEntry
        isLoading={topTvShowsQuery.isLoading}
        entries={topTvShowsQuery.data?.results}
        error={topTvShowsQuery.error}
        label="Top TV Shows"
      />
    </>
  );
};

export default Home;
