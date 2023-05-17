import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding: 0 0.5rem;
  .btn-confirm {
    margin-top: 3rem;
  }
  .code {
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
      Input {
        width: 197px;
      }
    }
    @media (max-width: 370px) {
      Input {
        width: 157px;
      }
    }
    button {
      margin-left: 0.5rem;
    }
    @media (max-width: 400px) {
      display: grid;
      grid-template-columns: 70% 35%;
    }
  }
`
export const Des = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 2rem;
  margin-top: -1rem;
  span {
    text-decoration: underline;
  }
  @media (max-width: 510px) {
    font-size: 11px;
    line-height: 16px;
  }
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d80000;
  width: 8rem;
  height: 5.5rem;
  border-radius: 10px;
  color: #ffffff;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  &:disabled {
    background-color: #9f9f9f;
  }
`
