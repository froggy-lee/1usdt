import styled from 'styled-components'

export const Wrapper = styled.section`
  overflow: hidden;
`

export const Content = styled.div`
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`

export const MainContent = styled.section`
  width: 100%;

  @media screen and (min-width: 1280px) {
    padding: 0rem 1rem;
  }
`
