import { useParams } from 'react-router-dom'
import useDataFetch from '../../hooks/useDataFetch'
import { MovieDetail, Recomended } from './types'
import { CONSTANTS } from '../../constants/constants'
import { imageObject } from '../Home/Home.types'
import { useEffect, useState } from 'react'

const useMovieDetailLogic = () => {
  const [dataDetail, setDataDetail] = useState<MovieDetail | null>(null)
  const [movieRecomendeds, setMovieRecomendeds] = useState<Recomended | null>(
    null
  )

  const { type, id } = useParams<{ type: string; id: string }>()

  //Main data fetch
  const detailUrl = `${CONSTANTS.DETAIL_URL}/${type}/${id}${CONSTANTS.QUERY_MOVIE_DETAIL}`
  const { data, error, loading } = useDataFetch<MovieDetail>(detailUrl)
  console.log(data, error, loading)

  useEffect(() => {
    if (data) setDataDetail(data)
  }, [data, error, loading])

  //Recomendations
  const { data: movieRecomended, error: errorRecomended } =
    useDataFetch<Recomended>(`
  ${CONSTANTS.API_URL}/${type}/${id}/${CONSTANTS.QUERY_RECOMENDATIONS}`)

  useEffect(() => {
    setMovieRecomendeds(movieRecomended)
  }, [movieRecomended, errorRecomended])

  //Const helpers declarations
  const isMovie = type === 'movie'
  const releaseDate = isMovie ? data?.release_date : data?.last_air_date
  const realeaseYear = releaseDate?.slice(0, 4) || ''
  const originalLanguage = data?.original_language.toUpperCase() || ''
  const seasons = data?.seasons
  const airDate = seasons?.[0]?.air_date || ''
  const genres = data?.genres || []
  const filmDuration = data ? toHoursAndMinutes(data?.runtime) : ''

  //Images for gallery
  const imageSource: imageObject[] = []
  movieRecomended?.results?.map(movie => {
    console.log(movie)
    imageSource.push({
      original: CONSTANTS.IMG_URL + movie.poster_path || movie.backdrop_path,
      title: movie.title,
      popularity: movie.popularity,
      id: movie.id
    })
  })

  function padToTwoDigits(num: number) {
    return num.toString().padStart(2, '0')
  }

  function toHoursAndMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}m`
  }

  return {
    airDate,
    dataDetail,
    error: error,
    filmDuration,
    genres,
    imageSource,
    isLoading: loading,
    isMovie,
    movieRecomended,
    movieRecomendeds,
    originalLanguage,
    realeaseYear,
    type
  }
}

export default useMovieDetailLogic
