// graphql/fetch/movImages.ts
import { gql, useQuery } from "@apollo/client";
export const GET_IMAGES = (movieDetailsId: string | null) => gql`
  query{
   movieDetails(id: ${movieDetailsId}) {
    id
    original_title
    overview
    release_date
    runtime
    genres {
      id
      name
    }
  }
}
`;

export const useGetMovDetails = (movieDetailsId: string | null) => {
  const { data } = useQuery(GET_IMAGES(movieDetailsId));
  return data?.movieDetails;
};