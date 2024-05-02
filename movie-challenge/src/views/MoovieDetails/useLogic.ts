import { useParams } from 'react-router-dom'
import useDataFetch from '../../hooks/useDataFetch'
import { MovieDetail } from './types'
import { CONSTANTS } from '../../constants/constants'
import { imageObject } from '../Home/Home.types'

export interface Recomended {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Result {
  backdrop_path: null | string
  id: number
  original_title: string
  overview: string
  poster_path: null | string
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

const useLogic = () => {
  const { type, id } = useParams<{ type: string; id: string }>()
  console.log(type, id)

  const detailUrl = `${CONSTANTS.DETAIL_URL}/${type}/${id}${CONSTANTS.QUERY_MOVIE_DETAIL}`

  const { data, error, loading } = useDataFetch<MovieDetail>(detailUrl)
  const isMovie = type === 'movie'
  const { data: dataAlt } = useDataFetch<Recomended>(`
https://api.themoviedb.org/3/${type}/${id}/recommendations?language=en-US&page=1`)
  console.log(dataAlt)
  const imageSource: imageObject[] = []
  dataAlt?.results?.map(movie => {
    imageSource.push({
      original: CONSTANTS.IMG_URL + movie.poster_path,
      title: movie.title,
      popularity: movie.popularity
    })
  })

  const releaseDate = isMovie ? data?.release_date : data?.last_air_date
  const realeaseYear = releaseDate?.slice(0, 4) || ''
  const originalLanguage = data?.original_language.toUpperCase() || ''

  const seasons = data?.seasons

  const airDate = seasons?.[0]?.air_date || ''

  function toHoursAndMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}m`
  }
  function padToTwoDigits(num: number) {
    return num.toString().padStart(2, '0')
  }

  const filmDuration = data ? toHoursAndMinutes(data?.runtime) : ''

  const genres = data?.genres || []

  return {
    airDate,
    error: error,
    filmDuration,
    genres,
    isLoading: loading,
    moovieData: data,
    realeaseYear,
    isMovie,
    originalLanguage,
    dataAlt,
    imageSource
  }
}

export default useLogic
