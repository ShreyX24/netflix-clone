// graphql/fetch/movTopRated.ts
import { gql } from "@apollo/client";
import { createRetryableQuery } from "../../utils/gql-retry-query";

export const GET_TOPRATED_MOVIES = gql`
  query {
    movTopRated {
      results {
        id
        original_title
        backdrop_path
        
      }
    }
  }
`;

export const useGetTopRatedMovies = createRetryableQuery(
  GET_TOPRATED_MOVIES,
  'movTopRated',
  { maxRetries: 10, retryDelay: 1000 }
);