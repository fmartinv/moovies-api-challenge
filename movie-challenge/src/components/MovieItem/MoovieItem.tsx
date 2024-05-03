import React from 'react'
import * as S from './movieItem.styles'
import { MovieDetail } from '../../views/MovieDetail/types'
import { CONSTANTS } from '../../constants/constants'

interface Genre {
  id: number
  name: string
}
interface movieItemProps extends Partial<MovieDetail> {
  movieItemProps: MovieDetail
  isMovie: boolean
  realeaseYear: string
  originalLanguage: string
  genres: Genre[]
  filmDuration: string
  airDate: string
}
const MovieItem = ({
  airDate,
  movieItemProps,
  isMovie,
  realeaseYear,
  originalLanguage,
  genres,
  filmDuration
}: movieItemProps): JSX.Element => {
  return (
    <S.ParentContainer>
      <S.Container>
        <S.ImgWrapper>
          <S.ImgItem
            src={`${CONSTANTS.IMG_URL}${movieItemProps.poster_path}`}
            alt={movieItemProps.title}
          />
        </S.ImgWrapper>
        <S.SectionArticle>
          <S.ArticleOverview>
            <S.TitleDetail>
              <a href={movieItemProps.homepage} target='_blank'>
                <S.Title>
                  {isMovie ? movieItemProps.title : movieItemProps.name}
                  <S.TagBadge>({realeaseYear})</S.TagBadge>
                </S.Title>
              </a>
              <S.StatsContainer>
                <S.Badge>
                  {isMovie ? movieItemProps.release_date : airDate} (
                  {originalLanguage})
                </S.Badge>
                <S.Badge>
                  {isMovie ? filmDuration : movieItemProps.type}
                </S.Badge>
                {genres?.map((gen, index) => (
                  <React.Fragment key={gen.id}>
                    <S.Badge>{gen.name}</S.Badge>
                    {index < genres.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </S.StatsContainer>
            </S.TitleDetail>
            <S.SubTitle>Summary</S.SubTitle>
            <S.OverviewParagraph>{movieItemProps.overview}</S.OverviewParagraph>
          </S.ArticleOverview>
        </S.SectionArticle>
      </S.Container>
    </S.ParentContainer>
  )
}

export default MovieItem
