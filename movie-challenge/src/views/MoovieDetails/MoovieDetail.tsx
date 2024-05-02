import useLogic from './useLogic'
import * as S from './moovieDetailsStyles.ts'
import React from 'react'
import { SvgLink } from '../../components/SvgLink/SvgLink.tsx'
import MovieItem from '../../components/MovieItem/MoovieItem.tsx'
import { Gallery } from '../../components/Gallery/Gallery.tsx'

const MoovieDetail: React.FC = () => {
  const {
    airDate,
    filmDuration,
    genres,
    isLoading,
    moovieData,
    realeaseYear,
    isMovie,
    originalLanguage,

    imageSource
  } = useLogic()

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <div>
        <S.SvgContainer>
          <SvgLink link={'/'} color={'whitesmoke'} />
        </S.SvgContainer>
        {moovieData && (
          <MovieItem
            movieItemProps={moovieData}
            isMovie={isMovie}
            realeaseYear={realeaseYear}
            originalLanguage={originalLanguage}
            genres={genres}
            filmDuration={filmDuration}
            airDate={airDate}
          />
        )}
      </div>
      <S.GalleryContainer>
        <Gallery data={imageSource} dataType='movie' />
      </S.GalleryContainer>
    </>
  )
}

export default MoovieDetail
