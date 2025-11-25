import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { InputLabel } from './InputLabel'

export const Textarea = ({
  onChange,
  id,
  placeholder,
  label = 'Textarea',
  isFocused,
  error,
  disabled,
  optional,
  dense,
  hint,
  hideLabel,
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
        {
          'js-error': error,
          'input-disabled': disabled,
          'input-optional': optional,
          'input-dense': dense
        },
        className
      ])}
    >
      <InputLabel
        htmlFor={id}
        label={label}
        hint={hint}
        error={error}
        hideLabel={hideLabel}
      />
      <textarea
        ref={inputRef}
        className={'input_control'}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        required={!(disabled || optional)}
        rows={4}
        onChange={onChange}
        {...(hint || error
          ? {
              'aria-describedby': [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
                .filter(Boolean)
                .join(' '),
            }
          : null
        )}
        {...props}
      ></textarea>
    </div>
  )
}

Textarea.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  isFocused: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  dense: PropTypes.bool,
  hint: PropTypes.string,
  hideLabel: PropTypes.bool,
  className: PropTypes.node
}
