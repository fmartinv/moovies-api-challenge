import styled from 'styled-components'

export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: 100dvh;
`

export const ImgItem = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
export const Container = styled.div`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 25rem 1fr;
  gap: 1rem;
  width: 70%;
  justify-content: end;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 80%;
    justify-content: center;
    gap: 0;
  }
`

export const ImgWrapper = styled.div`
  width: 90%;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    width: 88%;
    margin: 0 auto;
  }
`
export const ArticleOverview = styled.article`
  width: 80%;
  padding-right: 2rem;
  color: whitesmoke;
  @media (max-width: 560px) {
    padding: 1rem;
    width: 100%;
  }
`

export const SectionArticle = styled.section`
  display: flex;
  align-items: start;
  flex-direction: column;
`
export const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  margin-bottom: 0.3rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
`

export const TitleDetail = styled.div`
  width: 100%;
`

export const TagBadge = styled.span`
  font-weight: 300;
  font-style: italic;
`

export const StatsContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  gap: 0.5rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`
export const Badge = styled.span`
  font-size: 1rem;
  font-weight: 300;
`
export const OverviewParagraph = styled.p`
  text-align: left;
`
export const SvgContainer = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 100;
  width: 2rem;
`
