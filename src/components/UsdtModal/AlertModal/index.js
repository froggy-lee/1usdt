import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ModalBody } from 'reactstrap'
import Image from 'next/image'
import * as S from './styles'

function AlertModal(props) {
  const { type, title, des, onToggle, isOpen } = props
  return (
    <div>
      <S.ModalWrapper
        isOpen={isOpen}
        toggle={onToggle}
        className="modal-styles"
      >
        <ModalBody>
          <div className="img">
            <Image
              src={
                type
                  ? '/images/icons/success-icon.png'
                  : '/images/icons/failed-icon.png'
              }
              width={94}
              height={94}
              alt="icon"
            />
          </div>
          <S.Title>{title}</S.Title>
          <S.Des>{des}</S.Des>
        </ModalBody>
      </S.ModalWrapper>
    </div>
  )
}

export default AlertModal
