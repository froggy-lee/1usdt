import Image from 'next/image'
import * as S from './styles'
import { useMemo } from 'react'
import Table from '/src/components/Table'
import {
  DateColumn,
  NumbersColumn,
  WinnersColumn
} from '/src/modules/WinningNumbersPage/ColumnWinnings'

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

const colourStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
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

const Tabs = () => {
  const dataTable = [
    {
      date: '07/08/2022',
      input1: '32',
      input2: '51',
      input3: '55',
      input4: '02',
      input5: '29',
      input6: '51',
      winners: '112'
    },
    {
      date: '07/08/2022',
      input1: '32',
      input2: '51',
      input3: '55',
      input4: '02',
      input5: '29',
      input6: '51',
      winners: '112'
    },
    {
      date: '07/08/2022',
      input1: '32',
      input2: '51',
      input3: '55',
      input4: '02',
      input5: '29',
      input6: '51',
      winners: '112'
    },
    {
      date: '07/08/2022',
      input1: '32',
      input2: '51',
      input3: '55',
      input4: '02',
      input5: '29',
      input6: '51',
      winners: '112'
    },
    {
      date: '07/08/2022',
      input1: '32',
      input2: '51',
      input3: '55',
      input4: '02',
      input5: '29',
      input6: '51',
      winners: '112'
    },
    {
      date: '07/08/2022',
      input1: '32',
      input2: '51',
      input3: '55',
      input4: '02',
      input5: '29',
      input6: '51',
      winners: '112'
    }
  ]

  const columns = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ value }) => <DateColumn date={value} />
      },
      {
        Header: 'Winning numbers',
        accessor: 'winning numbers',
        Cell: ({
          cell: {
            row: { original }
          }
        }) => <NumbersColumn numbers={original} />
      },
      {
        Header: 'Winners',
        accessor: 'winners',
        Cell: ({ value }) => <WinnersColumn winners={value} />
      }
    ],
    []
  )

  return (
    <S.Drop>
      <S.Wrapper>
        <S.ImageTop>
          <Image
            src={'/images/WinningHistory.png'}
            width="2000px"
            height="260"
            alt="winning history"
          />
        </S.ImageTop>
        <S.Center>
          <S.Title>Show</S.Title>
          <S.SelectInputWrapper>
            <S.SelectInput
              defaultValue={options[0]}
              options={options}
              styles={colourStyles}
              isSearchable={false}
            />
          </S.SelectInputWrapper>
        </S.Center>
        <S.WrapperTable>
          <Table columns={columns} data={dataTable} />
        </S.WrapperTable>
      </S.Wrapper>
    </S.Drop>
  )
}

export default Tabs
