export const MovieCardSkel = () => {
  const cards = Array(6).fill(null);

  return (
    <div className="flex gap-1 overflow-hidden">
      {cards.map((_, index) => (
        <div
          key={index}
          className="skeleton-card flex items-center justify-center rounded-md"
        />
      ))}
    </div>
  );
};

export default MovieCardSkel;
