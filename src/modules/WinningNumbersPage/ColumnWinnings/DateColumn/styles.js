import styled from 'styled-components'

export const Date = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;

  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 20px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    line-height: 15px;
  }

  @media (max-width: 390px) {
    font-size: 12px;
  }
`
