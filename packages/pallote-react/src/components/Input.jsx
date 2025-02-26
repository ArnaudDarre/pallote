import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {
  CalendarBlank,
  CaretUpDown,
  Clock
} from '@phosphor-icons/react'

export const Input = ({
  onChange,
  type = 'text',
  id,
  placeholder,
  label = 'Input',
  icon,
  isFocused,
  error,
  disabled,
  optional,
  hint,
  className,
  ...props
}) => {

  const inputRef = useRef(null)

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  const customIcon =
    icon ||
    (type === 'date' && <CalendarBlank />) ||
    (type === 'time' && <Clock />) ||
    (type === 'number' && <CaretUpDown />)

  return (
    <div
      className={classnames([
        'input',
        {
          'js-error': error,
          'input-disabled': disabled,
          'input-optional': optional,
          'input-withIcon': icon
        },
        className
      ])}
      onChange={onChange}
    >
      {label && <label className={'input_label'} htmlFor={id}>{label}</label>}
      {hint && <p className={'input_hint'}>{hint}</p>}
      {customIcon && <div className={'input_icon'}>{customIcon}</div>}
      <input
        ref={inputRef}
        type={type}
        className={'input_control'}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        required={!(disabled || optional)}
        aria-description={hint}
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'date',
    'email',
    'number',
    'tel',
    'text',
    'time'
  ]),
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  isFocused: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  hint: PropTypes.string,
  className: PropTypes.node
}
