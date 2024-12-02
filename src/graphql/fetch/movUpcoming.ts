import { gql } from "@apollo/client";
import { createRetryableQuery } from "../../utils/gql-retry-query";

export const GET_UPCOMING_MOVIES = gql`
  query {
      movUpcoming {
        results {
          id
          original_title
          backdrop_path
        }
      }
    }
`;

export const useGetUpcomingMovies = createRetryableQuery(
  GET_UPCOMING_MOVIES,
  'movUpcoming',
  { maxRetries: 10, retryDelay: 1000 }
);