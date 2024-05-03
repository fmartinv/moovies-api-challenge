import useMovieDetailLogic from './useMovieDetailLogic.ts'
import * as S from './movieDetailsStyles.ts'
import React from 'react'
import { SvgLink } from '../../components/SvgLink/SvgLink.tsx'
import MovieItem from '../../components/MovieItem/MoovieItem.tsx'
import { Gallery } from '../../components/Gallery/Gallery.tsx'

const MoovieDetail: React.FC = () => {
  const {
    airDate,
    dataDetail,
    filmDuration,
    genres,
    imageSource,
    isLoading,
    isMovie,
    movieRecomendeds,
    originalLanguage,
    realeaseYear,
    type
  } = useMovieDetailLogic()

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <div>
        <S.SvgContainer>
          <SvgLink link={'/'} color={'whitesmoke'} />
        </S.SvgContainer>
        {dataDetail && (
          <MovieItem
            movieItemProps={dataDetail}
            isMovie={isMovie}
            realeaseYear={realeaseYear}
            originalLanguage={originalLanguage}
            genres={genres}
            filmDuration={filmDuration}
            airDate={airDate}
          />
        )}
        {movieRecomendeds && (
          <S.GalleryContainer>
            <Gallery data={imageSource} dataType={`${type}`} />
          </S.GalleryContainer>
        )}
      </div>
    </>
  )
}

export default MoovieDetail
