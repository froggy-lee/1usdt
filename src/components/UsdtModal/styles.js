import styled from 'styled-components'
import { Modal } from 'reactstrap'

export const ModalWrapper = styled(Modal)`
  width: ${props => (props.width ? props.width + 'rem' : '100%')};
  margin-top: 10rem;

  @media (max-width: 575px) {
    width: 90%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
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
        border: 3px solid #000000;
        width: 2em;
        height: 2em;
        border-radius: 3.25rem;
        opacity: 1;
      }
    }
    .modal-footer {
      border-top: none;
      display: none;
    }
  }
`
