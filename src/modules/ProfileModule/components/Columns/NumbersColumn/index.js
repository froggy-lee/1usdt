import React from 'react'
import * as S from './styles'

const NumbersColumn = ({ numberArr }) => {
  return (
    <S.Numbers>
      {numberArr.map(item => (
        <S.Number key={item}>{item}</S.Number>
      ))}
    </S.Numbers>
  )
}

export default NumbersColumn
