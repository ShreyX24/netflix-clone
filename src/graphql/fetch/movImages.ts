// graphql/fetch/movImages.ts
import { gql, useQuery } from "@apollo/client";

export const GET_IMAGES = (movieFetchImagesId: string | null) => gql`
  query{
  movieFetchImages(id: ${movieFetchImagesId}) {
    backdrops {
      aspect_ratio
      file_path
      iso_639_1
    }
  }
}
`;

export const useGetImages = (movieFetchImagesId: string | null) => {
  const { data } = useQuery(GET_IMAGES(movieFetchImagesId));
  return data?.movieFetchImages;
};