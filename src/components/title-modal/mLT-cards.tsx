import { useGetImages } from "../../graphql/fetch/movImages";
import { useGetMovDetails } from "../../graphql/fetch/movDetails";
import { openModal } from "../../redux/modalSlice";
import { useAppDispatch } from "../../redux/storeConfig";

interface MLTCardsProps {
  titleId: string;
  fallback_img: string;
  modalContentRef: React.RefObject<HTMLDivElement>;
}

export const MLTCards = ({
  titleId,
  fallback_img,
  modalContentRef,
}: MLTCardsProps) => {
  const dispatch = useAppDispatch(); // Use the typed dispatch hook

  const imgUrl = "https://image.tmdb.org/t/p/original";

  const titleImageData = useGetImages(titleId);
  const titleMetaData = useGetMovDetails(titleId);

  const getYear = (releaseDate: string): string => {
    return releaseDate.split("-")[0]; // Splits by "-" and takes the first part
  };

  const handleOpenModal = () => {
    dispatch(openModal(titleId));

    if (modalContentRef.current) {
      modalContentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-[380px] h-[360px] rounded-md">
      {/* title img container */}
      <div onClick={handleOpenModal} className="cursor-pointer">
        <img
          src={`${imgUrl}${
            titleImageData?.backdrops[0]?.file_path === undefined
              ? fallback_img
              : titleImageData?.backdrops[0]?.file_path
          }`}
          alt=""
          className="object-contain w-[400px]"
        />
      </div>

      {/* about title */}
      <div className="flex flex-col gap-4 bg-[#2f2f2f] py-5 text-[#bebebe]">
        {/* additional title info and add to my list button */}
        <div className="flex items-center justify-between px-4">
          {/* additional info */}
          <div className="flex gap-2">
            <span className="border-[1px] border-[#8d8d8d] px-2">U/A 16+</span>
            <span className="border-[1px] border-[#8d8d8d] text-sm px-3 py-0 flex items-center">
              5.1
            </span>
            <span>
              {titleMetaData?.release_date
                ? getYear(titleMetaData?.release_date)
                : titleMetaData?.release_date}
            </span>
          </div>
          {/* add to list button */}
          <div>
            <button className=" w-[44px] h-[44px] hover:border-white border-gray-300 border-[2px] rounded-full flex items-center justify-center">
              <img src="/icons/plus.png" alt="" width={20} />
            </button>
          </div>
        </div>

        {/* title overview */}
        <div>
          <span className="line-clamp-2 text-sm  px-4">
            {titleMetaData?.overview}
          </span>
        </div>
      </div>
    </div>
  );
};
