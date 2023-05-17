import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import * as S from './styles'

function UsdtModal(props) {
  const { width, isOpen, onToggle, title, children } = props
  return (
    <div>
      <S.ModalWrapper
        isOpen={isOpen}
        toggle={onToggle}
        className="modal-styles"
        width={width}
      >
        <ModalHeader toggle={onToggle}>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter />
      </S.ModalWrapper>
    </div>
  )
}

export default UsdtModal
