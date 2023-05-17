import React from 'react'
import UsdtModal from '/src/components/UsdtModal'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { showHowtoBuyModal } from '/src/store/slice/modal'
import * as S from './styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Step from './Step'

const listHowToBuy = [
  {
    img: '/images/howtobuy/howtobuy1.png',
    titleBottom: 'Deposit',
    des: 'Account > Deposit > Scan QR code/CopyID to top up from your wallet> Confirm'
  },
  {
    img: '/images/howtobuy/howtobuy2.png',
    titleBottom: 'Buy your numbers',
    des: 'Home > Buy > Input your numbers > Choose amount > Confirm and finish'
  },
  {
    img: '/images/howtobuy/howtobuy-plus.png',
    titleBottom: 'The prize you won',
    des: 'There are 4 or more pairs of numbers, you will be solved and the last pair of red.'
  },
  {
    img: '/images/howtobuy/howtobuy3.png',
    titleBottom: 'Withdraw',
    des: 'Account > Withdraw > Choose amount > Confirm'
  },
  {
    img: '/images/howtobuy/howtobuy4.png',
    titleBottom: 'Check your numbers',
    des: 'Account > Ticket History '
  }
]

function HowToBuy() {
  const dispatch = useDispatch()

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    dots: true,
    fade: true
  }

  const onToggle = useCallback(() => {
    dispatch(showHowtoBuyModal(false))
  }, [dispatch])

  return (
    <UsdtModal title="How to buy" isOpen onToggle={onToggle} width={60}>
      <S.Wrapper>
        <Slider {...settings}>
          {listHowToBuy?.map((item, index) => {
            return (
              <Step
                key={index}
                titleBottom={item.titleBottom}
                des={item.des}
                image={item.img}
              />
            )
          })}
        </Slider>
        <S.ButtonDone onClick={onToggle}>DONE</S.ButtonDone>
      </S.Wrapper>
    </UsdtModal>
  )
}

export default HowToBuy
