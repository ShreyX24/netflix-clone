import { ScrollButtonRightProps } from "../../types/types";

export const ScrollButtonRight = ({
  movieCardRef,
  isRScrollBtnHovered,
  setIsRScrollBtnHovered,
  isCardsDivHovered,
  currentIndex,
  setCurrentIndex,
}: ScrollButtonRightProps) => {
  const handleScrollRight = () => {
    const cards = movieCardRef.current?.children;
    if (cards) {
      // Calculate the next set's start index
      const nextSetIndex = (currentIndex + 1) * 7;

      // Check if we have enough cards to scroll forward
      if (nextSetIndex < cards.length) {
        setCurrentIndex(currentIndex + 1);
        const targetCard = cards[nextSetIndex] as HTMLElement;

        if (targetCard) {
          targetCard.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }
      } else {
        // Reset to beginning if we're at the end
        setCurrentIndex(0);
        const firstCard = cards[0] as HTMLElement;
        if (firstCard) {
          firstCard.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }
      }
    }
  };
  return (
    <button
      className="h-full scroll-btns flex items-center justify-center absolute right-0 z-[20] rounded-md mt-[60px]"
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
