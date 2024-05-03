import { CONSTANTS } from './constants/constants'
import useDataFetch from './hooks/useDataFetch'
import { MovieDetail } from './views/MovieDetail/types'

interface MovieData {
  results: MovieDetail[]
}
type imageObject = {
  original: string | undefined
  title?: string
  popularity: number
  name?: string
  id?: number
}

const useAppLogic = () => {
  const { data, error, loading } = useDataFetch<MovieData>(
    `${CONSTANTS.API_URL}${CONSTANTS.QUERY_MOVIE_POPULAR}`
  )
  const {
    data: tvData,
    error: tvError,
    loading: tvLoading
  } = useDataFetch<MovieData>(
    `${CONSTANTS.API_URL}${CONSTANTS.QUERY_TV_POPULAR}`
  )

  const imageSource: imageObject[] = []
  data?.results?.map(movie => {
    imageSource.push({
      original: CONSTANTS.IMG_URL + movie.poster_path,
      title: movie.title,
      popularity: movie.popularity,
      id: movie.id
    })
  })
  const imageTvSource: imageObject[] = []
  tvData?.results?.map(movie => {
    imageTvSource.push({
      original: CONSTANTS.IMG_URL + movie.poster_path,
      title: movie.name,
      popularity: movie.popularity,
      id: movie.id
    })
  })

  return {
    data,
    error,
    loading,
    imageSource,
    tvData,
    tvError,
    tvLoading,
    imageTvSource
  }
}

export default useAppLogic
