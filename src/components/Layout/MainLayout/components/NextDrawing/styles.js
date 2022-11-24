import styled from 'styled-components'

export const Wrapper = styled.section`
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  max-width: 376px;
  height: 100%;
  background: rgba(18, 18, 18, 0.8);

  display: ${props => (props.status ? 'block' : 'none')};

  @media screen and (min-width: 1280px) {
    display: block;
  }
`

export const NextDrawingWrapper = styled.div`
  position: relative;
  padding-top: 2rem;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;

    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.whiteColor};
  }
`

export const NextDrawingTitle = styled.h1`
  position: relative;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.whiteColor};
  white-space: nowrap;

  text-align: center;
  padding: 2rem 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);

    width: 65px;
    height: 3px;
    background: ${({ theme }) => theme.mainColor};
  }
`

export const EstimatedJackpotWrapper = styled.div`
  position: relative;
  padding: 2rem 0;
`

export const EstimatedJackpot = styled.h1`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.whiteColor};
  white-space: nowrap;
  text-align: center;
`

export const Jackpot = styled(EstimatedJackpot)`
  font-weight: 700;
  font-size: 30px;
  color: ${({ theme }) => theme.yellowColor};
`

export const CashValue = styled(EstimatedJackpot)`
  font-style: italic;
  font-weight: 400;
  font-size: 11px;
`

export const CountDownWrapper = styled(NextDrawingWrapper)``

export const CountDownTitle = styled(EstimatedJackpot)``

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  padding: 1rem 2rem;

  font-weight: 700;
  font-size: 30px;
  color: ${({ theme }) => theme.yellowColor};

  span {
    &.time {
      font-weight: 700;
      font-size: 30px;
      color: ${({ theme }) => theme.yellowColor};
    }

    &.time__name {
      font-weight: 400;
      font-size: 15px;
      color: ${({ theme }) => theme.whiteColor};
    }
  }
`

export const Hour = styled(Time)`
  &:after {
    content: ':';
    position: absolute;
    right: 0;
    top: 10px;
  }
`

export const Min = styled(Time)`
  &:after {
    content: ':';
    position: absolute;
    right: 0;
    top: 10px;
  }
`

export const Sec = styled(Time)``

export const WinningNumbersWrapper = styled(NextDrawingWrapper)``

export const WinningNumbersTitle = styled(NextDrawingTitle)``

export const WinningNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`

export const BuyWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`

export const BuyButton = styled.button`
  width: 261px;
  height: 55px;
  background: ${({ theme }) => theme.mainColor};
  border-radius: 2.5rem;

  outline: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  color: ${({ theme }) => theme.whiteColor};
  font-weight: 900;
  font-size: 30px;
`

export const SliderButtonRight = styled.div`
  position: absolute;
  z-index: 99;
  top: 50%;
  right: 1rem;

  transform: translateY(-50%) rotate(270deg);
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s;
`

export const SliderButtonLeft = styled.div`
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 1rem;

  transform: translateY(-50%) rotate(90deg);
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s;
`
