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
      <TitleCards headerTitle="Popular" data={movPopularData} />
      {/* <TitleCards headerTitle="Top Rated" data={movTopRatedData} />
      <TitleCards headerTitle="Upcoming" data={movUpcomingData} />
      <TitleCards headerTitle="Now Playing" data={movNowPlayingData} /> */}
    </div>
  );
};
