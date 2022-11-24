import Link from 'next/link'
import { useMemo } from 'react'
import * as S from './styles'
import Table from '/src/components/Table'
import {
  RatioColumn,
  MatchColumn,
  AmountColumn,
  PrizeColumn
} from '/src/modules/PrizeStructurePage/ColumnPrizeStructure'

const Tabs = () => {
  const fakeApi = [
    {
      id: 1,
      title: 'Jackpot',
      note: '6 pairs of numbers'
    },
    {
      id: 2,
      title: 'First prize',
      note: '5 pairs of numbers '
    },
    {
      id: 3,
      title: 'Second prize',
      note: '4 pairs of numbers'
    },
    {
      id: 4,
      title: 'Consolation prize',
      note: 'The last pair of numbers of the prize (red)'
    }
  ]

  const dataTable = [
    {
      prize: 'Jackpot',
      match: '',
      win: '48 Million USDT',
      ratio: 'A %'
    },
    {
      prize: '1st',
      match: '',
      win: '100, 000 USDT',
      ratio: 'B %'
    },
    {
      prize: '2nd',
      match: '',
      win: '50, 000 USDT',
      ratio: 'C %'
    },
    {
      prize: 'Consolation',
      match: '',
      win: '100 USDT',
      ratio: 'D %'
    }
  ]

  const columns = useMemo(
    () => [
      {
        Header: 'Prize',
        accessor: 'prize',
        Cell: ({ value }) => <PrizeColumn prize={value} />
      },
      {
        Header: 'Match',
        accessor: 'match',
        Cell: ({ value }) => <MatchColumn match={value} />
      },
      {
        Header: 'Win Amount',
        accessor: 'win',
        Cell: ({ value }) => <AmountColumn win={value} />
      },
      {
        Header: 'Prize Ratio',
        accessor: 'ratio',
        Cell: ({ value }) => <RatioColumn ratio={value} />
      }
    ],
    []
  )
  return (
    <S.Layout>
      <S.Wrapper>
        <div>
          <S.TitleTop>Prize structures</S.TitleTop>
          <S.WrapperTable>
            <Table columns={columns} data={dataTable} />
          </S.WrapperTable>
          <S.TitleCenter>
            <S.Note>Note :</S.Note>
            <S.Box></S.Box>
            <S.TitleNote>Special number</S.TitleNote>
          </S.TitleCenter>
        </div>
        <S.WrapperContent>
          <S.Content>
            Consists of 4 prizes with 6 pairs of numbers from 1 to 55 and these
            numbers are not required in order.
          </S.Content>
          {fakeApi.map(item => (
            <S.TitleBottom key={item.id} id={item.id}>
              <S.Prize>● {item?.title} :</S.Prize>
              <S.NoteBot>{item?.note}</S.NoteBot>
            </S.TitleBottom>
          ))}
        </S.WrapperContent>
        <S.Line></S.Line>
        <S.WrapperBottom>
          <S.TitleButton>
            See more of our <span>TERMS {'&'} CONDITIONS</span> and{' '}
            <span>POLICY</span>
          </S.TitleButton>
          <S.Button>
            <S.Term>
              <Link href="/terms">
                <a>TERMS {'&'} CONDITIONS</a>
              </Link>
            </S.Term>
            <S.Policy>
              <Link href="/policy">
                <a>POLICY</a>
              </Link>
            </S.Policy>
          </S.Button>
        </S.WrapperBottom>
      </S.Wrapper>
    </S.Layout>
  )
}

export default Tabs
