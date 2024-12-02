interface RightColProps {
    castData: {
      cast: Array<{
        cast_id: string;
        original_name: string;
        known_for_department: string;
      }>;
    };
    titleData?: {
      genres: Array<{
        id: number;
        name: string;
      }>;
    };
  }
  
  export const RightCol = ({ castData, titleData }: RightColProps) => {
    return (
      <div className="w-[40%] flex flex-col gap-6">
        {/* Cast */}
        <div className="flex gap-1">
          <span className="text-[#777777] ">Cast:</span>
          <div className="text-white">
            {castData?.cast.slice(0, 10).map(
              (
                actor: {
                  cast_id: string;
                  original_name: string;
                  known_for_department: string;
                },
                index: number
              ) => (
                <span
                  className="hover:underline cursor-pointer"
                  key={actor.cast_id}
                >
                  {actor.original_name}
                  {index < 9 && ", "}
                </span>
              )
            )}
          </div>
        </div>
  
        {/* genre */}
        <div className="flex gap-1">
          <span className="text-[#777777]">Genre:</span>
          <div className="text-white ">
            {titleData?.genres.map(
              (genre: { id: number; name: string }, index: number) => (
                <span className="hover:underline cursor-pointer" key={genre.id}>
                  {genre.name}
                  {index < titleData.genres.length - 1 && ", "}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    );
  };