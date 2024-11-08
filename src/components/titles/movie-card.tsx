import { useState } from "react";
import { useGetImages } from "../../graphql/fetch/movImages";

type MovieCardProps = {
  movie_id: string;
  fallback_img: string;
};

export const MovieCard = ({ movie_id, fallback_img }: MovieCardProps) => {
  const [isMovieCardHovered, setIsMovieCardHovered] = useState<boolean>(false);

  const imgUrl = "https://image.tmdb.org/t/p/original";

  const movPopularData = useGetImages(movie_id);

  const handleMovieCardHoveredOn = () => {
    setIsMovieCardHovered(true);
  };
  const handleMovieCardHoveredOff = () => {
    setIsMovieCardHovered(false);
  };

  return (
    <div
      className="flex items-center relative cursor-pointer"
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

      {isMovieCardHovered ? (
        <div
          className="absolute flex items-center cursor-pointer z-30"
          style={{
            minWidth: "395px",
            width: "500px",
            height: "400px",
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
            width={700}
            className="object-contain rounded-md w-full h-full"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
