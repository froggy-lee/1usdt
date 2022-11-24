import styled from 'styled-components'
import { Modal } from 'reactstrap'

export const ModalWrapper = styled(Modal)`
  width: 40rem;
  margin-top: 15rem;
  @media (max-width: 575px) {
    width: 90%;
    margin: auto;
    margin-top: 15rem;
  }
  &.modal-dialog {
    max-width: 100%;
  }
  .modal-content {
    padding: 1rem 1.5rem;
    border-radius: 25px;
    @media (max-width: 575px) {
      padding: 0.5rem;
    }
    .modal-header {
      border-bottom: none;
      .modal-title {
        font-weight: 700;
        font-size: 25px;
        line-height: 45px;
        color: #000000;
        @media (max-width: 575px) {
          font-size: 20px;
          line-height: 25px;
        }
      }
      .btn-close {
        display: none;
      }
    }
    .modal-footer {
      border-top: none;
      display: none;
    }
  }
  .img {
    display: flex;
    justify-content: center;
  }
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #4a4a4a;
  margin-top: 1rem;
`
export const Des = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #4a4a4a;
  margin-top: 1rem;
`
