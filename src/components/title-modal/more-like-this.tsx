import { MLTCards } from "./mLT-cards";
import { useEffect, useState } from "react";
import { useGetTopRatedMovies } from "../../graphql/fetch/movTopRated";
import { Movie } from "../../types/types";

interface MoreLikeThisProps {
  modalContentRef: React.RefObject<HTMLDivElement>;
}

export const MoreLikeThis = ({ modalContentRef }: MoreLikeThisProps) => {
  const [titleData, setTitleData] = useState<Movie[]>([]);

  const data = useGetTopRatedMovies()?.data;

  useEffect(() => {
    // Reset data fetching state when data changes
    if (data?.results) {
      setTitleData(data?.results);
    }
  }, [data]);

  // useEffect(() => {
  //   console.log(titleData);
  // }, [titleData]);

  return (
    <div>
      {/* header */}
      <div>
        <span className="text-white text-2xl font-semibold">
          More like this
        </span>
      </div>

      {/* MLT Cards Container */}
      <div className="grid grid-cols-3 auto-rows-max gap-6">
        {titleData.slice(0, 18).map((item, index) => (
          <MLTCards
            key={index}
            titleId={item.id}
            fallback_img={item.backdrop_path}
            modalContentRef={modalContentRef}
          />
        ))}
      </div>
    </div>
  );
};
