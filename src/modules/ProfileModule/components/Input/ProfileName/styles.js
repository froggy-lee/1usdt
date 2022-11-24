import styled from 'styled-components'
import Input from '/src/components/Form/Input'

export const InputWrapper = styled(Input)`
  flex-direction: column;
  align-items: left;
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

    font-weight: 500;
    font-size: 16px;

    ::placeholder {
      color: #000000;
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: #000000;
    }

    ::-ms-input-placeholder {
      color: #000000;
    }
  }

  .text-error {
    height: 0;
  }
`
