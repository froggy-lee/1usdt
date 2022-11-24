import Table from '/src/components/Table'
import * as S from './styles'
import { useMemo } from 'react'
import {
  DateColumn,
  NameColumn,
  WalletColumn
} from '/src/components/UsdtModal/WinnersModal/ColumnWinnersModal'
import { showWinnersModal } from '/src/store/slice/modal'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

const WinnersListModal = () => {
  const dispatch = useDispatch()
  const handleClose = useCallback(() => {
    dispatch(showWinnersModal(false))
  }, [dispatch])

  const dataTable = [
    {
      name: 'Jack Dorsey',
      wallet: 'tshhain170',
      date: '11/07/2022'
    },
    {
      name: 'Nhung popcorn',
      wallet: 'tshhain170',
      date: '11/07/2022'
    },
    {
      name: 'Shin ',
      wallet: 'tshhain170',
      date: '11/07/2022'
    },
    {
      name: 'Jack Dorsey',
      wallet: 'tshhain170',
      date: '11/07/2022'
    },
    {
      name: 'Jack Dorsey',
      wallet: 'tshhain170',
      date: '11/07/2022'
    },
    {
      name: 'Jack Dorsey',
      wallet: 'tshhain170',
      date: '11/07/2022'
    },
    {
      name: 'Jack Dorsey',
      wallet: 'tshhain170',
      date: '11/07/2022'
    },
    {
      name: 'Jack Dorsey',
      wallet: 'tshhain170',
      date: '11/07/2022'
    },
    {
      name: 'Jack Dorsey',
      wallet: 'tshhain170',
      date: '11/07/2022'
    },
    {
      name: 'Jack Dorsey',
      wallet: 'tshhain170',
      date: '11/07/2022'
    }
  ]

  const columns = useMemo(
    () => [
      {
        Header: 'User name',
        accessor: 'name',
        Cell: ({ value }) => <NameColumn name={value} />
      },
      {
        Header: 'Wallet Address',
        accessor: 'wallet',
        Cell: ({ value }) => <WalletColumn wallet={value} />
      },
      {
        Header: 'Buy date',
        accessor: 'date',
        Cell: ({ value }) => <DateColumn date={value} />
      }
    ],
    []
  )

  return (
    <>
      <S.layout onClick={handleClose}></S.layout>

      <S.WrapperTable>
        <Table columns={columns} data={dataTable} />
      </S.WrapperTable>
    </>
  )
}

export default WinnersListModal
