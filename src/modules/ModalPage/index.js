import React from 'react'
import HowToBuyModal from '/src/components/UsdtModal/HowToBuyModal'
import BuyModal from '/src/components/UsdtModal/BuyModal'
import LoginModal from '/src/components/UsdtModal/LoginModal'
import RegisterModal from '/src/components/UsdtModal/RegisterModal'
import ForgotPasswordModal from '/src/components/UsdtModal/ForgotPasswordModal'
import CreatePasswordModal from '/src/components/UsdtModal/CreatePasswordModal'
import { useSelector } from 'react-redux'
import {
  selectShowHowToBuy,
  selectShowBuyModal,
  selectShowWinners,
  selectShowLoginModal,
  selectShowRegisterModal,
  selectShowForgotPassModal,
  selectShowCreatePassModal
} from '/src/store/slice/modal'
import WinnersListModal from '/src/components/UsdtModal/WinnersModal/WinnersListModal'

function ModalPage() {
  const showHowToBuy = useSelector(selectShowHowToBuy)
  const showWinners = useSelector(selectShowWinners)
  const showBuyModal = useSelector(selectShowBuyModal)
  const showLoginModal = useSelector(selectShowLoginModal)
  const showRegisterModal = useSelector(selectShowRegisterModal)
  const showForgotPassModal = useSelector(selectShowForgotPassModal)
  const showCreatePassModal = useSelector(selectShowCreatePassModal)

  return (
    <>
      {!!showHowToBuy && <HowToBuyModal />}
      {!!showBuyModal && <BuyModal />}
      {!!showWinners && <WinnersListModal />}
      {!!showLoginModal && <LoginModal />}
      {!!showRegisterModal && <RegisterModal />}
      {!!showForgotPassModal && <ForgotPasswordModal />}
      {!!showCreatePassModal && <CreatePasswordModal />}
    </>
  )
}

export default ModalPage
