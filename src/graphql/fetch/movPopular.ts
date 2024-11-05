import { gql, useQuery } from "@apollo/client";

const GET_POPULAR_MOVIES = gql`
    query {
      movPopular {
        results {
          id
          original_title
          backdrop_path
          original_language
          poster_path
        }
      }
    }
  `;

export const movPopularData = () => {
    const { data } = useQuery(GET_POPULAR_MOVIES);

    return data;
}
