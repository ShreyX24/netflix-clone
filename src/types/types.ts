
export interface Movie {
    id: string;
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    popularity: number;
    vote_average: number;
    vote_count: number;
    poster_path: string;
    backdrop_path: string;
    original_language: string;
    adult: boolean;
    video: boolean;
    genre_ids: [number];
}

export interface MovieResponse {
    page: number;
    results: [Movie];
    total_pages: number;
    total_results: number;
}

export interface PopularMovie {
    data: MovieResponse | undefined;
    // loading: boolean;
    // error: ApolloError | undefined;
}

export interface BgImageProps {
    img: string
}
export interface FeaturedAboutProps {
    title_name?: string;
    title_desc?: string;
}