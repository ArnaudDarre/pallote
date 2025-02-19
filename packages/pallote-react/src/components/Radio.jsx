import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Radio = ({
  id,
  name,
  value,
  label,
  checked,
  disabled,
  optional,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'radio',
        { 'radio-disabled': disabled },
        className
      ])}
    >
      <input
        className={classnames('radio_control')}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        aria-checked={checked}
        disabled={disabled}
        required={!(disabled || optional)}
        {...props}
      />
      <label
        className={classnames('radio_label')}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  className: PropTypes.node
}
