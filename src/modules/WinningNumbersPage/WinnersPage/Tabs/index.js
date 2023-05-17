import * as S from './styles'
import Image from 'next/image'
import { useMemo } from 'react'
import Table from '/src/components/Table'
import {
  MatchColumn,
  NumbersColumn,
  AmountColumn,
  PrizeColumn
} from '/src/modules/WinningNumbersPage/WinnersPage/ColumnWinners'
import { useRouter } from 'next/router'

const Tabs = () => {
  const dataTable = [
    {
      match: '',
      numbers: 1,
      win: '48 Million USDT',
      prize: 'Jackpot'
    },
    {
      match: '',
      numbers: 3,
      win: '100, 000 USDT',
      prize: '1st'
    },
    {
      match: '',
      numbers: 17,
      win: '50, 000 USDT',
      prize: '2nd'
    },
    {
      match: '',
      numbers: 185,
      win: '100 USDT',
      prize: 'Consolation'
    }
  ]

  const columns = useMemo(
    () => [
      {
        Header: 'Match',
        accessor: 'match',
        Cell: ({ value }) => <MatchColumn match={value} />
      },
      {
        Header: 'Total Winner',
        accessor: 'numbers',
        Cell: ({ value }) => <NumbersColumn numbers={value} />
      },
      {
        Header: 'Win amount',
        accessor: 'win',
        Cell: ({ value }) => <AmountColumn win={value} />
      },
      {
        Header: 'Prize',
        accessor: 'prize',
        Cell: ({ value }) => <PrizeColumn prize={value} />
      }
    ],
    []
  )

  const router = useRouter()
  const handleWinningHistory = () => {
    router.push('/winning-numbers')
  }

  return (
    <S.Wrapper>
      <S.WrapperTop>
        <S.Top>
          <S.Title>
            <div className="arrow-left" onClick={handleWinningHistory}>
              <Image
                src={'/images/arrowleft.png'}
                width={25}
                height={20}
                alt="winning history"
              />
            </div>
            <div className="title-all">All Winners</div>
          </S.Title>
          <S.Date>Friday, 07/08/2022</S.Date>
        </S.Top>
        <S.TabContentWrapper>
          <S.WrapperTable>
            <Table columns={columns} data={dataTable} />
          </S.WrapperTable>
        </S.TabContentWrapper>
      </S.WrapperTop>
    </S.Wrapper>
  )
}

export default Tabs
