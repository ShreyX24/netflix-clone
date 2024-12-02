interface LeftColProps {
  release_date: string;
  duration: string;
  overview: string;
}

export const LeftCol = ({ release_date, duration, overview }: LeftColProps) => {
  const formatDuration = (runtime: string): string => {
    const totalMinutes = parseInt(runtime, 10); // Convert the runtime to a number
    const hours = Math.floor(totalMinutes / 60); // Calculate the hours
    const minutes = totalMinutes % 60; // Calculate the remaining minutes
    return `${hours}hr ${minutes}min`; // Return the formatted string
  };

  const getYear = (releaseDate: string): string => {
    return releaseDate.split("-")[0]; // Splits by "-" and takes the first part
  };

  return (
    <div className="flex flex-col w-[60%] gap-3">
      {/* title metrics - release date, duration */}
      <div className="text-[#a8a8a8] font-semibold text-xl flex gap-3">
        <span>{release_date ? getYear(release_date) : release_date}</span>
        <span>{formatDuration(duration)}</span>
        <span className="border-[1px] border-[#8d8d8d] text-sm px-3 py-0 flex items-center">
          5.1
        </span>
        <span>AD</span>
      </div>

      {/* title description */}
      <div>
        <span className="line-clamp-3 text-base">{overview}</span>
      </div>
    </div>
  );
};
