import { useEffect, useRef, useState } from "react";
import { Movie, PopularMovie } from "../../types/types";
import { MovieCard } from "./movie-card";
import { TitleHeader } from "./title-header";
import { ScrollButtonLeft } from "./scroll-button-left";
import { ScrollButtonRight } from "./scroll-button-right";
import { MovieCardSkel } from "./skeleton/movieCardSkel";

export const TitleCards = ({ headerTitle, data, loading }: PopularMovie) => {
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

  useEffect(() => {
    if (data?.results) {
      setMovData(data?.results);
    }
  }, [data]);

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-start relative"
      // style={{ marginTop: index > 0 ? `${index * 420}px` : "0px" }}
      onMouseOver={() => setIsCardsDivHovered(true)}
      onMouseOut={() => setIsCardsDivHovered(false)}
    >
      {/* header */}
      <div className="sticky top-0">
        <TitleHeader
          headerTitle={headerTitle}
          exploreDivRef={exploreDivRef}
          isHeaderDivHovered={isHeaderDivHovered}
          isExploreDivHovered={isExploreDivHovered}
          setIsHeaderDivHovered={setIsHeaderDivHovered}
          setIsExploreDivHovered={setIsExploreDivHovered}
        />
      </div>

      {/* title cards wrapper*/}
      <div className="w-screen flex items-start relative">
        {/* Right Scroll button */}
        <ScrollButtonLeft
          movieCardRef={movieCardRef}
          isCardsDivHovered={isCardsDivHovered}
          isLScrollBtnHovered={isLScrollBtnHovered}
          setIsLScrollBtnHovered={setIsLScrollBtnHovered}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {/* Movie cards */}
        <div
          ref={movieCardRef}
          className="flex gap-2 ml-[70px]  pt-[60px] pb-[100px] overflow-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* each card */}

          {loading ? (
            <MovieCardSkel />
          ) : (
            <>
              {movData ? (
                movData.map((item, index) => (
                  <MovieCard
                    key={index}
                    fallback_img={item?.backdrop_path}
                    movie_id={item?.id}
                    index={index}
                  />
                ))
              ) : (
                <MovieCardSkel />
              )}
            </>
          )}
        </div>

        {/* Right Scroll button */}
        <ScrollButtonRight
          movieCardRef={movieCardRef}
          isCardsDivHovered={isCardsDivHovered}
          isRScrollBtnHovered={isRScrollBtnHovered}
          setIsRScrollBtnHovered={setIsRScrollBtnHovered}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};
