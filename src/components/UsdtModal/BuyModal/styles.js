import styled from 'styled-components'

export const Wrapper = styled.div`
  .btn-add-set {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
  .list-set-number {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 0.5px solid #9f9f9f;
      position: relative;
      &:last-child {
        border-bottom: 0.5px solid #9f9f9f;
      }
      &:first-child {
        border-top: none;
      }
      div {
        &:nth-child(7) {
          background: #ff0000;
          color: #ffffff;
        }
      }
    }
  }
  .choose-number {
    display: flex;
    justify-content: center;
    border-top: 0.5px solid #9f9f9f;
    border-bottom: 0.5px solid #9f9f9f;
    margin-top: 0.5rem;
    position: relative;
    button {
      margin-top: 0.5rem;
      @media (max-width: 410px) {
        margin-top: 0.3rem;
      }
    }
  }
  .btn-buy {
    display: flex;
    justify-content: center;
  }
`

export const ListNumber = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Number = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  border: 0.974371px solid rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  @media (max-width: 410px) {
    font-size: 15px;
    width: 3rem;
    height: 3rem;
    margin: 0.3rem;
  }
  &:hover {
    cursor: pointer;
  }
  &.active {
    background: #ff0000;
    color: #ffffff;
  }
  &.set-number {
    &:nth-child(7) {
      background: #ff0000;
      color: #ffffff;
    }
  }
`
export const ButtonAddSetNumber = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  text-decoration-line: underline;
  color: #ff0000;
  background-color: #ffffff;
  border: none;
`
export const ButtonClose = styled.button`
  border-radius: 50px;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-image: url('images/icons/x-circle.png');
  background-size: cover;
  margin-right: 2rem;
  position: absolute;
  left: 4rem;
  @media (max-width: 510px) {
    left: 0;
  }
  @media (max-width: 410px) {
    font-size: 15px;
    width: 3rem;
    height: 3rem;
  }
`
export const ButtonRandom = styled.button`
  border-radius: 50px;
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  background-image: url('images/icons/random-button.png');
  background-size: cover;
  position: absolute;
  right: 4rem;
  @media (max-width: 510px) {
    right: 0;
  }
  @media (max-width: 410px) {
    font-size: 15px;
    width: 3rem;
    height: 3rem;
  }
`
export const TemporaryCash = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  border-bottom: 0.5px solid #9f9f9f;
  span {
    font-weight: 700;
  }
  padding-left: 4rem;
  @media (max-width: 510px) {
    padding-left: 0rem;
  }
`
export const ButtonBuy = styled.button`
  background: #d80000;
  border-radius: 100px;
  font-weight: 600;
  font-size: 20px;
  line-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border: none;
  width: 12rem;
  margin-top: 1.5rem;
`
