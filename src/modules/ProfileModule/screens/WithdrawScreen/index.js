import React, { useMemo, useCallback } from 'react'
import * as S from './styles'
import Image from 'next/image'
import {
  DateTimeColumn,
  AmountColumn,
  TransactionIdColumn,
  StatusColumn
} from '/src/modules/ProfileModule/components/Columns'
import Table from '/src/components/Table'
import { InputWithdraw } from '/src/modules/ProfileModule/components/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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

const WithdrawScreen = () => {
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

  const initialValues = {
    walletId: '',
    amount: ''
  }

  const validationSchema = Yup.object({
    walletId: Yup.string().required('Required'),
    amount: Yup.number().required()
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: values => handleSubmitData(values)
  })

  const { handleSubmit, values, resetForm } = formik

  const handleSubmitData = useCallback(() => {}, [])

  const handleResetForm = () => {
    resetForm()
  }

  return (
    <S.Wrapper>
      <S.WithdrawWrapper onSubmit={handleSubmit}>
        <div className="qr__section">
          <S.WithdrawNumberSection>
            <S.WithdrawNumberSectionTitle>
              Withdrawal USDT BEP20
            </S.WithdrawNumberSectionTitle>

            <S.WithdrawNumberSectionInputWrapper>
              <S.WithdrawNumberSectionDescription>
                Enter your wallet ID address: <br />
                <InputWithdraw
                  name="walletId"
                  placeholder="Wallet Id"
                  value={values.walletId}
                  formik={formik}
                />
              </S.WithdrawNumberSectionDescription>
            </S.WithdrawNumberSectionInputWrapper>

            <S.WithdrawNumberSectionInputWrapper>
              <S.WithdrawNumberSectionDescription>
                Enter the amount of USDT you want to withdraw: <br />
                <div className="icon-T">
                  <Image
                    src="/images/iconT.png"
                    width={29}
                    height={29}
                    alt=""
                  />
                </div>
                <div className="input-T">
                  <InputWithdraw
                    name="amount"
                    placeholder={`USDT amount`}
                    isIcon
                    value={values.amount}
                    formik={formik}
                  />
                </div>
              </S.WithdrawNumberSectionDescription>
            </S.WithdrawNumberSectionInputWrapper>
          </S.WithdrawNumberSection>
          <S.WithdrawQrSection>
            <S.WithdrawQrSectionTitle>
              Scan wallet ID:{' '}
            </S.WithdrawQrSectionTitle>
            <S.QrWrapper>
              <S.QrScan>
                <Image
                  src="/images/icons/scan-qr.png"
                  width={84}
                  height={84}
                  alt=""
                />
              </S.QrScan>
            </S.QrWrapper>
          </S.WithdrawQrSection>
        </div>

        <S.WithdrawButtonSection>
          <S.WithdrawButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Withdraw
          </S.WithdrawButton>
          <S.ClearButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResetForm}
          >
            Clear
          </S.ClearButton>
        </S.WithdrawButtonSection>
      </S.WithdrawWrapper>

      <S.TableWrapper>
        <Table columns={columns} data={fakeDataTable} />
      </S.TableWrapper>
    </S.Wrapper>
  )
}

export default WithdrawScreen
