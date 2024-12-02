interface BgImg {
  img: string;
}

export const BgImg = ({ img }: BgImg) => {
  return (
    <div className="img-wrap-modal absolute ">
      <img
        src={img}
        alt=""
        className="object-contain img-modal w-[1305px] rounded-l-md rounded-r-md"
      />
    </div>
  );
};
