import { useParams } from 'react-router-dom'
import useDataFetch from '../../hooks/useDataFetch'
import { MovieDetail } from './types'
import { CONSTANTS } from '../../constants/constants'

const useLogic = () => {
  const { type, id } = useParams<{ type: string; id: string }>()

  const detailUrl = `${CONSTANTS.DETAIL_URL}/${type}/${id}${CONSTANTS.QUERY_MOVIE_DETAIL}`

  const { data, error, loading } = useDataFetch<MovieDetail>(detailUrl)
  const isMovie = type === 'movie'

  const releaseDate = isMovie ? data?.release_date : data?.last_air_date
  const realeaseYear = releaseDate?.slice(0, 4)
  const originalLanguage = data?.original_language.toUpperCase()
  console.log(originalLanguage)

  const seasons = data?.seasons

  const airDate = seasons?.[0]?.air_date

  function toHoursAndMinutes(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}m`
  }
  function padToTwoDigits(num: number) {
    return num.toString().padStart(2, '0')
  }

  const filmDuration = data ? toHoursAndMinutes(data?.runtime) : null

  const genres = data?.genres

  return {
    airDate,
    error: error,
    filmDuration,
    genres,
    isLoading: loading,
    moovieData: data,
    realeaseYear,
    isMovie,
    originalLanguage
  }
}

export default useLogic
