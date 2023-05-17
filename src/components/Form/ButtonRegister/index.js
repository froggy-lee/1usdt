import React from 'react'
import * as S from './styles'

function ButtonRegister(props) {
  const { name, type } = props
  return <S.Wrapper type={type}>{name}</S.Wrapper>
}

export default ButtonRegister
