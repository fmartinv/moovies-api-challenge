import styled from 'styled-components'

interface ContainerProps {
  applyMargin?: boolean
}

export const Container = styled.div<ContainerProps>`
  max-width: 100%;
  min-height: 35vh;
  max-height: 40vh;
  display: block;
  margin-bottom: ${props => (props.applyMargin ? '20rem' : '0')};
  padding: 0 4rem;
  @media (max-width: 1024px) {
    margin-bottom: ${props => (props.applyMargin ? '18rem' : '0')};
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin: ${props => (props.applyMargin ? '0 0 11rem 0' : '0')};
  }
  @media (max-width: 320px) {
    margin: ${props => (props.applyMargin ? '0 0 8rem 0' : '0')};
  }
`
export const Header = styled.div`
  min-height: 8rem;
  width: 100%;
`
export const GaleryTitle = styled.h2`
  color: #e4d6d6;
  @media (max-width: 460px) {
    font-size: 1.3rem;
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
`
