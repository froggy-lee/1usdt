import styled from 'styled-components'

export const Amount = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000;
  text-align: center;

  @media (max-width: 830px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 14px;
  }
`
