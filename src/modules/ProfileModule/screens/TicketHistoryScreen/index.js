import React, { useMemo } from 'react'
import * as S from './styles'
import Table from '/src/components/Table'
import {
  DateTimeColumn,
  PrizeColumn,
  TransactionIdColumn,
  NumbersColumn
} from '/src/modules/ProfileModule/components/Columns'

const options = [
  { value: 'all', label: 'All' },
  { value: '30days', label: 'Last 30 Days' },
  { value: '60days', label: 'Last 60 Days' },
  { value: '120days', label: 'Last 120 Days' },
  { value: '180days', label: 'Last 180 Days' },
  { value: 'lastyear', label: 'Last Year' },
  { value: 'last2year', label: 'Last Two Year' },
  { value: 'last5year', label: 'Last Five Year' }
]

const colorStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      border: 1,
      backgroundColor: isSelected ? '#E7E7E7' : '#fff',
      color: '#111',
      borderLeft: isSelected ? `4px solid #d80000` : `none`,
      '&:hover': {
        backgroundColor: '#E7E7E7'
      }
    }
  },
  menuList: styles => ({
    ...styles,
    borderRadius: '10px'
  })
}

const tableData = [
  {
    id: 1,
    date: '07/07/2022',
    time: '09:00 AM',
    numbers: ['32', '51', '57', '02', '29', '94'],
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    prize: 'No prize'
  },
  {
    id: 2,
    date: '07/07/2022',
    time: '09:00 AM',
    numbers: ['32', '51', '57', '02', '29', '94'],
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    prize: '2nd'
  },
  {
    id: 3,
    date: '07/07/2022',
    time: '09:00 AM',
    numbers: ['32', '51', '57', '02', '29', '94'],
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    prize: 'No prize'
  },
  {
    id: 4,
    date: '07/07/2022',
    time: '09:00 AM',
    numbers: ['32', '51', '57', '02', '29', '94'],
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    prize: 'No prize'
  },
  {
    id: 5,
    date: '07/07/2022',
    time: '09:00 AM',
    numbers: ['32', '51', '57', '02', '29', '94'],
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    prize: 'Consolation'
  },
  {
    id: 6,
    date: '07/07/2022',
    time: '09:00 AM',
    numbers: ['32', '51', '57', '02', '29', '94'],
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    prize: 'No prize'
  }
]

const TicketHistoryScreen = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Your number',
        accessor: 'numbers',
        Cell: ({ value }) => <NumbersColumn numberArr={value} />
      },
      {
        Header: 'Time',
        accessor: 'date',
        Cell: ({
          cell: {
            row: { original }
          }
        }) => <DateTimeColumn date={original.date} time={original.time} />
      },
      {
        Header: 'Prize',
        accessor: 'prize',
        Cell: ({ value }) => <PrizeColumn prize={value} />
      },
      {
        Header: 'Transaction ID',
        accessor: 'transactionId',
        Cell: ({ value }) => <TransactionIdColumn id={value} />
      }
    ],
    []
  )

  return (
    <S.Wrapper>
      <S.Title>Ticket history</S.Title>

      <S.Line></S.Line>

      <S.SelectInputWrapper>
        <S.Show>Show</S.Show>
        <S.SelectInput
          defaultValue={options[0]}
          options={options}
          styles={colorStyles}
          isSearchable={false}
        />
      </S.SelectInputWrapper>

      <S.TableWrapper>
        <Table columns={columns} data={tableData} />
      </S.TableWrapper>
    </S.Wrapper>
  )
}

export default TicketHistoryScreen
