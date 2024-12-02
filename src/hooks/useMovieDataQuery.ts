import { useEffect } from 'react';
import { useApolloClient } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { useAppDispatch, useAppSelector } from '../redux/storeConfig';
import { fetchMovieData } from '../redux/movieDataSlice';

export const useMovieDataQuery = (
    queryDocument: DocumentNode,
    queryName: string,
    cacheKey: string
) => {
    const dispatch = useAppDispatch();
    const client = useApolloClient();

    const movieData = useAppSelector(state => state.movieData[cacheKey]);

    useEffect(() => {
        // Only fetch if no data exists or data is older than 5 minutes
        const shouldFetch = !movieData ||
            !movieData.data ||
            (Date.now() - (movieData.lastFetchTimestamp || 0) > 5 * 60 * 1000);

        if (shouldFetch) {
            dispatch(fetchMovieData({
                client,
                queryDocument,
                queryName,
                cacheKey
            }));
        }
    }, [dispatch, queryDocument, queryName, cacheKey, movieData, client]);

    return {
        data: movieData?.data,
        loading: movieData?.loading || false,
        error: movieData?.error
    };
};
