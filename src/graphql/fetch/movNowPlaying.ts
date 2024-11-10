import { gql, useQuery } from "@apollo/client";

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

export const useGetNowPlayingMovies = () => {
  const { data, loading } = useQuery(GET_NOWPLAYING_MOVIES);
  return { data: data?.movNowPlaying, loading };
}