import { TitleCards } from "../../components/titles/title-cards";
import { useGetPopularMovies } from "../../graphql/fetch/movPopular";
import { useGetTopRatedMovies } from "../../graphql/fetch/movTopRated";
import { useGetNowPlayingMovies } from "../../graphql/fetch/movNowPlaying";
import { useGetUpcomingMovies } from "../../graphql/fetch/movUpcoming";

export const Titles = () => {
  const movPopularData = useGetPopularMovies();
  const movTopRatedData = useGetTopRatedMovies();
  const movUpcomingData = useGetUpcomingMovies();
  const movNowPlayingData = useGetNowPlayingMovies();

  return (
    <div className="w-screen flex flex-col">
      <TitleCards
        headerTitle="Popular"
        data={movPopularData.data}
        loading={movPopularData.loading}
      />
      <TitleCards
        headerTitle="Top Rated"
        data={movTopRatedData.data}
        loading={movTopRatedData.loading}
      />
      <TitleCards
        headerTitle="Upcoming"
        data={movUpcomingData.data}
        loading={movUpcomingData.loading}
      />
      <TitleCards
        headerTitle="Now Playing"
        data={movNowPlayingData.data}
        loading={movNowPlayingData.loading}
      />
    </div>
  );
};
