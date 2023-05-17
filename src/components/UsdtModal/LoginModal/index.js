import React, { useCallback } from 'react'
import UsdtModal from '/src/components/UsdtModal'
import Input from '/src/components/Form/Input'
import InputPassword from '/src/components/Form/InputPassword'
import ButtonRegister from '/src/components/Form/ButtonRegister'
import * as S from './styles'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {
  showLoginModalAction,
  showRegisterModalAction,
  showForgotPassModalAction
} from '/src/store/slice/modal'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function LoginModal() {
  const dispatch = useDispatch()

  const onToggle = useCallback(() => {
    dispatch(showLoginModalAction(false))
  }, [dispatch])

  const handleOpenRegisterModal = useCallback(() => {
    dispatch(showLoginModalAction(false))
    dispatch(showRegisterModalAction(true))
  }, [dispatch])

  const handleOpenForgotPasswordModal = useCallback(() => {
    dispatch(showLoginModalAction(false))
    dispatch(showForgotPassModalAction(true))
  }, [dispatch])

  const handleSubmit = () => {
    onToggle()
  }

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Required'),
      password: Yup.string().required(`Required`).min(8, `More 8 character`)
    }),
    onSubmit: values => handleSubmit(values)
  })

  return (
    <UsdtModal isOpen onToggle={onToggle} title="Login" width={42}>
      <S.Wrapper>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Input
              placeholder="Email/User name"
              name="userName"
              formik={formik}
            />
          </div>
          <div>
            <InputPassword
              placeholder="Password"
              type="password"
              name="password"
              formik={formik}
            />
          </div>
          <S.ForgotPassword onClick={handleOpenForgotPasswordModal}>
            Forgot password ?
          </S.ForgotPassword>
          <div className="btn-login">
            <ButtonRegister name="Login" type="submit" />
          </div>
        </form>
        <div className="or">
          <span /> OR <span />
        </div>
        <div className="button-social">
          <S.ButtonSocial>
            <Image
              src="/images/icons/icon-google.png"
              width={32}
              height={32}
              alt="google"
            />
          </S.ButtonSocial>
          <S.ButtonSocial>
            <Image
              src="/images/icons/icon-facebook.png"
              width={17}
              height={32}
              alt="facebook"
            />
          </S.ButtonSocial>
        </div>
        <S.Bottom>
          Do not have an account ?{' '}
          <span onClick={handleOpenRegisterModal}>Register</span>
        </S.Bottom>
      </S.Wrapper>
    </UsdtModal>
  )
}

export default LoginModal
