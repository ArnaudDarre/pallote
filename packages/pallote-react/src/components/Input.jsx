import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { CalendarBlankIcon } from "@phosphor-icons/react/dist/csr/CalendarBlank";
import { CaretUpDownIcon } from "@phosphor-icons/react/dist/csr/CaretUpDown";
import { ClockIcon } from "@phosphor-icons/react/dist/csr/Clock";

import { InputLabel } from './InputLabel'

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
    (type === 'date' && <CalendarBlankIcon />) ||
    (type === 'time' && <ClockIcon />) ||
    (type === 'number' && <CaretUpDownIcon />)

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
      <InputLabel
        htmlFor={id}
        label={label}
        hint={hint}
        error={error}
      />
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
        {...(hint || error
          ? {
              'aria-describedby': [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
                .filter(Boolean)
                .join(' '),
            }
          : null
        )}
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
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  isFocused: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  hint: PropTypes.string,
  className: PropTypes.node
}
