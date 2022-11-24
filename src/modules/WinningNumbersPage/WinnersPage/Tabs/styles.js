import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 33px 54px 454px 54px;
  height: 100%;
  background: url('/images/BackgroundWinners.png') no-repeat center;
  background-size: cover;
  width: calc(100% - 376px);

  @media (max-width: 1279px) {
    width: 100%;
  }

  @media (max-width: 730px) {
    padding: 21px 21px 330px 21px;
  }

  @media (max-width: 500px) {
    background: url('/images/BackgroundWinnersMobile.png') no-repeat center 100%;
    background-size: cover;
  }
`
export const WrapperTop = styled.div``
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Title = styled.div`
  display: flex;
  align-items: center;

  .arrow-left {
    cursor: pointer;
    display: none;

    @media (max-width: 730px) {
      display: block;
      padding-right: 15px;
      height: 20px;
    }

    @media (max-width: 500px) {
      margin-right: 10px;
      margin-bottom: 4px;
      width: 28px;
      padding: 5px;
    }
  }
  .title-all {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #000000;

    @media (max-width: 730px) {
      font-size: 20px;
      line-height: 22px;
    }
    @media (max-width: 500px) {
      font-size: 15px;
    }
  }
`
export const Date = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;

  @media (max-width: 730px) {
    font-size: 20px;
    line-height: 22px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`
export const TabContentWrapper = styled.div``
export const WrapperTable = styled.div`
  width: 100%;
  overflow-x: auto;
  table {
    border: none;
    border-bottom: 1px solid #000;
    border-collapse: collapse;

    thead {
      text-align: center;

      tr {
        background: #d80000;
        @media (max-width: 500px) {
          padding: 5px 0;
        }
        th {
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          font-family: 'Poppins';
          font-style: normal;
          color: #fff;

          @media (max-width: 730px) {
            font-size: 15px;
            line-height: 20px;
            padding: 10px;
          }

          @media (max-width: 500px) {
            font-size: 10px;
            line-height: 15px;
            padding: 5px;
            width: 20%;
          }
          :nth-child(1) {
            border-bottom: none;
          }
          :nth-child(2) {
            text-align: center;
            border-bottom: none;
          }
          :nth-child(3) {
            border-bottom: none;
            text-align: center;
          }
          :nth-child(4) {
            text-align: center;
            border-bottom: none;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          @media (max-width: 730px) {
            padding: 10px;
          }
          @media (max-width: 500px) {
            padding: 20px 6px;
          }
        }
        :nth-child(2) {
          td {
            :nth-child(1) {
              .box6 {
                display: none;
              }
            }
          }
        }
        :nth-child(3) {
          td {
            :nth-child(1) {
              .box5,
              .box6 {
                display: none;
              }
            }
          }
        }
        :nth-child(4) {
          td {
            :nth-child(1) {
              .box1 {
                background: #ff0000;
                border: 0.598099px solid rgba(255, 255, 255, 0.4);
                box-shadow: inset 0px 0px 4.31906px rgba(0, 0, 0, 0.59);
              }
              .box2,
              .box3,
              .box4,
              .box5,
              .box6 {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`
