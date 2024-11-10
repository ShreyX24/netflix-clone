// graphql/fetch/movTopRated.ts
import { gql, useQuery } from "@apollo/client";

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

export const useGetTopRatedMovies = () => {
  const { data, loading } = useQuery(GET_TOPRATED_MOVIES);
  return { data: data?.movTopRated, loading };
};