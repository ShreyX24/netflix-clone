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
      retryCount: movPopularData.retryCount,
    },
    {
      header: "Top Rated",
      data: movTopRatedData.data,
      loading: movTopRatedData.loading,
      retryCount: movTopRatedData.retryCount,
    },
    {
      header: "Upcoming",
      data: movUpcomingData.data,
      loading: movUpcomingData.loading,
      retryCount: movUpcomingData.retryCount,
    },
    {
      header: "Now Playing",
      data: movNowPlayingData.data,
      loading: movNowPlayingData.loading,
      retryCount: movNowPlayingData.retryCount,
    },
  ];

  return titleCardsData;
};