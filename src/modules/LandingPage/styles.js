import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url('images/background-landingpage.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 33rem;
  font-family: 'Poppins';

  @media (max-width: 500px) {
    padding-bottom: 67px;
  }
`
export const Section = styled.div`
  width: calc(100% - 376px);

  @media (max-width: 1279px) {
    width: 100%;
  }

  .list-number {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  .list-btn {
    display: flex;
    justify-content: center;
    margin-top: 7rem;
  }
`
export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 84px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  padding-top: 10rem;

  @media (max-width: 730px) {
    font-size: 50px;
    line-height: 50px;
  }

  @media (max-width: 500px) {
    padding-top: 39px;
    font-size: 24.8627px;
    line-height: 37px;
  }
`
export const Number = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  background: #ffffff;
  border-radius: 50px;
  padding: 1rem 1.6rem;
  margin-right: 4rem;
  &:last-child {
    background: #ff0000;
    color: #ffffff;
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 730px) {
    padding: 9px 12px;
    font-size: 19px;
    line-height: 29px;
    margin-right: 2rem;
  }
  @media (max-width: 500px) {
    padding: 7px 10px;
    font-size: 17.7591px;
    line-height: 27px;
    margin-right: 1rem;
  }
`
export const Time = styled.div`
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
  margin-top: 4rem;

  @media (max-width: 500px) {
    font-size: 12.4314px;
    line-height: 19px;
    margin-top: 26px;
  }
`
export const Button = styled.button`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  border: 1px solid #ffffff;
  border-radius: 100px;
  padding: 0.5rem;
  width: 25rem;
  background: ${props => (props.primery ? '#620001' : '#ffffff')};
  color: ${props => (props.primery ? '#ffffff' : '#ff0000')};
  margin-right: 5rem;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background: #ff0000;
    color: #ffffff;
  }
  @media (max-width: 730px) {
    font-size: 18px;
    line-height: 28px;
    padding: 14px 32px;
    margin-right: 3rem;
    width: 21rem;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 21px;
    padding: 11px 29px;
    width: 16.4rem;
  }

  @media (max-width: 375px) {
    width: 15rem;
    font-size: 12px;
    line-height: 18px;
    padding: 7px 20px;
  }
`
export const ImageUsdt = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    padding-top: 41px;
  }
`

export const Buy = styled.button`
  display: none;

  @media (max-width: 500px) {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;

    font-size: 29.9202px;
    line-height: 45px;
    color: #ffffff;
    background: #ff0000;
    display: flex;

    margin: auto;
    margin-top: 73px;
    border-radius: 99.734px;
    border: 1px solid #ff0000;
    padding: 5px 100px;
  }
`
