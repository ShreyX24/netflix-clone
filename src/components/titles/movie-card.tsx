import { useState } from "react";
import { useGetImages } from "../../graphql/fetch/movImages";

type MovieCardProps = {
  movie_id: string;
  fallback_img: string;
  index: number;
};

export const MovieCard = ({
  movie_id,
  fallback_img,
  index,
}: MovieCardProps) => {
  const [isMovieCardHovered, setIsMovieCardHovered] = useState<boolean>(false);

  const imgUrl = "https://image.tmdb.org/t/p/original";

  const movPopularData = useGetImages(movie_id);

  const isFirstInSet = index % 6 === 0;
  const isLastInSet = index % 6 === 5;

  const getTransformOrigin = () => {
    if (isFirstInSet) return "left center";
    if (isLastInSet) return "right center";
    return "center center";
  };

  const getHoverStyles = () => {
    const scale = 1.2;
    const baseStyles = {
      transform: isMovieCardHovered ? `scale(${scale})` : "scale(1)",
      transformOrigin: getTransformOrigin(),
      zIndex: isMovieCardHovered ? 10 : 1,
      transition: "transform 0.3s ease, width 0.3s ease, height 0.3s ease",
    };

    return baseStyles;
  };

  const handleMovieCardHoveredOn = () => {
    setIsMovieCardHovered(true);
  };
  const handleMovieCardHoveredOff = () => {
    setIsMovieCardHovered(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-start cursor-pointer relative"
      style={{
        minWidth: "395px",
        width: isMovieCardHovered ? "455px" : "395px",
        minHeight: "220px",
        ...getHoverStyles(),
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
        className="object-contain rounded-md relative"
      />
      {isMovieCardHovered ? (
        <div className=" h-[120px] w-full z-20 movie-card movie-card-hovered">
          
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
