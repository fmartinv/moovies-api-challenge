interface Collection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

interface Genre {
  id: number
  name: string
}

interface ProductionCompany {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

interface ProductionCountry {
  iso_3166_1: string
  name: string
}

interface TvSeason {
  air_date: string
}

export interface MovieDetail {
  backdrop_path: string
  belongs_to_collection: Collection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
  name: string
  first_air_date: string
  type: string
  seasons: TvSeason[]
  last_air_date: string
}

export interface Recomended {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Result {
  backdrop_path: undefined | string
  id: number
  original_title: string
  overview: string
  poster_path: undefined | string
  media_type: MediaType
  adult: boolean
  title: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export enum MediaType {
  Movie = 'movie'
}
