import { TitleHeaderProps } from "../../types/types";

export const TitleHeader = ({
  headerTitle,
  exploreDivRef,
  isHeaderDivHovered,
  isExploreDivHovered,
  setIsHeaderDivHovered,
  setIsExploreDivHovered,
}: TitleHeaderProps) => {
  return (
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
        {headerTitle}
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
  );
};
