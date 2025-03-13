import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Checkbox = ({
  id,
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
        'checkbox',
        { 'checkbox-disabled': disabled },
        className
      ])}
    >
      <input
        className={classnames('checkbox_control')}
        type="checkbox"
        name={id}
        id={id}
        value={value}
        checked={checked}
        aria-checked={checked}
        disabled={disabled}
        required={!(disabled || optional)}
        {...props}
      />
      <label
        className={classnames('checkbox_label')}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  className: PropTypes.node
}
