import styled from 'styled-components'

export const Wrapper = styled.section`
  overflow: hidden;
`

export const Content = styled.div`
  position: relative;
`

export const FooterWrapper = styled.section``

export const Right = styled.div``

export const MainContent = styled.div`
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 725px) {
    flex-direction: column-reverse;
  }
`
