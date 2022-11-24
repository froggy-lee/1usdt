import React, { useCallback, useState, useEffect } from 'react'
import UsdtModal from '/src/components/UsdtModal'
import Input from '/src/components/Form/Input'
import InputPassword from '/src/components/Form/InputPassword'
import ButtonRegister from '/src/components/Form/ButtonRegister'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  showCreatePassModalAction,
  //selectTypeCreatePass,
  selectEmail
} from '/src/store/slice/modal'

function CreatePasswordModal() {
  const dispatch = useDispatch()
  const email = useSelector(selectEmail)
  const [time, setTime] = useState(60)
  const [disableButton, setDisbleButton] = useState(true)

  useEffect(() => {
    const count = setTimeout(() => {
      setTime(time - 1)
    }, 1000)
    if (time === 0) {
      setDisbleButton(false)
      clearTimeout(count)
    }
  }, [time])

  const onToggle = useCallback(() => {
    dispatch(showCreatePassModalAction(false))
  }, [dispatch])

  const handleSubmit = () => {
    onToggle()
  }

  const handleResentCode = useCallback(() => {
    setTime(60)
    setDisbleButton(true)
  }, [])

  const formik = useFormik({
    initialValues: {
      code: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      code: Yup.string().required('Required'),
      password: Yup.string().required(`Required`).min(8, `More 8 character`),
      confirmPassword: Yup.string()
        .required(`Required`)
        .oneOf([Yup.ref('password'), null], "Passwords don't match")
    }),
    onSubmit: values => handleSubmit(values)
  })

  return (
    <UsdtModal isOpen onToggle={onToggle} title="Create a password" width={42}>
      <S.Wrapper>
        <S.Des>
          Enter the confirmation code sent to the email <span>{email}</span>
        </S.Des>
        <form onSubmit={formik.handleSubmit}>
          <div className="code">
            <Input placeholder="Enter code" name="code" formik={formik} />
            <S.Button
              type="button"
              disabled={disableButton}
              onClick={handleResentCode}
            >
              {disableButton ? `${time}s` : 'Resent Code'}
            </S.Button>
          </div>
          <div>
            <InputPassword
              placeholder="Password"
              type="password"
              name="password"
              formik={formik}
            />
          </div>
          <div>
            <InputPassword
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              formik={formik}
            />
          </div>
          <div className="btn-confirm">
            <ButtonRegister name="Confirm Password" type="submit" />
          </div>
        </form>
      </S.Wrapper>
    </UsdtModal>
  )
}

export default CreatePasswordModal
