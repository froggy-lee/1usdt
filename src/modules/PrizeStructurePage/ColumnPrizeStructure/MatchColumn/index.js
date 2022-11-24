import React from 'react'
import * as S from './styles'

const Match = ({ match }) => {
  return (
    <S.Wrapper>
      <S.Match className="box1">{match.match}</S.Match>
      <S.Match className="box2">{match.match}</S.Match>
      <S.Match className="box3">{match.match}</S.Match>
      <S.Match className="box4">{match.match}</S.Match>
      <S.Match className="box5">{match.match}</S.Match>
      <S.Match className="box6">{match.match}</S.Match>
    </S.Wrapper>
  )
}

export default Match
