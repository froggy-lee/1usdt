import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5rem;
  gap: 12px;

  @media (max-width: 730px) {
    padding-right: 3rem;
  }
  @media (max-width: 500px) {
    padding-right: 1.5rem;
  }
`
export const Numbers = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #000000;

  @media (max-width: 730px) {
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
  }

  @media (max-width: 500px) {
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
  }
`
export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid black;
  cursor: pointer;

  @media (max-width: 500px) {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid black;
  }
`
