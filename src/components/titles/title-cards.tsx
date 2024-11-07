import { useEffect, useRef, useState } from "react";
import { Movie, PopularMovie } from "../../types/types";
import { MovieCard } from "./movie-card";
import { TitleHeader } from "./title-header";
import { ScrollButtons } from "./scroll-buttons";

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

  // Refs
  const exploreDivRef = useRef<HTMLSpanElement | null>(null);
  const movieCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data?.results) {
      setMovData(data?.results);
    }
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
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
        {/* scroll buttons */}
        <ScrollButtons
          movieCardRef={movieCardRef}
          isCardsDivHovered={isCardsDivHovered}
          setIsCardsDivHovered={setIsCardsDivHovered}
          isLScrollBtnHovered={isLScrollBtnHovered}
          setIsLScrollBtnHovered={setIsLScrollBtnHovered}
          isRScrollBtnHovered={isRScrollBtnHovered}
          setIsRScrollBtnHovered={setIsRScrollBtnHovered}
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
      </div>
    </div>
  );
};
