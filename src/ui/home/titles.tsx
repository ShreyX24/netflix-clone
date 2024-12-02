import { TitleCards } from "../../components/titles/title-cards";
import { useTitleCardsData } from "../../hooks/useTitleCardsData";

export const Titles = () => {
  const titleCardsData = useTitleCardsData();
  return (
    <div className="w-screen flex flex-col">
      {titleCardsData &&
        titleCardsData.map((section) => (
          <TitleCards
            headerTitle={section.header}
            data={section.data}
            loading={section.loading}
          />
        ))}
    </div>
  );
};
