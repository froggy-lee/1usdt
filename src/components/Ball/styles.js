import styled from 'styled-components'

export const Ball = styled.div`
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;

  font-weight: 600;
  font-size: 14px;

  &:last-child {
    background: ${({ theme }) => theme.mainColor};
    margin-right: 0;
    color: ${({ theme }) => theme.whiteColor};
  }
`
