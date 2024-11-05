import { FeaturedAbout } from "./featured-about";
import { BgImage } from "./featured-bg-image";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

interface movPopularResponse {
  id: string;
  original_title: string;
  backdrop_path: string;
  original_language: string;
  poster_path: string;
  overview: string;
}

const GET_POPULAR_MOVIES = gql`
  query {
    movPopular {
      results {
        id
        original_title
        backdrop_path
        original_language
        poster_path
        overview
      }
    }
  }
`;

export const FeaturedSection = () => {
  const [movPopularData, setMovPopularData] = useState<
    movPopularResponse | undefined
  >(undefined);

  const imgUrl = "https://image.tmdb.org/t/p/original";

  const { data } = useQuery(GET_POPULAR_MOVIES);

  useEffect(() => {
    if (data && data.movPopular && data.movPopular.results.length > 0) {
      const randomNum = Math.floor(
        Math.random() * data.movPopular.results.length
      );
      const randomTitleId = data.movPopular.results[randomNum];
      console.log(randomTitleId);

      if (randomTitleId) {
        setMovPopularData(randomTitleId);
      }
    }
  }, [data]);

  return (
    <div>
      <BgImage img={`${imgUrl}${movPopularData?.backdrop_path}`} />
      <FeaturedAbout
        title_name={movPopularData?.original_title}
        title_desc={movPopularData?.overview}
      />
    </div>
  );
};
