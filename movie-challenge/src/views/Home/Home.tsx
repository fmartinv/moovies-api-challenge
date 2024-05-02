import { FC } from 'react'
import { Container, GaleryTitle, Header, MainContainer } from './stylesHome'
import { Gallery } from '../../components/Gallery/Gallery'
import { HomeProps } from './Home.types'

const Home: FC<HomeProps> = ({ imageSource, imageTvSource }) => {
  return (
    <MainContainer>
      <Header></Header>
      <Container>
        <GaleryTitle>Popular Movies</GaleryTitle>
        <Gallery data={imageSource} dataType='movie' />
      </Container>
      <Container>
        <GaleryTitle>Popular TV</GaleryTitle>
        <Gallery data={imageTvSource} dataType='tv' />
      </Container>
    </MainContainer>
  )
}

export default Home
