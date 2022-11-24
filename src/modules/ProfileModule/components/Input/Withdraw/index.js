import React from 'react'
import * as S from './styles'
import { UsdtAmountIcon } from '/public/svgs'

const InputWithdraw = ({ name, value, placeholder, icon, formik = {} }) => {
  return (
    <S.InputWrapper
      name={name}
      values={value}
      placeholder={placeholder}
      icon={icon}
      formik={formik}
    >
      {icon && (
        <S.Icon>
          <UsdtAmountIcon />
        </S.Icon>
      )}
    </S.InputWrapper>
  )
}

export default InputWithdraw
