import styled from 'styled-components'
import Select from 'react-select'

export const Drop = styled.div`
  width: calc(100% - 376px);

  @media (max-width: 1279px) {
    width: 100%;
  }
`
export const Wrapper = styled.div`
  padding-bottom: 40px;
  background: url('/images/BackgroundWinners.png') no-repeat center 100%;
  background-size: cover;

  @media (max-width: 500px) {
    background: url('/images/BackgroundWinnersMobile.png') no-repeat center 100%;
    background-size: cover;
    padding-bottom: 150px;
  }
`
export const ImageTop = styled.div``

export const Center = styled.div`
  display: flex;
  padding-top: 24px;
  padding-left: 54px;

  @media (max-width: 500px) {
    padding-top: 16px;
    padding-left: 15px;
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;

  font-size: 20px;
  line-height: 30px;
  padding-right: 24px;

  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 22px;
  }
`

export const SelectInputWrapper = styled.div`
  max-width: 200px;
  position: relative;
  margin: 2rem 0;
  width: 192px;
  border-radius: none;
`

export const SelectInput = styled(Select)`
  font-weight: 400;
  font-size: clamp(15px, 2vw, 20px);
`

export const TabContentWrapper = styled.div``

export const WrapperTable = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 54px;

  @media (max-width: 700px) {
    padding: 0 17px;
  }
  @media (max-width: 500px) {
    padding-top: -16px;
  }
  @media (max-width: 400px) {
    padding: 0 6px;
  }

  table {
    border: none;
    border-bottom: 1px solid #000;
    border-collapse: collapse;

    thead {
      text-align: center;

      tr {
        background: #d80000;
        th {
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          font-family: 'Poppins';
          font-style: normal;
          color: #fff;

          @media (max-width: 700px) {
            font-size: 15px;
            line-height: 20px;
          }

          @media (max-width: 500px) {
            font-size: 14px;
            line-height: 15px;
          }

          :nth-child(1) {
            width: 30%;
            border-bottom: none;
          }
          :nth-child(2) {
            width: 40%;
            padding-left: 8rem;
            border-bottom: none;

            @media (max-width: 500px) {
              padding-left: 2rem;
              text-align: center;
            }
          }
          :nth-child(3) {
            width: 30%;
            border-bottom: none;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          @media (max-width: 700px) {
            padding: 1rem;
          }

          @media (max-width: 500px) {
            padding: 15px 0.9rem;
          }
        }
      }
    }
  }
`
