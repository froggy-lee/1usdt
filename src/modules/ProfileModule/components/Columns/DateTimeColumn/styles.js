import styled from 'styled-components'

export const DateTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`

export const Date = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  color: ${({ theme }) => theme.blackColor};

  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 20px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 15px;
  }
`

export const Time = styled.span`
  font-weight: 600;
  font-size: clamp(15px, 2vw, 20px);
  color: ${({ theme }) => theme.blackColor};
`
