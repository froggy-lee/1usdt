import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding: 0 0.5rem;
  .modal-title {
    margin-left: 10px;
  }
  Input {
    outline: none;
  }
  .btn-register {
    margin-top: 3rem;
  }
  .or {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 300;
    font-size: 21.6667px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 0.265em;
    color: #7d7d7d;
    margin-top: 2rem;
    span {
      width: 13rem;
      height: 0.5px;
      background-color: #7d7d7d;
      @media (max-width: 450px) {
        width: 10rem;
      }
    }
  }
  .button-social {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
  }
`
export const ButtonSocial = styled.button`
  width: 16.5rem;
  border-radius: 1000px;
  border: 0.417895px solid #f20000;
  box-shadow: 0px 1.67158px 6.68632px rgba(0, 0, 0, 0.14);
  background: #ffffff;
  padding: 1rem;
  @media (max-width: 470px) {
    width: 14rem;
  }
`
export const Bottom = styled.div`
  font-weight: 500;
  font-size: 15.0442px;
  line-height: 23px;
  text-align: center;
  color: ${props => (props.primary ? '#131b2f' : '#b9b9b9')};
  margin-top: 2rem;
  a {
    padding: 0 5px;
    color: #bc0000;
    &:hover {
      cursor: pointer;
    }
  }
`
