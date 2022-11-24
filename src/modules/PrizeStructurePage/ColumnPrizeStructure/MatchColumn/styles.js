import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  gap: 6px;
  padding: 0 7rem;

  @media (max-width: 1000px) {
    gap: 3px;
    padding: 0 2rem;
  }
  @media (max-width: 710px) {
    padding: 0px;
  }
  @media (max-width: 500px) {
    gap: 1.7px;
    padding-left: 6px;
  }

  @media (max-width: 450px) {
    padding-left: 2px;
  }
`
export const Match = styled.div`
  width: 27.05px;
  height: 27.05px;
  border-radius: 50%;

  background: #ffffff;
  border: 0.969352px solid rgba(0, 0, 0, 0.4);
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.59);

  @media (max-width: 830px) {
    width: 23px;
    height: 23px;
  }

  @media (max-width: 710px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`
