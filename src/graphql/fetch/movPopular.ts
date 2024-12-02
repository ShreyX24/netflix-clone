// // graphql/fetch/movPopular.ts
// import { gql, useQuery } from "@apollo/client";


// export const GET_POPULAR_MOVIES = gql`
//   query {
//     movPopular {
//       results {
//         id
//         original_title
//         backdrop_path
//       }
//     }
//   }
// `;

// export const useGetPopularMovies = () => {
//   const { data, loading } = useQuery(GET_POPULAR_MOVIES);
//   return { data: data?.movPopular, loading };
// };


import { gql } from "@apollo/client";
import { createRetryableQuery } from "../../utils/gql-retry-query";

export const GET_POPULAR_MOVIES = gql`
  query {
    movPopular {
      results {
        id
        original_title
        backdrop_path
        overview
      }
    }
  }
`;

export const useGetPopularMovies = createRetryableQuery(
  GET_POPULAR_MOVIES,
  'movPopular', 
  { maxRetries: 10, retryDelay: 1000 }
);