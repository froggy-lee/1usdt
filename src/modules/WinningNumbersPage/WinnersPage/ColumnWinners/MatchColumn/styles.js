import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  gap: 6px;

  @media (max-width: 730px) {
    gap: 3px;
  }
`
export const Match = styled.div`
  width: 27.05px;
  height: 27.05px;
  border-radius: 50%;

  background: #ffffff;
  border: 0.969352px solid rgba(0, 0, 0, 0.4);
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.59);

  @media (max-width: 730px) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 500px) {
    width: 16px;
    height: 16px;
  }
`
