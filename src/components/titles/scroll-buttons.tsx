import { useState } from "react";
import { ScrollButtonsProps } from "../../types/types";

export const ScrollButtons = ({
  movieCardRef,
  isCardsDivHovered,
  setIsCardsDivHovered,
  isLScrollBtnHovered,
  setIsLScrollBtnHovered,
  isRScrollBtnHovered,
  setIsRScrollBtnHovered,
}: ScrollButtonsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // other defs
  const cardWidth = 395;
  const cardMargin = 8;
  const cardsPerPage = 6;
  const maxIndex = Math.max(0, 20);

  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      movieCardRef.current?.scrollBy({
        left: -(cardWidth + cardMargin) * cardsPerPage,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      movieCardRef.current?.scrollBy({
        left: (cardWidth + cardMargin) * cardsPerPage,
        behavior: "smooth",
      });
    } else {
      setCurrentIndex(0);
      movieCardRef.current?.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
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
        style={{ width: "80px" }}
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
  );
};
