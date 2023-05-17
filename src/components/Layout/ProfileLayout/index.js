import React from 'react'
import * as S from './styles'
import { Header } from '/src/components/Layout/MainLayout/components'
import ModalPage from '/src/modules/ModalPage'
import { SideBar } from '/src/components/Layout/ProfileLayout/components'

const ProfileLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <ModalPage />
      <S.Content>
        <SideBar />
        <S.MainContent>{children}</S.MainContent>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProfileLayout
