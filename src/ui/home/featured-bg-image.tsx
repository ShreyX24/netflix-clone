import { BgImageProps } from "../../types/types";

export const BgImage = ({ img }: BgImageProps) => {
  return (
    <div className="absolute w-screen h-screen -z-10 top-0 left-0 flex items-end">
      <div className="img-wrap"></div>
      <img src={img} alt="" className="w-[2560px] object-fill img" />
    </div>
  );
};
