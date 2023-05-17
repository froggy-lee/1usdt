import React, { useCallback } from 'react'
import UsdtModal from '/src/components/UsdtModal'
import Input from '/src/components/Form/Input'
import ButtonRegister from '/src/components/Form/ButtonRegister'
import * as S from './styles'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {
  showLoginModalAction,
  showRegisterModalAction,
  showCreatePassModalAction,
  typeCreatePassAction,
  setEmailAction
} from '/src/store/slice/modal'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'

function RegisterModal() {
  const dispatch = useDispatch()

  const onToggle = () => {
    dispatch(showRegisterModalAction(false))
  }

  const handleOpenLoginModal = useCallback(() => {
    dispatch(showRegisterModalAction(false))
    dispatch(showLoginModalAction(true))
  }, [dispatch])

  const handleSubmit = values => {
    dispatch(showCreatePassModalAction(true))
    dispatch(typeCreatePassAction('register'))
    dispatch(setEmailAction(values.email))
    onToggle()
  }

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required').email('Incorrect email format')
    }),
    onSubmit: values => handleSubmit(values)
  })

  return (
    <UsdtModal isOpen onToggle={onToggle} title="Register" width={42}>
      <S.Wrapper>
        <form onSubmit={formik.handleSubmit}>
          <Input placeholder="Email" name="email" formik={formik} />
          <div className="btn-register">
            <ButtonRegister name="Register" type="submit" />
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
        <S.Bottom primary>
          By registering, you agree to
          <br />
          <Link href="/terms">
            <a target="_blank">Terms of Service</a>
          </Link>
          &amp;
          <Link href="/policy">
            <a target="_blank">Privacy Policy</a>
          </Link>
        </S.Bottom>
        <S.Bottom>
          Do you already have an account ?{' '}
          <span onClick={handleOpenLoginModal}>Login</span>
        </S.Bottom>
      </S.Wrapper>
    </UsdtModal>
  )
}

export default RegisterModal
