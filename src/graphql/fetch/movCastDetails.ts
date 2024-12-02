// graphql/fetch/castDetails.ts
import { gql, useQuery } from "@apollo/client";
export const GET_CAST_DETAILS = (movieId: string | null) => gql`
  query  {
  movieCastDetails(id: ${movieId}) {
    id
    cast {
      cast_id
      original_name
      known_for_department
    }
  }
}
`;

export const useGetMovCastDetails = (movieId: string | null) => {
    const { data } = useQuery(GET_CAST_DETAILS(movieId));
    return data?.movieCastDetails;
};