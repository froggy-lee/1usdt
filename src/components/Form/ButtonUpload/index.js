import React, { useCallback } from 'react'

import * as S from './styles'

const ButtonUpload = ({ children, className, getAvatar, ...rest }) => {
  const onFileChange = useCallback(
    event => {
      const file = event.target.files[0]
      const objectUrl = URL.createObjectURL(file)
      getAvatar(objectUrl)

      return () => URL.revokeObjectURL(objectUrl)
    },
    [getAvatar]
  )

  return (
    <S.ButtonUpload
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={className}
      {...rest}
    >
      {children}
      <input
        type="file"
        onChange={onFileChange}
        accept="image/png, image/jpg, image/gif, image/jpeg"
      />
    </S.ButtonUpload>
  )
}

export default ButtonUpload
