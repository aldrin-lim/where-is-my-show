import { tmdbApiKey } from "../config/keys";


export const searchMedia = (title: string) => {
  return fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${tmdbApiKey.key}&language=en-US&query=${title}&page=1&include_adult=false`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
};

export const getTopMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbApiKey.key}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

export const getTopTVShows = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${tmdbApiKey.key}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

export const getMovieDetail = (tmdbId: number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${tmdbApiKey.key}&language=en-US`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

export const getMovieProvider =  (tmdbId: number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers?api_key=${tmdbApiKey.key}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
}