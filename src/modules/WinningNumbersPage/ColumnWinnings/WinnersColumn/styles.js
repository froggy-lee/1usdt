import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 400px) {
    justify-content: space-around;
  }
`
export const Winners = styled.div`
  padding-left: 4rem;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  cursor: default;

  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 20px;
    padding-left: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 15px;
    font-weight: 600;
    padding-left: 1.5rem;
  }

  @media (max-width: 390px) {
    font-size: 12px;
  }
`
export const Image = styled.div`
  color: #000000;
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 10px;
  }
`
