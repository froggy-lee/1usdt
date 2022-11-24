import React, { useState, useMemo, useRef, useCallback } from 'react'
import * as S from './styles'
import QRCode from 'qrcode.react'
import Table from '/src/components/Table'
import {
  DateTimeColumn,
  AmountColumn,
  TransactionIdColumn,
  StatusColumn
} from '/src/modules/ProfileModule/components/Columns'
import { toast } from 'react-toastify'

const fakeDataTable = [
  {
    id: 1,
    date: '07/07/2022',
    time: '09:00 AM',
    amount: '32',
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    status: 'Completed'
  },
  {
    id: 2,
    date: '07/07/2022',
    time: '09:00 AM',
    amount: '32',
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    status: 'failed'
  },
  {
    id: 3,
    date: '07/07/2022',
    time: '09:00 AM',
    amount: '32',
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    status: 'Completed'
  },
  {
    id: 4,
    date: '07/07/2022',
    time: '09:00 AM',
    amount: '32',
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    status: 'Completed'
  },
  {
    id: 5,
    date: '07/07/2022',
    time: '09:00 AM',
    amount: '32',
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    status: 'failed'
  },
  {
    id: 6,
    date: '07/07/2022',
    time: '09:00 AM',
    amount: '32',
    transactionId: 's5whjvsshg174jjfs83kvnjebkgh1uyhfsjkb83',
    status: 'failed'
  }
]

const DepositScreen = () => {
  const [value] = useState(`mghQhxQBbP2SUe2RVk2ALjQcFAV4Exn9Y2`)
  const copyRef = useRef()

  const columns = useMemo(
    () => [
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
        Header: 'Amount',
        accessor: 'amount',
        Cell: ({ value }) => <AmountColumn amount={value} />
      },
      {
        Header: 'Transaction ID',
        accessor: 'transactionId',
        Cell: ({ value }) => <TransactionIdColumn id={value} />
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => <StatusColumn status={value} />
      }
    ],
    []
  )

  const copyValue = useCallback(() => {
    navigator.clipboard.writeText(copyRef.current.dataset.id)
    toast.success('Copy success')
  }, [])

  return (
    <S.Wrapper>
      <S.DepositWrapper>
        <div className="qr__section">
          <S.DepositNumberSection>
            <S.DepositNumberSectionTitle>
              Deposit USDT BEP20
            </S.DepositNumberSectionTitle>
            <S.DepositNumberSectionDescription>
              Number of USDT you like to deposit from wallet ID: <br />
              <S.WalletId ref={copyRef} data-id={value}>
                {value}
              </S.WalletId>
            </S.DepositNumberSectionDescription>
            <S.ButtonCopy
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyValue}
            >
              Copy ID
            </S.ButtonCopy>
          </S.DepositNumberSection>
          <S.DepositQrSection>
            <S.DepositQrSectionTitle>QR wallet ID :</S.DepositQrSectionTitle>
            <S.QrWrapper>
              <QRCode value={value} renderAs="svg" />
            </S.QrWrapper>
          </S.DepositQrSection>
        </div>
      </S.DepositWrapper>

      <S.TableWrapper>
        <Table columns={columns} data={fakeDataTable} />
      </S.TableWrapper>
    </S.Wrapper>
  )
}

export default DepositScreen
