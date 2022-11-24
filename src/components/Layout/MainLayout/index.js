import React, { useState } from 'react'
import * as S from './styles'
import {
  Header,
  NextDrawing,
  Footer
} from '/src/components/Layout/MainLayout/components'
import ModalPage from '/src/modules/ModalPage'

const MainLayout = ({ children }) => {
  const [openWinning, setOpenWinning] = useState(false)

  const handleOpenWinning = () => {
    setOpenWinning(!openWinning)
  }

  return (
    <S.Wrapper>
      <Header openWinning={handleOpenWinning} statusOpenWinning={openWinning} />
      <ModalPage />
      <S.Container>
        <S.Content>
          <S.MainContent>{children}</S.MainContent>
          <S.Right>
            <NextDrawing statusOpenWinning={openWinning} />
          </S.Right>
        </S.Content>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}

export default MainLayout
