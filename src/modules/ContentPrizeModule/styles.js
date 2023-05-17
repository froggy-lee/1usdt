import styled from 'styled-components'

export const Drop = styled.div`
  width: calc(100% - 376px);

  @media (max-width: 1279px) {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  padding: 50px 100px;

  @media (max-width: 700px) {
    padding: 30px;
  }
`
export const Top = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`
export const Center = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0 10px;
`
export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0;
`
export const Content = styled.div`
  font-size: 15px;
  font-weight: 300;

  a {
    text-decoration: underline !important;
    color: blue !important;
  }
`
