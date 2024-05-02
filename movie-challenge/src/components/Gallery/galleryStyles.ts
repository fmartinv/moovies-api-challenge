import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
`
export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const ImgItem = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Title = styled.h5`
  color: blueviolet;
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0;
`
export const PopularityText = styled.p`
  color: #e4d6d6;
  font-size: 0.75rem;
  position: absolute;
  bottom: 0;
  left: 7%;
`
