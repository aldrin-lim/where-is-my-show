import { useQuery } from "react-query";
import MediaEntry from "../components/MediaEntry/MediaEntry";
import { getTopMovies, getTopTVShows } from "../http/api";
import { Media } from "../models/media";

import "../style/style.css";

const Home = () => {
  const topMoviesQuery = useQuery<{ results: Media[] }>(
    ["topMovies"],
    getTopMovies
  );
  const topTvShowsQuery = useQuery<{ results: Media[] }>(
    ["topTvShows"],
    getTopTVShows
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
