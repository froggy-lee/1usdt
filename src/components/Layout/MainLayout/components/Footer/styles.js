import styled from 'styled-components'

export const FooterSection = styled.section`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.blackColor};
`

export const FooterItemSection = styled.div`
  position: relative;
  margin: auto;
  padding: 2rem;

  .slick-slide {
    padding: 0 1rem;
  }
`

export const FooterItem = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 0 1rem !important;

  min-width: 90px;
  background: #333333;
  border-radius: 5px;
`

export const FooterItemAvatar = styled.div`
  min-width: 50px;
  max-height: 50px;
`

export const FooterItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 720px) {
    padding: 0.5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`

export const FooterItemInfoName = styled.h1`
  font-weight: 600;
  font-size: 15px;
  color: ${({ theme }) => theme.yellowColor};

  @media (max-width: 720px) {
    font-size: 10px;
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`

export const FooterItemInfoStatus = styled.h2`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.whiteColor};
  white-space: nowrap;

  @media (max-width: 720px) {
    font-size: 10px;
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`
