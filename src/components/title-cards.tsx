import { useEffect, useRef, useState } from "react";
import { MovieCard } from "./movie-card";
import { Movie, PopularMovie } from "../types/types";

export const TitleCards = ({ data }: PopularMovie) => {
  // usestate
  const [isHeaderDivHovered, setIsHeaderDivHovered] = useState<boolean>(false);
  const [isExploreDivHovered, setIsExploreDivHovered] =
    useState<boolean>(false);
  const [isCardsDivHovered, setIsCardsDivHovered] = useState<boolean>(false);
  const [isLScrollBtnHovered, setIsLScrollBtnHovered] =
    useState<boolean>(false);
  const [isRScrollBtnHovered, setIsRScrollBtnHovered] =
    useState<boolean>(false);
  const [movData, setMovData] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Refs
  const exploreDivRef = useRef<HTMLSpanElement | null>(null);
  const movieCardRef = useRef<HTMLDivElement | null>(null);
  const movieCardsContainerRef = useRef<HTMLDivElement | null>(null);

  // other defs
  const cardWidth = 395;
  const cardMargin = 8;
  const cardsPerPage = 6;

  const imgUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    if (data?.results) {
      setMovData(data?.results);
      console.log(data);
    }
  }, [data]);

  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      movieCardsContainerRef.current?.scrollBy({
        left: -(cardWidth + cardMargin) * cardsPerPage,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (currentIndex < Math.max(0, movData.length - cardsPerPage)) {
      setCurrentIndex(currentIndex + 1);
      movieCardsContainerRef.current?.scrollBy({
        left: (cardWidth + cardMargin) * cardsPerPage,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      {/* header */}
      <div
        className="flex font-semibold justify-start items-end h-[70px] cursor-pointer"
        style={{
          // gap: isExploreDivHovered ? "20px" : "0px",
          width: 2410,
        }}
        onMouseOver={() => setIsHeaderDivHovered(true)}
        onMouseOut={() => setIsHeaderDivHovered(false)}
      >
        <span
          className="text-4xl"
          onMouseOver={() => setIsExploreDivHovered(true)}
          onMouseOut={() => setIsExploreDivHovered(false)}
        >
          Your Next Watch
        </span>

        {/* explore all */}
        <div
          className="flex items-end h-full"
          style={{
            gap: isExploreDivHovered ? "4px" : "0px",
            paddingLeft: isExploreDivHovered ? "20px" : "0px",
          }}
          onMouseOver={() => setIsExploreDivHovered(true)}
          onMouseOut={() => setIsExploreDivHovered(false)}
        >
          <span
            className="transition-all delay-300 ease-in-out"
            style={{
              color: "#54b9c5",
              // position: isExploreDivHovered ? "relative" : "absolute",
              opacity: isExploreDivHovered ? "100%" : "0",
            }}
            ref={exploreDivRef}
            onMouseOver={() => setIsExploreDivHovered(true)}
            onMouseOut={() => setIsExploreDivHovered(false)}
          >
            Explore All
          </span>

          {/* Arrow */}
          {isHeaderDivHovered ? (
            <img
              className="absolute transition-all duration-300 ease-in-out"
              src="/icons/arrow-right.png"
              style={{
                marginBottom: isExploreDivHovered ? "6px" : "4px",
                width: isExploreDivHovered ? 12 : 18,
                transform: isExploreDivHovered
                  ? `translateX(${exploreDivRef.current?.offsetWidth}px)`
                  : "",
              }}
            ></img>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* cards */}
      <div className="w-screen flex items-center justify-center ">
        {/* scroll buttons */}
        <div
          className="w-screen z-20 absolute flex justify-between"
          style={{
            minHeight: "85px",
            height: "220px",
          }}
          onMouseOver={() => setIsCardsDivHovered(true)}
          onMouseOut={() => setIsCardsDivHovered(false)}
        >
          <button
            className="h-full scroll-btns flex items-center justify-center rotate-180 "
            style={{ width: "70px" }}
            onClick={handleScrollLeft}
            onMouseOver={() => setIsLScrollBtnHovered(true)}
            onMouseOut={() => setIsLScrollBtnHovered(false)}
          >
            <img
              className="transition-all duration-150 ease-in-out"
              src="/icons/arrow-right_w.png "
              alt=""
              style={{
                width: isLScrollBtnHovered ? 28 : 22,
                opacity: isCardsDivHovered ? "100%" : 0,
              }}
            />
          </button>
          <button
            className="h-full scroll-btns flex items-center justify-center  "
            style={{ width: "70px" }}
            onClick={handleScrollRight}
            onMouseOver={() => setIsRScrollBtnHovered(true)}
            onMouseOut={() => setIsRScrollBtnHovered(false)}
          >
            <img
              className="transition-all duration-150 ease-in-out"
              src="/icons/arrow-right_w.png"
              alt=""
              style={{
                width: isRScrollBtnHovered ? 28 : 22,
                opacity: isCardsDivHovered ? "100%" : 0,
              }}
            />
          </button>
        </div>

        {/* Movie cards */}
        <div
          ref={movieCardRef}
          className="flex gap-2 "
          style={{ scrollBehavior: "smooth" }}
        >
          {/* each card */}

          {movData &&
            movData.map((item, index) => (
              <MovieCard
                key={index}
                img={`${imgUrl}${item?.backdrop_path}`}
                title_name={item.original_title}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
