import { FC } from 'react'
import { Container, GaleryTitle, Header, MainContainer } from './stylesHome'
import { Gallery } from '../../components/Gallery/Galllery'

interface imageObject {
  original: string
  title?: string
  popularity: number
  name?: string
}

interface HomeProps {
  imageSource: imageObject[]
  imageTvSource: imageObject[]
}

const Home: FC<HomeProps> = ({ imageSource, imageTvSource }) => {
  return (
    <MainContainer>
      <Header />
      <Container applyMargin>
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
