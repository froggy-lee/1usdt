import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'

const WinnersColumn = ({ winners }) => {
  const router = useRouter()
  const handleWinning = () => {
    router.push('/winners')
  }
  return (
    <S.Wrapper>
      <S.Winners>{winners}</S.Winners>
      <S.Image onClick={handleWinning}>
        <Image
          className="image-user"
          src={'/images/ArrowRight.png'}
          width={12}
          height={12}
          alt="arrow"
          objectFit="cover"
        />
      </S.Image>
    </S.Wrapper>
  )
}

export default WinnersColumn
