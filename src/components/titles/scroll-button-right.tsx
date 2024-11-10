import { ScrollButtonRightProps } from "../../types/types";

export const ScrollButtonRight = ({
  movieCardRef,
  isRScrollBtnHovered,
  setIsRScrollBtnHovered,
  isCardsDivHovered,
  currentIndex,
  maxIndex,
  setCurrentIndex,
  cardWidth,
  cardMargin,
  cardsPerPage,
}: ScrollButtonRightProps) => {
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
    <button
      className="h-full scroll-btns flex items-center justify-center absolute right-0 z-20 rounded-md mt-[60px]"
      style={{
        height: "222px",
        width: "80px",
      }}
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
  );
};
