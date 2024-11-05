import { useEffect, useState } from "react";
import { TitleCards } from "../../components/title-cards";
import { gql, useQuery } from "@apollo/client";
import { MovieResponse } from "../../types/types";

export const Titles = () => {
  const [movPopularData, setMovPopularData] = useState<MovieResponse | undefined>(undefined);

  const GET_POPULAR_MOVIES = gql`
    query {
      movPopular {
        results {
          id
          original_title
          backdrop_path
          original_language
          poster_path
        }
      }
    }
  `;

  const { data } = useQuery(GET_POPULAR_MOVIES);
  useEffect(() => {
    if (data) {
      setMovPopularData(data.movPopular);
    }
  }, [data]);

  return (
    <div className="w-screen flex flex-col">
      <TitleCards data={movPopularData}/>
    </div>
  );
};
