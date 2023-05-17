import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showHowtoBuy: false,
  showBuyModal: false,
  showWinners: false,
  showLoginModal: false,
  showRegisterModal: false,
  showForgotPassModal: false,
  showCreatePassModal: false,
  showAlertModal: false,
  typeCreatePass: 'register',
  email: ''
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showHowtoBuyModal: (state, { payload }) => {
      state.showHowtoBuy = payload
    },
    showBuyModalAction: (state, { payload }) => {
      state.showBuyModal = payload
    },
    showWinnersModal: (state, { payload }) => {
      state.showWinners = payload
    },
    showLoginModalAction: (state, { payload }) => {
      state.showLoginModal = payload
    },
    showRegisterModalAction: (state, { payload }) => {
      state.showRegisterModal = payload
    },
    showForgotPassModalAction: (state, { payload }) => {
      state.showForgotPassModal = payload
    },
    showCreatePassModalAction: (state, { payload }) => {
      state.showCreatePassModal = payload
    },
    showAlertModalAction: (state, { payload }) => {
      state.showAlertModal = payload
    },
    typeCreatePassAction: (state, { payload }) => {
      state.typeCreatePass = payload
    },
    setEmailAction: (state, { payload }) => {
      state.email = payload
    }
  }
})

export const selectShowHowToBuy = state => state.modal.showHowtoBuy

export const selectShowWinners = state => state.modal.showWinners

export const selectShowBuyModal = state => state.modal.showBuyModal

export const selectShowLoginModal = state => state.modal.showLoginModal

export const selectShowRegisterModal = state => state.modal.showRegisterModal

export const selectTypeCreatePass = state => state.modal.typeCreatePass

export const selectEmail = state => state.modal.email

export const selectShowForgotPassModal = state =>
  state.modal.showForgotPassModal

export const selectShowCreatePassModal = state =>
  state.modal.showCreatePassModal

export const selectShowAlertModal = state => state.modal.showAlertModal

export const {
  showHowtoBuyModal,
  showBuyModalAction,
  showWinnersModal,
  showLoginModalAction,
  showRegisterModalAction,
  showForgotPassModalAction,
  showCreatePassModalAction,
  showAlertModalAction,
  typeCreatePassAction,
  setEmailAction
} = modalSlice.actions

export default modalSlice.reducer
