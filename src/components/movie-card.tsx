type MovieCardProps = {
  img: string;
  title_name: string;
};

export const MovieCard = ({ img, title_name }: MovieCardProps) => {
  return (
    <div
      className="flex items-center"
      style={{
        minWidth: "150px",
        minHeight: "85px",
        width: "395px",
        height: "220px",
      }}
    >
      <img src={img} alt="" className="object-fill rounded-md" />
      <div
      id="title-name"
        className="z-10 absolute font-semibold flex items-end justify-center rounded-md "
        style={{
          minWidth: "150px",
          minHeight: "85px",
          width: "395px",
          height: "222px",
        }}
      >
        <span className="mb-2">{title_name}</span>
      </div>
    </div>
  );
};
