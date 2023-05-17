import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.blackColor};
`

export const Description = styled.h2`
  font-weight: 500;
  font-size: 16px;
  color: #474747;
`

export const UserInfoWrapper = styled.form`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`

export const InfoWrapper = styled.div`
  width: 100%;
  border: none;
  padding: 2rem;
  @media screen and (min-width: 1280px) {
    width: 70%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-left: none;
    padding: 4rem 2rem;
  }
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 2rem 0;
`

export const InfoItemLabel = styled.span`
  width: 30%;

  font-weight: 500;
  font-size: 16px;
  color: #8e8e8e;
  margin-right: 1rem;
  text-align: right;
`

export const InfoItemContent = styled.span`
  width: 60%;
  font-weight: 500;
  font-size: 16px;
`

export const ConnectWrapper = styled(InfoItemContent)`
  display: flex;
`

export const ConnectSocialButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 5px;

  .connect__content {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
`

export const FacebookConnect = styled(ConnectSocialButton)`
  margin-right: 1rem;

  .connect__content {
    svg {
      path {
        fill: ${({ theme }) => theme.mainColor};
      }
    }
  }
`

export const GoogleConnect = styled(ConnectSocialButton)`
  background-color: ${({ theme }) => theme.blackColor};
  padding: 0.5rem 1rem;

  .connect__title {
    color: ${({ theme }) => theme.whiteColor};
    margin-right: 1rem;
  }
`

export const ChangeAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 4rem 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1280px) {
    width: 30%;
  }
`

export const PreviewAvatar = styled.div`
  width: 151px;
  height: 151px;
  margin: 2rem 0;
  position: relative;
  border-radius: 50%;

  span {
    border-radius: 50%;
  }
`

export const InputAvatarDescription = styled.span`
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 16px;
  color: #8e8e8e;
`
