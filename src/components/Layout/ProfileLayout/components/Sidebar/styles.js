import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 100%;
  margin: auto;
  height: auto;

  @media screen and (min-width: 1280px) {
    margin: 0;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    height: 850px;
  }

  @media screen and (min-width: 575px) {
    max-width: 355px;
  }

  .sidebar__item--wrapper {
    position: relative;
    padding: 0;
    @media screen and (min-width: 1280px) {
      padding: 2rem;
    }
  }

  .logout__wrapper {
    display: flex;
    margin-top: auto;
  }
`

export const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 62px;
  background: radial-gradient(50% 246.91% at 50% 50%, #ed1b1b 0%, #990000 100%);
  border-radius: 8px;
  padding: 1rem 2rem;

  @media screen and (min-width: 1280px) {
    min-height: 108px;
    flex-direction: column;
  }
`

export const TotalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    padding: 0.5rem 0;
  }
`

export const AmountText = styled.h1`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.whiteColor};
  margin: 0;
`

export const TotalTitle = styled(AmountText)`
  margin-right: 0.5rem;
`

export const TotalTitleAmount = styled(AmountText)`
  font-weight: 700;
`

export const TotalNumberWrapper = styled.div``

export const TotalNumber = styled(AmountText)`
  font-weight: 700;
  font-size: 32px;
`
export const MenuWrapper = styled.div`
  position: relative;
  padding: 1rem 0;
`

export const Menu = styled.nav`
  position: relative;
`

export const MenuItemWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`

export const MenuItem = styled.li`
  position: relative;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.mainColor};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &.active {
    background: ${({ theme }) => theme.mainColor};

    .icon {
      svg {
        path {
          stroke: ${({ theme }) => theme.whiteColor};

          @media screen and (min-width: 1280px) {
            stroke: ${({ theme }) => theme.mainColor};
          }
        }
      }
    }

    @media screen and (min-width: 1280px) {
      background: rgba(216, 0, 0, 0.2);
    }
  }

  &:hover {
    background: ${({ theme }) => theme.mainColor};

    @media screen and (min-width: 1280px) {
      background: rgba(216, 0, 0, 0.2);
    }

    .icon {
      svg {
        path {
          stroke: ${({ theme }) => theme.whiteColor};

          @media screen and (min-width: 1280px) {
            stroke: ${({ theme }) => theme.mainColor};
          }
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    border: none;
    padding: 1rem 2rem;
  }

  @media (max-width: 1280px) {
    border-radius: 5px;
  }
`

export const MenuLink = styled.a`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.mainColor};
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    margin-left: 1rem;
  }
`

export const MenuIcon = styled.span``

export const UserInfoWrapper = styled.section`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 102px;
  height: 102px;
  border-radius: 50%;
`

export const UserName = styled.h1`
  font-weight: 700;
  font-size: 24px;
`

export const ButtonLogout = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.mainColor};
  border-radius: 2.5rem;
  background: transparent;

  color: ${({ theme }) => theme.mainColor};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;

  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
  }
`
