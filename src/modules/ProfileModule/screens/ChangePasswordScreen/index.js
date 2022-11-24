import React, { useCallback } from 'react'
import * as S from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

const ChangePasswordScreen = () => {
  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  }

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required('Required'),
    newPassword: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'New Password must match')
      .required('Required')
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: values => handleSubmitData(values)
  })

  const { handleSubmit, values, resetForm } = formik

  const handleSubmitData = useCallback(
    // eslint-disable-next-line no-unused-vars
    values => {
      toast.success('Change password success!')
      resetForm()
    },
    [resetForm]
  )

  return (
    <S.Wrapper>
      <S.Title>Change Password</S.Title>

      <S.Description>
        Manage profile information for account security
      </S.Description>

      <S.Line></S.Line>

      <S.ChangePasswordWrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.FormItem>
            <S.FormTitle>Current password: </S.FormTitle>
            <S.FormInputWrapper>
              <S.FormInput
                type="password"
                name="oldPassword"
                value={values.oldPassword}
                formik={formik}
              />
            </S.FormInputWrapper>
          </S.FormItem>

          <S.FormItem>
            <S.FormTitle>New password: </S.FormTitle>
            <S.FormInputWrapper>
              <S.FormInput
                type="password"
                name="newPassword"
                value={values.newPassword}
                formik={formik}
              />
            </S.FormInputWrapper>
          </S.FormItem>

          <S.FormItem>
            <S.FormTitle>Confirm password: </S.FormTitle>
            <S.FormInputWrapper>
              <S.FormInput
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                formik={formik}
              />
            </S.FormInputWrapper>
          </S.FormItem>

          <S.ButtonSubmit type="submit">Confirm</S.ButtonSubmit>
        </S.Form>
      </S.ChangePasswordWrapper>
    </S.Wrapper>
  )
}

export default ChangePasswordScreen
