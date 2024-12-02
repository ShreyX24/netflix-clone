import { useNavigate } from "react-router-dom";

interface InterfaceButtonProps {
  movieId: string | null | undefined;
}

export const InterfaceButton = ({ movieId }: InterfaceButtonProps) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    // Navigate to the video route with the movie ID
    navigate(`/video/${movieId}`);
  };

  return (
    <div className="flex items-end p-14 gap-3">
      {/* Play btn */}
      <button
        onClick={handlePlayClick}
        className="flex items-center px-8 py-2 gap-2 rounded-sm font-semibold text-2xl"
        style={{ backgroundColor: "#e4e4e4", color: "#141414" }}
      >
        <img src="/icons/play.png" alt="" width={22} />
        <span>Play</span>
      </button>

      {/* add btn */}
      <button className=" w-[44px] h-[44px] hover:border-white border-gray-400 border-[2px] rounded-full flex items-center justify-center">
        <img src="/icons/plus.png" alt="" width={20} />
      </button>

      {/* like btn */}
      <button className=" w-[44px] h-[44px] hover:border-white border-gray-400 border-[2px] rounded-full flex items-center justify-center">
        <img src="/icons/like.png" alt="" width={20} />
      </button>
    </div>
  );
};
