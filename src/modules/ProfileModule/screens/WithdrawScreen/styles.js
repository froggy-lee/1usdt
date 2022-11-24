import styled from 'styled-components'
import { motion } from 'framer-motion'
import Input from '/src/components/Form/Input'

export const Wrapper = styled.section`
  position: relative;
`

export const WithdrawWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  border: 1px solid #cbcbcb;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }

  .qr__section {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    @media screen and (min-width: 765px) {
      flex-direction: row;
    }
  }
`

export const WithdrawWrapperSection = styled.div`
  padding: 2rem;
  position: relative;
  margin: 0 auto;
`

export const WithdrawNumberSection = styled(WithdrawWrapperSection)`
  width: fit-content;
  @media screen and (min-width: 1280px) {
    width: 75%;
  }
`

export const WithdrawNumberSectionTitle = styled.h1`
  font-weight: 700;
  font-size: clamp(16px, 5vw, 32px);
`

export const WithdrawNumberSectionDescription = styled.p`
  position: relative;
  font-weight: 400;
  font-size: clamp(10px, 5vw, 14px);
  color: #5b5b5b;

  .icon-T {
    position: absolute;
    z-index: 1;
    top: 3rem;
    left: 2rem;

    @media (max-width: 416px) {
      top: 5.1rem;
    }
  }

  .input-T {
    input {
      padding-left: 6rem;
    }
  }
`

export const WithdrawNumberSectionInputWrapper = styled.div``

export const WalletId = styled.strong`
  font-weight: 700;
  word-break: break-all;
`

export const ButtonCopy = styled(motion.button)`
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.whiteColor};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2.5rem;

  font-weight: 700;
`

export const WithdrawQrSection = styled(WithdrawWrapperSection)`
  margin: auto;
`

export const WithdrawQrSectionTitle = styled.h1`
  font-weight: 700;
  font-size: clamp(12px, 5vw, 20px);
  white-space: nowrap;
`

export const QrWrapper = styled.div``

export const QrScan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const WithdrawButtonSection = styled(WithdrawWrapperSection)`
  display: flex;

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`

export const WithdrawButtonSectionButton = styled(motion.button)`
  border: 1px solid ${({ theme }) => theme.mainColor};
  border-radius: 2.5rem;
  max-width: 236px;
  width: 100%;
  max-height: 50px;

  margin: 0.5rem;
  padding: 0.5rem 2rem;

  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.mainColor};

  @media screen and (min-width: 1280px) {
    min-width: 236px;
  }
`

export const WithdrawButton = styled(WithdrawButtonSectionButton)`
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.whiteColor};
`

export const ClearButton = styled(WithdrawButtonSectionButton)`
  background: ${({ theme }) => theme.whiteColor};
`

export const TableWrapper = styled.section`
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

// Input

export const InputWrapper = styled(Input)``
