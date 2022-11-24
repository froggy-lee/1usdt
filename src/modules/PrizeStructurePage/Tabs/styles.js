import styled from 'styled-components'

export const Layout = styled.div`
  width: calc(100% - 376px);

  @media (max-width: 1279px) {
    width: 100%;
  }
`
export const Wrapper = styled.div`
  padding: 33px 54px 40px;
  background: url('/images/BackgroundWinners.png') no-repeat center 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 710px) {
    padding: 21px 12px 15px;
  }
  @media (max-width: 500px) {
    background: url('/images/BackgroundWinnersMobile.png') no-repeat center 100%;
    background-size: cover;
  }
`
export const TitleTop = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
`
export const WrapperTable = styled.div`
  width: 100%;
  overflow-x: auto;

  table {
    border-collapse: collapse;

    thead {
      text-align: center;
      border: 0.5px solid #d80000;

      tr {
        background: #d80000;

        th {
          border: 1px solid #d80000;
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          font-family: 'Poppins';

          font-style: normal;
          color: #fff;
          white-space: nowrap;

          @media (max-width: 1360px) {
            font-size: 17px;
          }

          @media (max-width: 500px) {
            font-size: 12px;
            line-height: 11px;
          }
          :nth-child(1) {
            border-right: 1px solid #a9a9a9;
          }
          :nth-child(2) {
            border-right: 1px solid #a9a9a9;
            text-align: center;
            width: 30%;
          }
          :nth-child(3) {
            text-align: center;
            border-right: 1px solid #a9a9a9;
          }
          :nth-child(4) {
            text-align: center;
            @media (max-width: 500px) {
              width: 15%;
            }
          }
        }
      }
    }
    tbody {
      tr {
        td {
          border: 1px solid #a9a9a9;

          @media (max-width: 710px) {
            padding: 0.5rem;
          }
          @media (max-width: 400px) {
            padding: 0.3rem;
          }
        }
        :nth-child(2) {
          td {
            :nth-child(2) {
              .box6 {
                display: none;
              }
            }
          }
        }
        :nth-child(3) {
          td {
            :nth-child(2) {
              .box5,
              .box6 {
                display: none;
              }
            }
          }
        }
        :nth-child(4) {
          td {
            :nth-child(2) {
              .box1 {
                background: #d80000;
                border: 0.598099px solid rgba(255, 255, 255, 0.4);
                box-shadow: inset 0px 0px 4.31906px rgba(0, 0, 0, 0.59);

                @media (max-width: 500px) {
                  box-shadow: none;
                }
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
export const TitleCenter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  padding: 10px 0 30px;
`
export const Note = styled.div`
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`
export const Box = styled.div`
  width: 19px;
  height: 19px;
  background: #d80000;
  border: 0.734509px solid rgba(255, 255, 255, 0.4);
  box-shadow: inset 0px 0px 5.30412px rgba(0, 0, 0, 0.59);
  border-radius: 50%;

  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
    box-shadow: none;
  }
`
export const TitleNote = styled.div`
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 15px;
  }
`

export const WrapperContent = styled.div``
export const Content = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 22px;
  }

  @media (max-width: 380px) {
    font-size: 12px;
  }
`
export const TitleBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`

export const Prize = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 500px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
  }
  @media (max-width: 380px) {
    :nth-child(4) {
      font-size: 10px;
    }
  }
`
export const NoteBot = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-left: 5px;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }

  @media (max-width: 380px) {
    font-size: 8px;
  }
`

export const Line = styled.div`
  border: 0.5px solid red;
  margin: 56px 0 45px;

  @media (max-width: 700px) {
    margin: 30px 0 20px;
  }
`
export const WrapperBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const TitleButton = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  span {
    font-weight: 600;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`
export const Button = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
  gap: 85px;
  margin-top: 13px;

  @media (max-width: 700px) {
    gap: 10px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
    line-height: 10px;
  }
`
export const Term = styled.div`
  background: #d80000;
  border: 1px solid #d80000;
  border-radius: 100px;
  padding: 12px 30px;
  cursor: pointer;
  color: #ffffff;

  :hover a {
    color: #ffffff;
  }
  @media (max-width: 700px) {
    padding: 12px 8px;
  }
`
export const Policy = styled.div`
  background: #d80000;
  border: 1px solid #d80000;
  border-radius: 100px;
  padding: 12px 89px;
  cursor: pointer;
  color: #ffffff;

  :hover a {
    color: #ffffff;
  }

  @media (max-width: 700px) {
    padding: 12px 65px;
  }

  @media (max-width: 400px) {
    padding: 10px 45px;
  }
`
