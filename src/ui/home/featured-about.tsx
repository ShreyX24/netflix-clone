import { FeaturedAboutProps } from "../../types/types";

export const FeaturedAbout = ({
  title_name,
  title_desc,
}: FeaturedAboutProps) => {
  return (
    <div className="w-screen h-[1000px] mt-14 flex items-end justify-end">
      <div className="w-1/2 ml-[75px] mb-[200px] flex flex-col gap-10">
        {/* title name */}
        <span className="text-8xl">{title_name}</span>

        {/* title description */}
        <div>
          <span className="text-3xl line-clamp-3">{title_desc}</span>
        </div>

        {/* UI Btns */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          {/* Play btn */}
          <button
            className="flex items-center px-8 py-2 gap-2 rounded-md"
            style={{ backgroundColor: "#e4e4e4", color: "#141414" }}
          >
            <img src="/icons/play.png" alt="" width={22} />
            <span>Play</span>
          </button>

          {/* More Info btn */}
          <button
            className="flex items-center px-6 py-2 gap-2 rounded-md"
            style={{ backgroundColor: "#91919193", color: "#e4e4e4" }}
          >
            <img src="/icons/info.png" alt="" width={22} />
            <span>More Info</span>
          </button>

          {/* U/A Tag */}
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <div
          className="h-8 w-[150px] mb-[200px] flex items-center gap-5 text-lg font-semibold"
          style={{ backgroundColor: "#4d4d4d86" }}
        >
          <div
            className="w-1 h-full bg-white"
            style={{ backgroundColor: "#e4e4e4" }}
          ></div>
          <span>U/A 13+</span>
        </div>
      </div>
    </div>
  );
};
