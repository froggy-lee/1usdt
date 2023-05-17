import styled from 'styled-components'

export const Numbers = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 570px) {
    gap: 7px;
  } ;
`

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.28px;
  height: 34.28px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  color: #000;
  border: 1.22844px solid rgba(0, 0, 0, 0.4);
  box-shadow: inset 0px 0px 8.87097px rgba(0, 0, 0, 0.59);

  border-radius: 50%;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  :nth-child(6) {
    background: red;
    border: 0.81009px solid rgba(255, 255, 255, 0.4);
    color: #fff;

    @media (max-width: 500px) {
      box-shadow: none;
    }
  }

  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 20px;
    width: 28px;
    height: 28px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 15px;
    width: 20px;
    height: 20px;
  }
`
