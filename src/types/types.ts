
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
    headerTitle: string;
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

export interface ScrollButtonsProps {
    movieCardRef: React.MutableRefObject<HTMLDivElement | null>;

    isCardsDivHovered: boolean;
    setIsCardsDivHovered: React.Dispatch<React.SetStateAction<boolean>>;

    isLScrollBtnHovered: boolean;
    setIsLScrollBtnHovered: React.Dispatch<React.SetStateAction<boolean>>;

    isRScrollBtnHovered: boolean;
    setIsRScrollBtnHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TitleHeaderProps {
    headerTitle: string;
    exploreDivRef: React.MutableRefObject<HTMLSpanElement | null>;

    isHeaderDivHovered: boolean;
    setIsHeaderDivHovered: React.Dispatch<React.SetStateAction<boolean>>;

    isExploreDivHovered: boolean;
    setIsExploreDivHovered: React.Dispatch<React.SetStateAction<boolean>>;
}