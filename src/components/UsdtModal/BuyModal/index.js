import React, { useEffect, useState } from 'react'
import UsdtModal from '/src/components/UsdtModal'
import { useDispatch } from 'react-redux'
import {
  showBuyModalAction,
  showAlertModalAction
} from '/src/store/slice/modal'
import * as S from './styles'
import { useCallback } from 'react'

function BuyModal() {
  const dispatch = useDispatch()
  const [listNumber, setListNumber] = useState([])
  const [listSetNumber, setListSetNumber] = useState([])
  const [setNumber, setSetNumber] = useState([])
  const [location, setLocation] = useState(0)

  const handleCreateListNumber = useCallback(() => {
    let newList = []
    for (let i = 1; i < 56; i++) {
      i < 10
        ? newList.push({
            number: `0${i}`,
            active: false
          })
        : newList.push({
            number: i,
            active: false
          })
    }
    return newList
  }, [])

  const CreateSetNumber = useCallback(() => {
    let newSet = []
    for (let i = 0; i < 6; i++) newSet.push({ number: '', active: false })
    setSetNumber(newSet)
  }, [])

  useEffect(() => {
    setListNumber(handleCreateListNumber())
    CreateSetNumber()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onToggle = () => {
    dispatch(showBuyModalAction(false))
  }

  const getLocation = item =>
    setNumber.findIndex(element => element.number == item.number)

  const handleChooseNumber = chooseNumber => {
    const { number, active } = chooseNumber
    let newNumber = {
      number,
      active: !active
    }
    if (location < 6) {
      listNumber.splice(number - 1, 1, newNumber)
      setListNumber([...listNumber])
      if (newNumber.active) {
        setNumber.splice(getLocation({ number: '' }), 1, newNumber)
        setSetNumber(setNumber)
        setLocation(location + 1)
      }
    }
    if (!newNumber.active) {
      setNumber.splice(getLocation(chooseNumber), 1, {
        number: '',
        active: false
      })
      setSetNumber(setNumber)
      listNumber.splice(number - 1, 1, newNumber)
      setListNumber([...listNumber])
      setLocation(location - 1)
    }
  }

  const handleAddSetNumber = () => {
    if (location == 6) {
      setLocation(0)
      setListSetNumber([setNumber, ...listSetNumber])
      setListNumber(handleCreateListNumber())
      CreateSetNumber()
    }
  }

  const randomNumber = () => Math.floor(Math.random() * 55) + 1

  const handleRandomNumberInList = id => {
    let newSetNumber = []
    for (let i = 0; i < 6; i++) {
      let newNumber = randomNumber()
      newNumber < 10 ? (newNumber = `0${newNumber}`) : ''
      newSetNumber.push({ number: newNumber, active: false })
    }
    listSetNumber.splice(id, 1, newSetNumber)
    setListSetNumber([...listSetNumber])
  }

  const handleRandomNumberInSet = () => {
    let newSetNumber = []
    let newListNumber = handleCreateListNumber()
    for (let i = 0; i < 6; i++) {
      let newNumber = randomNumber()
      newNumber < 10 ? (newNumber = `0${newNumber}`) : ''
      for (let item of newListNumber) {
        if (item.number == newNumber) {
          newListNumber.splice(newNumber - 1, 1, {
            number: newNumber,
            active: true
          })
        }
      }
      newSetNumber.push({ number: newNumber, active: true })
    }
    setListNumber([...newListNumber])
    setSetNumber([...newSetNumber])
    setLocation(6)
  }

  const handleDeleteSetNumber = id => {
    listSetNumber.splice(id, 1)
    setListSetNumber([...listSetNumber])
  }

  const handleBuy = () => {
    dispatch(showAlertModalAction(true))
    onToggle()
  }

  const handleDeleteAllSetNumber = useCallback(() => {
    CreateSetNumber()
    setListNumber(handleCreateListNumber())
    setLocation(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <UsdtModal
      title="Choose your lucky numbers"
      isOpen
      onToggle={onToggle}
      width={55}
    >
      <S.Wrapper>
        <S.ListNumber>
          {listNumber?.map(number => (
            <S.Number
              key={number.number}
              className={number.active ? 'active' : ''}
              onClick={() => handleChooseNumber(number)}
            >
              {number.number}
            </S.Number>
          ))}
        </S.ListNumber>
        <div className="btn-add-set">
          <S.ButtonAddSetNumber onClick={handleAddSetNumber}>
            ADD SET NUMBER
          </S.ButtonAddSetNumber>
        </div>
        <div className="choose-number">
          <S.ButtonClose onClick={handleDeleteAllSetNumber} />
          {setNumber.map((number, index) => (
            <S.Number className="set-number" key={index}>
              {number.number}
            </S.Number>
          ))}
          <S.ButtonRandom onClick={handleRandomNumberInSet} />
        </div>
        <div className="list-set-number">
          {listSetNumber?.map((item, index) => {
            return (
              <div key={index} className="list">
                <S.ButtonClose onClick={() => handleDeleteSetNumber(index)} />
                {item.map((number, index) => {
                  return <S.Number key={index}>{number.number}</S.Number>
                })}
                <S.ButtonRandom
                  onClick={() => handleRandomNumberInList(index)}
                />
              </div>
            )
          })}
        </div>
        <S.TemporaryCash>
          TEMPORARY CASH:{' '}
          <span>
            {location == 6 ? listSetNumber.length + 1 : listSetNumber.length}{' '}
            USDT
          </span>
        </S.TemporaryCash>
        <div className="btn-buy">
          <S.ButtonBuy onClick={handleBuy}>BUY</S.ButtonBuy>
        </div>
      </S.Wrapper>
    </UsdtModal>
  )
}

export default BuyModal
