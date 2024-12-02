import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApolloClient, DocumentNode } from '@apollo/client';

// Define the state type for movie data
interface MovieDataState {
    [key: string]: {
        data: object;
        loading: boolean;
        error: string | null;
        lastFetchTimestamp: number;
    }
}

const initialState: MovieDataState = {};

// Async thunk for fetching movie data
export const fetchMovieData = createAsyncThunk(
    'movieData/fetchMovieData',
    async ({
        client,
        queryDocument,
        queryName,
        cacheKey
    }: {
        client: ApolloClient<object>,
        queryDocument: DocumentNode,
        queryName: string,
        cacheKey: string
    }, { rejectWithValue }) => {
        try {
            const response = await client.query({
                query: queryDocument,
                fetchPolicy: 'network-only'
            });

            return {
                cacheKey,
                data: response.data[queryName],
                timestamp: Date.now()
            };
        } catch (error) {
            return rejectWithValue({
                cacheKey,
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
);

export const movieDataSlice = createSlice({
    name: 'movieData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieData.pending, (state, action) => {
                const cacheKey = action.meta.arg.cacheKey;
                state[cacheKey] = {
                    ...state[cacheKey],
                    loading: true,
                    error: null
                };
            })
            .addCase(fetchMovieData.fulfilled, (state, action) => {
                const { cacheKey, data, timestamp } = action.payload;
                state[cacheKey] = {
                    data,
                    loading: false,
                    error: null,
                    lastFetchTimestamp: timestamp
                };
            })
            .addCase(fetchMovieData.rejected, (state, action) => {
                const { cacheKey, error } = action.payload as { cacheKey: string, error: string };
                state[cacheKey] = {
                    ...state[cacheKey],
                    loading: false,
                    error
                };
            });
    }
});

export default movieDataSlice.reducer;