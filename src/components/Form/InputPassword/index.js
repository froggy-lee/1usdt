import React, { useState } from 'react'
import Image from 'next/image'
import * as S from './styles'

const InputPassword = ({
  label,
  type,
  name,
  placeholder,
  className,
  formik = {},
  ...rest
}) => {
  const [isHide, setIsHide] = useState(false)
  const { handleChange, handleBlur, values, errors, touched } = formik

  //onClick={() => setIsHide(prevState => !prevState)}

  return (
    <S.InputPassword className={className}>
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          className={errors?.[name] && touched?.[name] && 'isvalid'}
          type={isHide ? 'text' : type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.[name]}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setIsHide(prevState => !prevState)}
          className="btn-password"
        >
          <Image
            src={
              isHide
                ? '/images/icons/show-pass.png'
                : '/images/icons/hide-pass.png'
            }
            width={22}
            height={20}
            alt=""
          />
        </button>
      </div>
      <span className="text-error">
        {errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
    </S.InputPassword>
  )
}

export default InputPassword
