import styled, { keyframes } from 'styled-components'

const Modalup = keyframes`
  from {
    transform:translateY(-200px);
   
  }

  to {
    transform:translateY(0);
  }

`
export const layout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(5, 5, 5, 0.4);
  z-index: 12;
`

export const WrapperTable = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  width: 564px;
  height: 489px;
  overflow: scroll;
  overflow-x: hidden;

  z-index: 99;
  border-radius: 5px;
  animation: ${Modalup} ease 0.6s;

  ::-webkit-scrollbar {
    width: 5px;
  }

  @media (max-width: 650px) {
    width: 350px;
    height: 400px;
  }

  @media (max-width: 500px) {
    width: 298px;
    height: 340px;
  }

  table {
    border-collapse: collapse;
    margin-top: 0;

    thead {
      text-align: center;

      tr {
        background: rgba(216, 0, 0, 1);
        border: 1px solid rgba(216, 0, 0, 1);
        white-space: nowrap;

        th {
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          font-family: 'Poppins';
          font-style: normal;
          color: #fff;

          @media (max-width: 650px) {
            font-size: 12px;
            line-height: 15px;
            padding: 6px 8px;
          }
          :nth-child(2) {
            text-align: center;
          }
          :nth-child(4) {
            text-align: center;
          }
        }
      }
    }
    tbody {
      background-color: #fff;
      tr {
        td {
          @media (max-width: 650px) {
            padding: 14px 7px;
          }
        }
      }
    }
  }
`
