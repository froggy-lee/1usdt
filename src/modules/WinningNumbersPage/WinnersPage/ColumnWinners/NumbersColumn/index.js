import React from 'react'
import * as S from './styles'
import { showWinnersModal } from '/src/store/slice/modal'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

const Number = ({ numbers }) => {
  const dispatch = useDispatch()
  const handleArrow = useCallback(() => {
    dispatch(showWinnersModal(true))
  }, [dispatch])

  return (
    <S.Wrapper>
      <S.Numbers> {numbers}</S.Numbers>
      <S.ArrowDown onClick={handleArrow}></S.ArrowDown>
    </S.Wrapper>
  )
}

export default Number
