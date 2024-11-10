import { ScrollButtonLeftProps } from "../../types/types";

export const ScrollButtonLeft = ({
  movieCardRef,
  isCardsDivHovered,
  isLScrollBtnHovered,
  setIsLScrollBtnHovered,
  currentIndex,
  setCurrentIndex,
  cardWidth,
  cardMargin,
  cardsPerPage,
}: ScrollButtonLeftProps) => {
  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      movieCardRef.current?.scrollBy({
        left: -(cardWidth + cardMargin) * cardsPerPage,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className="h-full scroll-btns flex items-center justify-center rotate-180 z-20 absolute rounded-md mt-[60px]"
      style={{
        height: "220px",
        width: "70px",
      }}
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
  );
};
