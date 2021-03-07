
export type HistoricalData =  number[][];

export interface HistoricalPricesPoints  {
    market_caps: HistoricalData;
    prices: HistoricalData;
    total_volumes: HistoricalData;
}

interface IDescription {
    en: string;
} 

interface IImageUrls {
    thumb: string;
    small: string;
    large: string;
}
interface IPublicInterest {
    alexa_rank: number;
    bing_matches: any;
}

interface ICoinHeaderData {
    id: string;
    symbol: string;
    name: string;
    asset_platform_id?: string;
    platforms: object;
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories?: string[];
    public_notice: any;
    additional_notices?: any;
    description: IDescription;
    links: any;
    image: IImageUrls;
    country_origin?: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    market_cap_rank: number;
    coingecko_rank: number;
    coingecko_score: number;
    developer_score: number;
    community_score: number;
    liquidity_score: number;
    public_interest_score: number;
    public_interest_stats: IPublicInterest;
    status_updates: any;
    last_updated: string;
}

export interface ICoinHeaderResponse {
    response: ICoinHeaderData;
    error: string;
    loading: boolean;
}

export interface IResponseHistoricalData {
    response: HistoricalPricesPoints | null;
    error: string | null;
    loading: boolean; 
}
