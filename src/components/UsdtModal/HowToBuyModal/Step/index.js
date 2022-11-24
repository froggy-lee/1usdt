import React from 'react'
import Image from 'next/image'
import * as S from './styles'

function Step(props) {
  const { image, titleBottom, des } = props
  return (
    <S.Wrapper>
      <div>
        <Image src={image} width={550} height={285} alt="" />
      </div>
      <S.TitleBottom>{titleBottom}</S.TitleBottom>
      <S.Des>{des}</S.Des>
    </S.Wrapper>
  )
}

export default Step
