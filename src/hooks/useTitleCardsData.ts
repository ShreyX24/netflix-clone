// hooks/useTitleCardsData.ts
import { useGetNowPlayingMovies } from "../graphql/fetch/movNowPlaying";
import { useGetPopularMovies } from "../graphql/fetch/movPopular";
import { useGetTopRatedMovies } from "../graphql/fetch/movTopRated";
import { useGetUpcomingMovies } from "../graphql/fetch/movUpcoming";

export const useTitleCardsData = () => {
  const movPopularData = useGetPopularMovies();
  const movTopRatedData = useGetTopRatedMovies();
  const movUpcomingData = useGetUpcomingMovies();
  const movNowPlayingData = useGetNowPlayingMovies();

  const titleCardsData = [
    {
      header: "Popular",
      data: movPopularData.data,
      loading: movPopularData.loading,
    },
    {
      header: "Top Rated",
      data: movTopRatedData.data,
      loading: movTopRatedData.loading,
    },
    {
      header: "Upcoming",
      data: movUpcomingData.data,
      loading: movUpcomingData.loading,
    },
    {
      header: "Now Playing",
      data: movNowPlayingData.data,
      loading: movNowPlayingData.loading,
    },
  ];

  return titleCardsData;
};