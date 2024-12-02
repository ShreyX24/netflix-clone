import { useEffect, useRef } from "react";
import { closeModal } from "../../redux/modalSlice";
import { useAppDispatch, useAppSelector } from "../../redux/storeConfig";
import { useGetImages } from "../../graphql/fetch/movImages";
import { useGetMovDetails } from "../../graphql/fetch/movDetails";
import { useGetMovCastDetails } from "../../graphql/fetch/movCastDetails";
import { BgImg } from "../../components/title-modal/bgImg";
import { CloseButton } from "../../components/title-modal/close-btn";
import { InterfaceButton } from "../../components/title-modal/interface-btn";
import { LeftCol } from "../../components/title-modal/left-col";
import { RightCol } from "../../components/title-modal/right-col";
import { MoreLikeThis } from "../../components/title-modal/more-like-this";
import { usePreventBackgroundScroll } from "../../hooks/usePreventBgScroll";

export const TitleModal = () => {
  // prevent background scrolling
  usePreventBackgroundScroll();

  const dispatch = useAppDispatch();
  const { isModalOpen, selectedMovieId } = useAppSelector(
    (state) => state.modal
  );

  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const imgUrl = "https://image.tmdb.org/t/p/original";

  const titleImg = useGetImages(selectedMovieId);
  const titleData = useGetMovDetails(selectedMovieId);
  const castData = useGetMovCastDetails(selectedMovieId);

  const release_date: string = titleData?.release_date;
  const duration: string = titleData?.runtime;

  // Handle clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the modal is open and the click was outside the modal content
      if (
        isModalOpen &&
        modalRef.current &&
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    // Add event listener when modal is open
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // If modal is not open, return null
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed w-screen h-screen title-modal z-[100] flex items-start justify-center overflow-auto"
      ref={modalRef}
    >
      <div
        className="flex w-[50vw] min-h-screen bg-[#181818] items-start justify-center mt-[50px] rounded-md relative"
        ref={modalContentRef}
      >
        {/* bg image in the background*/}
        <BgImg img={`${imgUrl}${titleImg?.backdrops[0]?.file_path}`} />

        {/* title description and more like this movies */}
        <div className="flex flex-col w-full z-[110]">
          {/* close title-modal */}
          <CloseButton handleCloseModal={handleCloseModal} />

          {/* interface buttons */}
          <div className="w-full h-[500px] flex items-end">
            <InterfaceButton movieId={selectedMovieId} />
          </div>

          {/* about title - description, cast, title release date*/}
          <div className="w-full h-[200px] py-5 px-14 flex gap-5  text-sm">
            {/* left col */}
            <LeftCol
              release_date={release_date}
              duration={duration}
              overview={titleData?.overview}
            />

            {/* right col */}
            <RightCol castData={castData} titleData={titleData} />
          </div>

          {/* more like this */}
          <div className="w-full px-14 flex">
            <MoreLikeThis />
          </div>
        </div>
      </div>
    </div>
  );
};
