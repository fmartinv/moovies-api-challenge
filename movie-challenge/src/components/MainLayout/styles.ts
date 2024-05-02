import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  min-width: 320px;
  min-height: 100vh;
  min-height: 100dvh;
  grid-template-rows: 1fr;
`

export const Content = styled.main`
  height: 100%;
  position: relative;
  width: 100%;
`
export const ScrollContainer = styled.div`
  max-height: 80rem;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  place-content: center;
  @media screen and (max-width: 768px) {
    scroll-behavior: smooth;
    scrollbar-width: none;
  }
`
