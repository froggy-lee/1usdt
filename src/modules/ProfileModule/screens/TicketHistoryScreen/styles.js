import styled from 'styled-components'
import Select from 'react-select'

export const Wrapper = styled.section`
  position: relative;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #f4f5f6;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.blackColor};
  padding-bottom: 1rem;
`

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  table {
    margin-top: 2rem;
    border: none;
    border-bottom: 1px solid #000;
    border-collapse: collapse;

    thead {
      text-align: center;

      tr {
        background: #d80000;

        th {
          font-weight: 600;
          font-size: clamp(10px, 2vw, 20px);
          line-height: 30px;
          font-family: 'Poppins';
          font-style: normal;
          color: #fff;

          @media (max-width: 700px) {
            line-height: 20px;
            font-size: 16px;
          }

          @media (max-width: 500px) {
            line-height: 15px;
            font-size: 12px;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          @media (max-width: 700px) {
            padding: 1.5rem;
          }
          @media (max-width: 400px) {
            padding: 0.7rem;
          }
        }
      }
    }
  }
`
export const Show = styled.div`
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
  display: flex;
  position: relative;
  margin-top: 2rem;
`

export const SelectInput = styled(Select)`
  font-weight: 400;
  font-size: clamp(15px, 2vw, 20px);
  width: 192px;
`
