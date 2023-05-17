import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import Slider from 'react-slick'

const fakeData = [
  {
    id: 1,
    name: 'Lady Gaga',
    status: 'Bought 3 usdt.',
    avatar: '/images/footer-info-avatar.png'
  },
  {
    id: 2,
    name: 'Lady Gaga',
    status: 'Bought 3 usdt.',
    avatar: '/images/footer-info-avatar.png'
  },
  {
    id: 3,
    name: 'Lady Gaga',
    status: 'Bought 3 usdt.',
    avatar: '/images/footer-info-avatar.png'
  },
  {
    id: 4,
    name: 'Lady Gaga',
    status: 'Bought 3 usdt.',
    avatar: '/images/footer-info-avatar.png'
  },
  {
    id: 5,
    name: 'Lady Gaga',
    status: 'Bought 3 usdt.',
    avatar: '/images/footer-info-avatar.png'
  },
  {
    id: 6,
    name: 'Lady Gaga',
    status: 'Bought 3 usdt.',
    avatar: '/images/footer-info-avatar.png'
  }
]

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const Footer = () => {
  return (
    <>
      <S.FooterSection>
        <S.FooterItemSection>
          <Slider {...settings}>
            {fakeData.map(item => (
              <S.FooterItem key={item.id}>
                <S.FooterItemAvatar>
                  <Image
                    src={item.avatar}
                    width={50}
                    height={50}
                    alt="avatar"
                  />
                </S.FooterItemAvatar>
                <S.FooterItemInfo>
                  <S.FooterItemInfoName>{item.name}</S.FooterItemInfoName>
                  <S.FooterItemInfoStatus>{item.status}</S.FooterItemInfoStatus>
                </S.FooterItemInfo>
              </S.FooterItem>
            ))}
          </Slider>
        </S.FooterItemSection>
      </S.FooterSection>
    </>
  )
}

export default Footer
