import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Header = styled.section`
  position: relative;
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  background: ${({ theme }) => theme.blackColor};
  border-bottom: 1px solid ${({ theme }) => theme.mainColor};
`

export const Menu = styled.div`
  .backdrop {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    position: fixed;
    z-index: -1;
    background: rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  bottom: 0;

  max-width: 1440px;
  width: 279px;
  height: 100%;
  margin: 0 auto;

  display: ${props => (props.active ? 'flex' : 'none')};
  align-items: center;
  flex-direction: column;

  background: rgba(0, 0, 0, 1);

  @media screen and (min-width: 1280px) {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Logo = styled.div`
  position: position;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  cursor: pointer;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
  }
`

export const NavItem = styled.li`
  position: relative;
  font-weight: 600;
  font-size: 18px;
  padding: 2rem;

  .arrow {
    svg {
      transform: rotate(180deg);
    }
  }

  @media screen and (min-width: 1280px) {
    padding-right: 4rem;
  }
`

export const NavLink = styled.a`
  position: relative;
  cursor: pointer;

  @media (max-width: 1280px) {
    :before {
      content: '';
      position: absolute;
      left: -15px;
      top: 12px;
      transform: translateY(-50%);

      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${({ theme }) => theme.whiteColor};
    }
  }
`

export const Auth = styled.div`
  position: relative;
  display: none;
  padding: 2rem;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -2rem;

    width: calc(100% + 3.5rem);
    height: 0.5px;
    background: #57668c;

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`

export const DepositButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;

  min-width: 120px;
  height: 40px;
  padding: 0.5rem 1.5rem;
  margin-right: 4rem;

  border-radius: 2.5rem;
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.whiteColor};

  outline: none;
  border: none;

  .icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`

export const Avatar = styled.div`
  position: relative;
  min-width: 64px;
  height: 64px;

  @media screen and (min-width: 1280px) {
    min-width: 50px;
    height: 50px;
  }
`

export const SignButton = styled(DepositButton)`
  border-radius: 0.5rem;
  margin-right: 0;
`

export const WinningNumbersLink = styled(NavLink)``

export const WinningNumbers = styled.ul`
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.13);

  &:before {
    content: '';
    position: absolute;
    top: -35px;
    left: 0;

    background: transparent;
    width: 100%;
    height: 35px;
  }

  position: absolute;
  z-index: 1;
  left: 0;
  bottom: -125px;

  width: calc(100% + 50px);
  display: none;

  background: ${({ theme }) => theme.whiteColor};
  border-radius: 0.5rem;

  ${WinningNumbersLink} & {
    display: block;
    @media (max-width: 1280px) {
      display: none;
    }
  }

  @media (max-width: 1280px) {
    display: none;
  }
`

export const WinningItem = styled.li`
  position: relative;
  z-index: 0;
  padding: 1rem;
  white-space: nowrap;

  &:first-child {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background: #e9e9e9;
    transition: all 0.7s;

    &:first-child {
      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;

        width: 3px;
        height: 100%;
        background: ${({ theme }) => theme.mainColor};
        transition: all 1s;
      }
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    &:last-child {
      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        top: 0;

        width: 3px;
        height: 100%;
        background: ${({ theme }) => theme.mainColor};
        transition: all 1s;
      }
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    a {
      color: ${({ theme }) => theme.blackColor};
    }
  }

  @media (max-width: 1280px) {
    display: none;
  }
`

export const WinningLink = styled.a`
  color: ${({ theme }) => theme.blackColor};
`

export const HambugerButton = styled(motion.span)`
  cursor: pointer;
  display: block;
  z-index: 1;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`

export const MobileWinningNumbers = styled.span`
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.whiteColor};
  white-space: nowrap;
  z-index: 1;
  cursor: pointer;

  svg {
    margin-left: 5px;
    transition: all 0.5s;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`

export const Line = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -27px;

    width: 279px;
    height: 0.5px;
    background: #57668c;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`

export const AuthMobile = styled(NavItem)`
  display: flex;
  max-width: 225px;
  padding-left: 0;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`

export const UserInfo = styled.div`
  margin-left: 1.5rem;
`

export const UserName = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.whiteColor};
`

export const UserDepositWrapper = styled.div`
  display: flex;
`

export const UserMobileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 7px;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;

  white-space: nowrap;
  min-width: 72px;
  width: 100%;
  padding: 1rem;
  margin-right: 5px;

  border-radius: 2.5rem;
  background: #666666;
  color: #fff;

  outline: none;
  border: none;

  .icon {
    position: relative;
    min-width: 8px;
    height: 8px;
    margin-right: 5px;
  }
`

export const UsdtButton = styled(UserMobileButton)`
  background: #666666;
  color: #fff;
`

export const DepositMobileButton = styled(UserMobileButton)`
  border-radius: 2.5rem;
  background: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.whiteColor};
`

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: auto;
  color: #8c9abc;
  cursor: pointer;

  position: relative;
  font-weight: 600;
  font-size: 18px;
  padding: 2rem;

  outline: none;
  border: none;
  background: transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 279px;
    height: 0.5px;
    background: #57668c;

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }

  @media screen and (min-width: 1280px) {
    padding-right: 4rem;
    display: none;
  }

  svg {
    margin-right: 5px;
  }
`

export const WinningNumberMobile = styled.div`
  display: none;

  @media (max-width: 1280px) {
    display: block;
    cursor: auto;
    .border-winning {
      display: flex;
      align-items: center;
      margin-top: 32px;
      margin-left: -11px;
    }
    .border-top {
      width: 30px;
      border-top: 1px solid #fff;
    }

    .border-left {
      position: absolute;
      top: 1rem;
      left: -1.14rem;
      height: 121.5px;
      border-left: 1px solid #fff;
    }
  }
`
export const WinningItemMobile = styled.div`
  margin-left: 10px;
  color: #eeeeee;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`
