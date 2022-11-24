import React, { useCallback } from 'react'
import UsdtModal from '/src/components/UsdtModal'
import Input from '/src/components/Form/Input'
import ButtonRegister from '/src/components/Form/ButtonRegister'
import * as S from './styles'
import {
  showForgotPassModalAction,
  showLoginModalAction,
  showCreatePassModalAction,
  typeCreatePassAction,
  setEmailAction
} from '/src/store/slice/modal'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function ForgotPasswordModal() {
  const dispatch = useDispatch()

  const onToggle = () => {
    dispatch(showForgotPassModalAction(false))
  }

  const handleSubmit = values => {
    dispatch(showCreatePassModalAction(true))
    dispatch(typeCreatePassAction('forgot'))
    dispatch(setEmailAction(values.email))
    onToggle()
  }

  const handleShowLoginModal = useCallback(() => {
    dispatch(showForgotPassModalAction(false))
    dispatch(showLoginModalAction(true))
  }, [dispatch])

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required').email('Not correct email format')
    }),
    onSubmit: values => handleSubmit(values)
  })

  return (
    <UsdtModal title="Forgot Password" isOpen onToggle={onToggle} width={42}>
      <S.Wrapper>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Input placeholder="Email/User name" name="email" formik={formik} />
          </div>
          <div className="btn-find-account">
            <ButtonRegister name="Find Account" type="submit" />
          </div>
        </form>
        <S.Bottom>
          Do you already have an account ?{' '}
          <span onClick={handleShowLoginModal}>Login</span>
        </S.Bottom>
      </S.Wrapper>
    </UsdtModal>
  )
}

export default ForgotPasswordModal
