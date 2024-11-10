import { gql, useQuery } from "@apollo/client";

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

export const useGetUpcomingMovies = () => {
  const { data, loading } = useQuery(GET_UPCOMING_MOVIES);
  return { data: data?.movUpcoming, loading };
}