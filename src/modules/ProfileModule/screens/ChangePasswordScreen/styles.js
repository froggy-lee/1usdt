import styled from 'styled-components'
import Input from '/src/components/Form/Input'

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

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #f4f5f6;
`

export const ChangePasswordWrapper = styled.div`
  position: relative;
  padding: 4rem 0;
  width: 100%;

  @media screen and (min-width: 1280px) {
    width: 70%;
  }
`

export const Form = styled.form``

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 2rem 0 5rem;

  @media (max-width: 570px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FormTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #8e8e8e;
  text-align: right;

  margin-right: 2rem;
  width: 45%;

  @media (max-width: 570px) {
    text-align: left;
  }
`

export const FormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const FormInput = styled(Input)`
  width: 100%;
  margin: 0;
  gap: 0;
  outline: none;

  label {
    font-weight: 500;
    font-size: 16px;
    color: #8e8e8e;
  }

  input {
    width: 100%;
    height: 50px;
    border: 1px solid #c9c9c9;
    border-radius: 0.5rem;
  }
`

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 146px;
  width: 100%;
  padding: 1rem 2rem;
  margin: auto;

  text-transform: uppercase;
  text-align: center;

  color: ${({ theme }) => theme.whiteColor};
  background: ${({ theme }) => theme.mainColor};
  font-weight: 700;
  font-size: 18px;

  border: none;
  border-radius: 2.5rem;
`
