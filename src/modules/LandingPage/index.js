import React, { useCallback } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { formatTime } from '/src/utils'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { showHowtoBuyModal, showBuyModalAction } from '/src/store/slice/modal'
import Link from 'next/link'

const listNumber = [25, 36, 42, 89, 75, 62]

function LandingPage() {
  const dispatch = useDispatch()

  const handleShowHowToBuyModal = useCallback(() => {
    dispatch(showHowtoBuyModal(true))
  }, [dispatch])
  const handleShowBuyModal = useCallback(() => {
    dispatch(showBuyModalAction(true))
  }, [dispatch])
  return (
    <S.Wrapper>
      <S.Section>
        <S.ImageUsdt>
          <Image
            src="/images/1USDT.png"
            width="266px"
            height="131px"
            alt="1usdt"
            objectFit="cover"
          />
        </S.ImageUsdt>
        <S.Title>WINNING NUMBERS</S.Title>
        <div className="list-number">
          {listNumber.map((number, index) => {
            return <S.Number key={index}> {number} </S.Number>
          })}
        </div>
        <S.Time>{formatTime(moment())}</S.Time>
        <div className="list-btn">
          <S.Button onClick={handleShowHowToBuyModal}>HOW TO BUY</S.Button>
          <S.Button primery>
            <Link href="/winners" passHref>
              <a> WINNERS (192)</a>
            </Link>
          </S.Button>
        </div>
        <S.Buy onClick={handleShowBuyModal}>BUY</S.Buy>
      </S.Section>
    </S.Wrapper>
  )
}

export default LandingPage
