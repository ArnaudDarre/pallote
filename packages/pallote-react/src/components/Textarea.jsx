import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Textarea = ({
  onChange,
  id,
  placeholder,
  label,
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

  return (
    <div
      className={classnames([
        'input',
        {
          'js-error': error,
          'input-disabled': disabled,
          'input-optional': optional
        },
        className
      ])}
      onChange={onChange}
    >
      {label && <label className={'input_label'} htmlFor={id}>{label}</label>}
      {hint && <p className={'input_hint'}>{hint}</p>}
      <textarea
        ref={inputRef}
        className={'input_control'}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        required={!(disabled || optional)}
        rows={4}
        aria-description={hint}
        {...props}
      ></textarea>
    </div>
  )
}

Textarea.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isFocused: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  hint: PropTypes.string,
  className: PropTypes.node
}

Textarea.defaultProps = {
  label: 'Text input'
}
