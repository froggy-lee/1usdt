import styled from 'styled-components'

export const Amount = styled.div`
  font-weight: 400;
  font-size: clamp(15px, 2vw, 20px);
  color: ${({ theme }) => theme.mainColor};
  white-space: nowrap;
`
