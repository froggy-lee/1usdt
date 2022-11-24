import React, { useState, useCallback } from 'react'
import * as S from './styles'
import {
  InputProfileName,
  InputAvatar
} from '/src/modules/ProfileModule/components/Input'
import { FacebookIcon, GoogleIcon } from '/public/svgs'
import Image from 'next/image'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const user = {
  id: 1,
  name: 'Nhung popcorn',
  walletId: 'tshhain170',
  email: 'iamshin170@gmail.com',
  avatar: '/images/fake-avatar.png'
}

const ProfileScreen = () => {
  const [preview, setPreview] = useState()

  const getAvatar = useCallback(img => {
    setPreview(img)
  }, [])

  const initialValues = {
    username: user.name
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Required')
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => handleSubmitData(values)
  })

  const { handleSubmit, values } = formik

  const handleSubmitData = useCallback(() => {}, [])

  return (
    <S.Wrapper>
      <S.Title>My profile</S.Title>
      <S.Description>
        Manage profile information for account security
      </S.Description>

      <S.UserInfoWrapper onSubmit={handleSubmit}>
        <S.InfoWrapper>
          <S.InfoItem>
            <S.InfoItemLabel>User name :</S.InfoItemLabel>
            <S.InfoItemContent>
              <InputProfileName
                name="username"
                value={values.username}
                formik={formik}
              />
            </S.InfoItemContent>
          </S.InfoItem>

          <S.InfoItem>
            <S.InfoItemLabel>Wallet ID: </S.InfoItemLabel>
            <S.InfoItemContent>{user.walletId}</S.InfoItemContent>
          </S.InfoItem>

          <S.InfoItem>
            <S.InfoItemLabel>Mail: </S.InfoItemLabel>
            <S.InfoItemContent>{user.email}</S.InfoItemContent>
          </S.InfoItem>

          <S.InfoItem>
            <S.InfoItemLabel>Link: </S.InfoItemLabel>
            <S.ConnectWrapper>
              <S.FacebookConnect>
                <span className="connect__title"></span>
                <div className="connect__content">
                  <FacebookIcon />
                </div>
              </S.FacebookConnect>
              <S.GoogleConnect>
                <span className="connect__title">Google connect</span>
                <div className="connect__content">
                  <GoogleIcon />
                </div>
              </S.GoogleConnect>
            </S.ConnectWrapper>
          </S.InfoItem>
        </S.InfoWrapper>
        <S.ChangeAvatarWrapper>
          <S.PreviewAvatar>
            <Image
              src={preview || '/images/fake-avatar.png'}
              layout="fill"
              alt="avatar"
              objectFit="cover"
            />
          </S.PreviewAvatar>
          <InputAvatar getAvatar={getAvatar}>Choose a photo</InputAvatar>
          <S.InputAvatarDescription>
            Maximum file size 1 MB <br />
            Format: .JPEG, .PNG
          </S.InputAvatarDescription>
        </S.ChangeAvatarWrapper>
      </S.UserInfoWrapper>
    </S.Wrapper>
  )
}

export default ProfileScreen
