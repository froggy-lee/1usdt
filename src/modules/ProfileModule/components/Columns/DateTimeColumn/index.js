import React from 'react'
import * as S from './styles'

const DateTimeColumn = ({ date, time }) => {
  return (
    <S.DateTimeWrapper>
      <S.Date>{date}</S.Date>
      <S.Time>{time}</S.Time>
    </S.DateTimeWrapper>
  )
}

export default DateTimeColumn
