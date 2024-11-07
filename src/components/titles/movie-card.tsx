import { useGetImages } from "../../graphql/fetch/movImages";

type MovieCardProps = {
  movie_id: string;
  fallback_img: string;
};

export const MovieCard = ({ movie_id, fallback_img }: MovieCardProps) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  const movPopularData = useGetImages(movie_id);

  const handleMovieCardHoveredOn = () => {};
  const handleMovieCardHoveredOff = () => {};

  return (
    <div
      className="flex items-center relative"
      style={{
        minWidth: "395px",

        width: "395px",
        height: "220px",
      }}
      onMouseOver={handleMovieCardHoveredOn}
      onMouseOut={handleMovieCardHoveredOff}
    >
      <img
        src={`${imgUrl}${
          movPopularData?.backdrops[0]?.file_path === undefined
            ? fallback_img
            : movPopularData?.backdrops[0]?.file_path
        }`}
        alt=""
        className="object-fill rounded-md"
      />
    </div>
  );
};
