import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Input = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1rem;
  outline: none;

  label,
  div {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.blackColor};
  }

  input {
    outline: none;
    height: 5.6rem;
    border: 1px solid ${({ theme }) => theme.blackColor};
    border-radius: 25px;
    padding: 2rem 1.6rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.blackColor};
  }

  input.isvalid {
    outline: 1px solid red;
    border: 1px solid red !important;
    color: red;
    outline: none;

    &::placeholder {
      color: red;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: red;
    }

    &::-ms-input-placeholder {
      color: red;
    }
  }

  .text-error {
    color: red;
    font-size: 14px;
    height: 1.5rem;
  }
`
