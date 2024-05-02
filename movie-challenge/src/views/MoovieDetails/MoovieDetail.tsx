import { CONSTANTS } from '../../constants/constants'
import useLogic from './useLogic'
import * as S from './moovieDetailsStyles.ts'
import React from 'react'
import { SvgLink } from '../../components/SvgLink/SvgLink.tsx'

const MoovieDetail: React.FC = () => {
  const {
    airDate,
    filmDuration,
    genres,
    isLoading,
    moovieData,
    realeaseYear,
    isMovie,
    originalLanguage
  } = useLogic()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <S.SvgContainer>
        <SvgLink link={'/'} color={'whitesmoke'} />
      </S.SvgContainer>
      {moovieData && (
        <S.ParentContainer>
          <S.Container>
            <S.ImgWrapper>
              <S.ImgItem
                src={`${CONSTANTS.IMG_URL}${moovieData.poster_path}`}
                alt={moovieData.title}
              />
            </S.ImgWrapper>
            <S.SectionArticle>
              <S.ArticleOverview>
                <S.TitleDetail>
                  <a href={moovieData.homepage} target='_blank'>
                    <S.Title>
                      {isMovie ? moovieData.title : moovieData.name}
                      <S.TagBadge>({realeaseYear})</S.TagBadge>
                    </S.Title>
                  </a>
                  <S.StatsContainer>
                    <S.Badge>
                      {isMovie ? moovieData.release_date : airDate} (
                      {originalLanguage})
                    </S.Badge>
                    <S.Badge>
                      {isMovie ? filmDuration : moovieData.type}
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
                <S.OverviewParagraph>{moovieData.overview}</S.OverviewParagraph>
              </S.ArticleOverview>
            </S.SectionArticle>
          </S.Container>
        </S.ParentContainer>
      )}
    </div>
  )
}

export default MoovieDetail
