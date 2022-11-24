import React from 'react'
import * as S from './styles'

const InputProfileName = ({ label, placeholder, name, value, formik = {} }) => {
  return (
    <S.InputWrapper
      name={name}
      label={label}
      placeholder={placeholder}
      values={value}
      formik={formik}
    />
  )
}

export default InputProfileName
