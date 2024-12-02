import { gql } from "@apollo/client";
import { createRetryableQuery } from "../../utils/gql-retry-query";

export const GET_NOWPLAYING_MOVIES = gql`
  query {
      movNowPlaying {
        results {
          id
          original_title
          backdrop_path
        }
      }
    }
`;

export const useGetNowPlayingMovies = createRetryableQuery(
  GET_NOWPLAYING_MOVIES,
  'movNowPlaying',
  { maxRetries: 10, retryDelay: 1000 }
);