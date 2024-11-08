import { useEffect, useRef, useState } from "react";
import { Movie, PopularMovie } from "../../types/types";
import { MovieCard } from "./movie-card";
import { TitleHeader } from "./title-header";
import { ScrollButtonLeft } from "./scroll-button-left";
import { ScrollButtonRight } from "./scroll-button-right";

export const TitleCards = ({ headerTitle, data }: PopularMovie) => {
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Refs
  const exploreDivRef = useRef<HTMLSpanElement | null>(null);
  const movieCardRef = useRef<HTMLDivElement | null>(null);

  // other defs
  const cardWidth = 395;
  const cardMargin = 8;
  const cardsPerPage = 6;
  const maxIndex = Math.max(0, 20);

  useEffect(() => {
    if (data?.results) {
      setMovData(data?.results);
    }
  }, [data]);

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-5"
      onMouseOver={() => setIsCardsDivHovered(true)}
      onMouseOut={() => setIsCardsDivHovered(false)}
    >
      {/* header */}
      <TitleHeader
        headerTitle={headerTitle}
        exploreDivRef={exploreDivRef}
        isHeaderDivHovered={isHeaderDivHovered}
        isExploreDivHovered={isExploreDivHovered}
        setIsHeaderDivHovered={setIsHeaderDivHovered}
        setIsExploreDivHovered={setIsExploreDivHovered}
      />

      {/* title cards wrapper*/}
      <div className="w-screen flex items-center">
        {/* Right Scroll button */}
        <ScrollButtonLeft
          movieCardRef={movieCardRef}
          isCardsDivHovered={isCardsDivHovered}
          isLScrollBtnHovered={isLScrollBtnHovered}
          setIsLScrollBtnHovered={setIsLScrollBtnHovered}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          cardWidth={cardWidth}
          cardMargin={cardMargin}
          cardsPerPage={cardsPerPage}
        />
        {/* Movie cards */}
        <div
          ref={movieCardRef}
          className="flex gap-2 ml-[70px] overflow-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* each card */}

          {movData &&
            movData.map((item, index) => (
              <MovieCard
                key={index}
                fallback_img={item?.backdrop_path}
                movie_id={item?.id}
                
              />
            ))}
        </div>

        {/* Right Scroll button */}
        <ScrollButtonRight
          movieCardRef={movieCardRef}
          isCardsDivHovered={isCardsDivHovered}
          isRScrollBtnHovered={isRScrollBtnHovered}
          setIsRScrollBtnHovered={setIsRScrollBtnHovered}
          maxIndex={maxIndex}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          cardWidth={cardWidth}
          cardMargin={cardMargin}
          cardsPerPage={cardsPerPage}
        />
      </div>
    </div>
  );
};
