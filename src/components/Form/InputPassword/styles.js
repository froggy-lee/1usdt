import styled from 'styled-components'

export const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;

  label,
  div {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.mainText};
  }

  .input-wrapper {
    position: relative;
    outline: none;

    input {
      width: 100%;
      height: 5.6rem;
      border: 1px solid ${({ theme }) => theme.mainText};
      border-radius: 25px;
      padding: 2rem 1.6rem;
      padding-right: 10rem;
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.titleColor};
      outline: none;
    }

    input.isvalid {
      outline: 1px solid red;
      border: 1px solid red !important;
      outline: none;

      &::placeholder {
        color: red;
        opacity: 1;
      }
    }

    div {
      position: absolute;
      right: 0;
      top: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      color: ${({ theme }) => theme.mainColor};
      border-radius: 8px;
      width: 82px;
      height: 100%;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    .btn-password {
      position: absolute;
      right: 0.6rem;
      top: 0.2rem;
      padding: 1.5rem;
      border: none;
      border-radius: 15px;
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .text-error {
    color: red;
    font-size: 14px;
    height: 1.5rem;
  }
`
