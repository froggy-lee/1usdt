import React from 'react'
import * as S from './styles'

const InputAvatar = ({ children, getAvatar }) => {
  return <S.InputWrapper getAvatar={getAvatar}>{children}</S.InputWrapper>
}

export default InputAvatar
