import { useState } from "react";
import { useGetImages } from "../../graphql/fetch/movImages";
import { useAppDispatch } from "../../redux/storeConfig";
import { openModal } from "../../redux/modalSlice";
import { useNavigate } from "react-router-dom";

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
  const dispatch = useAppDispatch(); // Use the typed dispatch hook

  const [isMovieCardHovered, setIsMovieCardHovered] = useState<boolean>(false);

  const imgUrl = "https://image.tmdb.org/t/p/original";

  const titleData = useGetImages(movie_id);

  const isFirstInSet = index % 6 === 0;
  const isLastInSet = index % 6 === 5;

  const navigate = useNavigate();

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
      zIndex: isMovieCardHovered ? 30 : 1,
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

  const handleOpenModal = () => {
    dispatch(openModal(movie_id)); // Dispatch the openModal action with the movie ID
  };

  const handlePlayClick = () => {
    // Navigate to the video route with the movie ID
    navigate(`/video/${movie_id}`);
  };

  return (
    <div
      id={`${index}`}
      className="flex flex-col items-center justify-start cursor-pointer relative"
      style={{
        minWidth: "395px",
        width: "395px",
        minHeight: "220px",
      }}
      onMouseOver={handleMovieCardHoveredOn}
      onMouseOut={handleMovieCardHoveredOff}
    >
      <img
        src={`${imgUrl}${
          titleData?.backdrops[0]?.file_path === undefined
            ? fallback_img
            : titleData?.backdrops[0]?.file_path
        }`}
        alt=""
        className="object-contain rounded-md relative"
      />

      <div
        className="flex flex-col items-center justify-start cursor-pointer absolute"
        style={{
          minWidth: "395px",
          width: isMovieCardHovered ? "480px" : "395px",
          minHeight: "220px",
          ...getHoverStyles(),
        }}
        onMouseOver={handleMovieCardHoveredOn}
        onMouseOut={handleMovieCardHoveredOff}
      >
        <img
          src={`${imgUrl}${
            titleData?.backdrops[0]?.file_path === undefined
              ? fallback_img
              : titleData?.backdrops[0]?.file_path
          }`}
          alt=""
          className="object-contain rounded-md relative"
        />
        {/* btns div */}
        {isMovieCardHovered ? (
          <div className="absolute h-full w-full flex items-center justify-center movie-card movie-card-hovered">
            <img
              src={`${imgUrl}${
                titleData?.backdrops[0]?.file_path === undefined
                  ? fallback_img
                  : titleData?.backdrops[0]?.file_path
              }`}
              alt=""
              className="object-contain rounded-md relative"
            />
            <div className="absolute w-full h-full movie-card-hovered flex items-end justify-center gap-5">
              <div className="flex gap-[6px]">
                <button
                  className="bg-white  hover:bg-gray-300 w-[44px] h-[44px] rounded-full flex items-center justify-center"
                  onClick={handlePlayClick}
                >
                  <img src="/icons/play.png" alt="" width={17} />
                </button>
                <button className=" w-[44px] h-[44px] hover:border-white border-gray-300 border-[2px] rounded-full flex items-center justify-center">
                  <img src="/icons/plus.png" alt="" width={20} />
                </button>
                <button className=" w-[44px] h-[44px] hover:border-white border-gray-300 border-[2px] rounded-full flex items-center justify-center">
                  <img src="/icons/like.png" alt="" width={20} />
                </button>
              </div>

              <button
                className=" w-[44px] h-[44px] hover:border-white border-gray-300 border-[2px] rounded-full flex items-center justify-center rotate-90"
                onClick={handleOpenModal}
              >
                <img src="/icons/arrow-right_w.png" alt="" width={18} />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
