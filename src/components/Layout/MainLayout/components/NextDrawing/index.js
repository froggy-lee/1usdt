import React, { useCallback } from 'react'
import * as S from './styles'
import Slider from 'react-slick'
import Ball from '/src/components/Ball'
import { Arrow } from '/public/svgs'
import { useDispatch, useSelector } from 'react-redux'
import {
  showBuyModalAction,
  showAlertModalAction,
  selectShowAlertModal
} from '/src/store/slice/modal'
import AlertModal from '/src/components/UsdtModal/AlertModal'

const fakeData = [
  {
    id: 1,
    title: 'Winning Numbers – Jul 01, 2022',
    jackpot: ['32', '51', '53', '02', '29', '55']
  },
  {
    id: 2,
    title: 'Winning Numbers – Jul 02, 2022',
    jackpot: ['12', '26', '51', '01', '13', '35']
  },
  {
    id: 3,
    title: 'Winning Numbers – Jul 03, 2022',
    jackpot: ['11', '27', '45', '46', '21', '32']
  },
  {
    id: 4,
    title: 'Winning Numbers – Jul 04, 2022',
    jackpot: ['16', '53', '41', '19', '29', '23']
  }
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

function NextArrow(props) {
  const { onClick } = props
  return (
    <S.SliderButtonRight onClick={onClick}>
      <Arrow />
    </S.SliderButtonRight>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <S.SliderButtonLeft onClick={onClick}>
      <Arrow />
    </S.SliderButtonLeft>
  )
}

const NextDrawing = ({ statusOpenWinning }) => {
  const dispatch = useDispatch()
  const showAlertModal = useSelector(selectShowAlertModal)

  const handleShowBuyModal = useCallback(() => {
    dispatch(showBuyModalAction(true))
  }, [dispatch])

  const alertModalToggle = useCallback(() => {
    dispatch(showAlertModalAction(false))
  }, [dispatch])

  return (
    <>
      {!!showAlertModal && (
        <AlertModal
          isOpen
          onToggle={alertModalToggle}
          type={false}
          title="Failed"
          des="Not enough USDT.
          Please add more USDT to your account"
        />
      )}
      <S.Wrapper status={statusOpenWinning}>
        <S.NextDrawingWrapper>
          <S.NextDrawingTitle>Next Drawing – Sun, Jul 10</S.NextDrawingTitle>
          <S.EstimatedJackpotWrapper>
            <S.EstimatedJackpot>Estimated Jackpot</S.EstimatedJackpot>
            <S.Jackpot>48 Million USDT</S.Jackpot>
            <S.CashValue>Cash Value: $27.9 Million</S.CashValue>
          </S.EstimatedJackpotWrapper>
        </S.NextDrawingWrapper>

        <S.CountDownWrapper>
          <S.CountDownTitle>Countdown to Drawing</S.CountDownTitle>

          <S.TimeWrapper>
            <S.Hour>
              <span className="time">23</span>
              <span className="time__name">Hr</span>
            </S.Hour>
            <S.Min>
              <span className="time">26</span>
              <span className="time__name">Min</span>
            </S.Min>
            <S.Sec>
              <span className="time">47</span>
              <span className="time__name">Sec</span>
            </S.Sec>
          </S.TimeWrapper>
        </S.CountDownWrapper>

        <S.WinningNumbersWrapper>
          <Slider {...settings}>
            {fakeData.map(item => (
              <div key={item.id}>
                <S.WinningNumbersTitle>{item.title}</S.WinningNumbersTitle>
                <S.WinningNumbers>
                  {item.jackpot.map((number, id) => (
                    <Ball value={number} key={id} />
                  ))}
                </S.WinningNumbers>
              </div>
            ))}
          </Slider>
        </S.WinningNumbersWrapper>

        <S.BuyWrapper>
          <S.BuyButton onClick={handleShowBuyModal}>Buy</S.BuyButton>
        </S.BuyWrapper>
      </S.Wrapper>
    </>
  )
}

export default NextDrawing
