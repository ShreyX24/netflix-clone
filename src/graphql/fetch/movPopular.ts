// graphql/fetch/movPopular.ts
import { gql, useQuery } from "@apollo/client";

export const GET_POPULAR_MOVIES = gql`
  query {
    movPopular {
      results {
        id
        original_title
        backdrop_path
      }
    }
  }
`;

export const useGetPopularMovies = () => {
  const { data, loading } = useQuery(GET_POPULAR_MOVIES);
  return { data: data?.movPopular, loading };
};