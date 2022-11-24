import React from 'react'
import * as S from './styles'

const NumbersColumn = ({ numbers }) => {
  return (
    <S.Numbers>
      <S.Input>{numbers.input1}</S.Input>
      <S.Input>{numbers.input2}</S.Input>
      <S.Input>{numbers.input3}</S.Input>
      <S.Input>{numbers.input4}</S.Input>
      <S.Input>{numbers.input5}</S.Input>
      <S.Input>{numbers.input6}</S.Input>
    </S.Numbers>
  )
}

export default NumbersColumn
