import React, { ReactNode } from 'react'
import { Container, Content, ScrollContainer } from './styles'
interface LayoutProps {
  children: ReactNode
}

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
