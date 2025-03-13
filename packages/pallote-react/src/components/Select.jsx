import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { InputLabel } from './InputLabel'

export const Select = ({
  onChange,
  id,
  label = 'Select',
  isFocused,
  error,
  disabled,
  optional,
  dense,
  hint,
  children,
  className,
  ...props
}) => {

  const inputRef = useRef(null)

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <div
      className={classnames([
        'input',
        'select',
        {
          'input-focused': isFocused,
          'js-error': error,
          'input-disabled': disabled,
          'input-optional': optional,
          'input-dense': dense,
        },
        className
      ])}
      onChange={onChange}
    >
      <InputLabel
        htmlFor={id}
        label={label}
        hint={hint}
        error={error}
      />
      <select
        ref={inputRef}
        className={'input_control'}
        name={id}
        id={id}
        disabled={disabled}
        required={!(disabled || optional)}
        aria-description={hint}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

Select.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isFocused: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  dense: PropTypes.bool,
  hint: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.node
}
