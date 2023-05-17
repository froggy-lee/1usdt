import React from 'react'
import * as S from './styles'
import {
  ChangePasswordIcon,
  DepositIcon,
  HistoryIcon,
  UserEditIcon,
  WithDrawIcon
} from '/public/svgs'
import Image from 'next/image'
import { useRouter } from 'next/router'

const menuLink = [
  {
    title: 'Profile',
    link: '/profile',
    icon: <UserEditIcon />
  },
  {
    title: 'Deposit',
    link: '/profile/deposit',
    icon: <DepositIcon />
  },
  {
    title: 'Withdrawble',
    link: '/profile/withdraw',
    icon: <WithDrawIcon />
  },
  {
    title: 'Ticket History',
    link: '/profile/ticket-history',
    icon: <HistoryIcon />
  },
  {
    title: 'Change Password',
    link: '/profile/change-password',
    icon: <ChangePasswordIcon />
  }
]

const SideBar = () => {
  const router = useRouter()
  return (
    <>
      <S.Wrapper>
        <S.UserInfoWrapper>
          <S.Avatar>
            <Image
              src={'/images/fake-avatar.png'}
              width={102}
              height={102}
              alt="avatar"
            />
          </S.Avatar>
          <S.UserName>Nhung Popcorn</S.UserName>
        </S.UserInfoWrapper>

        <div className="sidebar__item--wrapper">
          <S.TotalWrapper>
            <S.TotalTitleWrapper>
              <S.TotalTitle>Total :</S.TotalTitle>
              <S.TotalTitleAmount>10.000 {'USDT'}</S.TotalTitleAmount>
            </S.TotalTitleWrapper>
            <S.TotalNumberWrapper>
              <S.TotalNumber>{'$'}100</S.TotalNumber>
            </S.TotalNumberWrapper>
          </S.TotalWrapper>
        </div>

        <S.MenuWrapper>
          <S.Menu>
            <S.MenuItemWrapper>
              {menuLink.map(item => (
                <S.MenuItem
                  key={item.title}
                  className={router.pathname === `${item.link}` ? 'active' : ''}
                  onClick={() => router.push(item.link)}
                >
                  <S.MenuIcon className="icon">{item.icon}</S.MenuIcon>
                  <S.MenuLink>{item.title}</S.MenuLink>
                </S.MenuItem>
              ))}
            </S.MenuItemWrapper>
          </S.Menu>
        </S.MenuWrapper>

        <div className="sidebar__item--wrapper logout__wrapper">
          <S.ButtonLogout>Logout</S.ButtonLogout>
        </div>
      </S.Wrapper>
    </>
  )
}

export default SideBar
