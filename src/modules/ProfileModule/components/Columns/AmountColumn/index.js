import React from 'react'
import * as S from './styles'

const AmountColumn = ({ amount }) => {
  return <S.Amount>{amount} USDT</S.Amount>
}

export default AmountColumn
