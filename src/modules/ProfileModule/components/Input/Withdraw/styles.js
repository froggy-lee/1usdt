import styled from 'styled-components'
import Input from '/src/components/Form/Input'

export const InputWrapper = styled(Input)`
  position: relative;
  margin: 0;
  gap: 0;

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
    padding-left: ${props => (props.icon ? '6rem' : '2rem')};
  }
`

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-2.3rem);
  left: 2rem;
`
