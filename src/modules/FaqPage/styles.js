export const WrapperFaq = styled.div`
  padding: 64px 54px 240px 54px;

  @media (max-width: 700px) {
    padding: 16px 20px 290px 23px;
  }
`
export const Faq = styled.div``
export const Top = styled.div`
  display: flex;
  padding-top: 32px;
`
export const ImageArrow = styled.div`
  padding-right: 14px;
  display: flex;
  transform: rotate(0deg);
  transition: 0.4s ease;
  cursor: pointer;

  &.active {
    padding-right: 0;
    padding-left: 14px;
    display: flex;
    align-items: center;
    transform: rotate(180deg);
    transition: 0s ease;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`
export const TitleTop = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 15px;
    line-height: 22px;
  }
`
export const TitleBottom = styled.div`
  padding-top: 14px;
  color: #5c5c5c;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  transition: 0.4s ease;

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 22px;
  }
`

import styled from 'styled-components'

export const Drop = styled.div`
  width: calc(100% - 376px);
  @media (max-width: 1279px) {
    width: 100%;
  }
`
export const Wrapper = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  background: url('/images/BackgroundWinners.png') no-repeat 100%;
  background-size: cover;

  @media (max-width: 500px) {
    background: url('/images/BackgroundWinnersMobile.png') no-repeat center 100%;
    background-size: contain;
  }
`
export const ImageFaq = styled.div``

export const WrapperMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px 54px 240px 34px;

  @media (max-width: 700px) {
    padding: 16px 20px 290px 10px;
  }

  .accordion {
    border-radius: 5px;
    margin-bottom: 1.3rem;

    &-title {
      display: flex;
      align-items: flex-start;
      padding: 1.6rem 2rem 0 0;
      border-radius: 0.5rem;

      font-weight: 500;
      height: 5.7rem;
      display: flex;
      align-items: center;

      @media (max-width: 500px) {
        padding: 1.6rem 1.2rem 0 0;
      }

      span {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        cursor: pointer;
        width: 100%;

        @media (max-width: 500px) {
          font-size: 15px;
          line-height: 22px;
          width: 100%;
        }
      }
    }

    &-icon {
      padding-right: 14px;
      display: flex;
      align-items: flex-start;
      transform: rotate(0deg);
      transition: 0.4s ease;
      cursor: pointer;

      &::before {
        content: '';
        padding-right: 14px !important;
        display: flex;
        align-items: center;
        transform: rotate(180deg);
        transition: 0.4s ease;
        cursor: pointer;
      }
    }

    &-content {
      font-size: 1.2rem;
      line-height: 1.7rem;
      max-height: 0;
      font-weight: 400;
      overflow: hidden;
      transition: 0.2s ease-in-out;
      padding: 0rem 1.8rem 0 1.8rem;
      letter-spacing: 0.2px;
    }
  }
  .active {
    & .accordion-title {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    & .accordion-content {
      padding: 1.6rem 1.8rem 0.6rem 1.8rem;
      max-height: 40em;

      padding-top: 14px;
      color: #5c5c5c;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      transition: 0.4s ease;

      @media (max-width: 500px) {
        font-size: 14px;
        line-height: 22px;
        padding: 1.6rem 1.8rem 0.6rem 1.2rem;
      }
    }
    & .accordion-icon {
      padding-right: 14px;
      display: flex;
      align-items: center;
      transform: rotate(180deg);
      transition: 0.4s ease;
      cursor: pointer;
    }
  }
`
