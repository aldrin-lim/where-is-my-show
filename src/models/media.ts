export type MediaResponse = {
  backdrop_path: string;
  first_air_date?: string;
  release_date?: string;
  genre_ids: number[];
  id: number;
  name?: string;
  title?: string;
  original_title?: string;
  origin_country: string[];
  original_language: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  media_type: MediaType;
  runtime?: number;
  genres?: {
    id: number,
    name: string
  }[]
};

export type MediaProviderResponse = {
  results: {
    [region: string]: {
      [streamType in "flatrate" | "buy" | "rent"]: {
        display_priority: number;
        logo_path: string;
        provider_id: number;
        provider_name: string;
      }[]
    }
  }
}

export type Media = {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  mediaType: MediaType;
};

export const mediaType = ['tv', 'movie'] as const;
export type MediaType = typeof mediaType[number];

export type MediaDetailQueryParams = {
  id?: number;
}
