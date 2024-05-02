import React from 'react'
import { Container, Content, ScrollContainer } from './styles'
import { LayoutProps } from './mainlayout.types'

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Content>
        <ScrollContainer>{children}</ScrollContainer>
      </Content>
    </Container>
  )
}

export default MainLayout
