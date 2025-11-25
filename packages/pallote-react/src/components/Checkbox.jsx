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
  dense,
  onChange,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'checkbox',
        { 
          'checkbox-disabled': disabled,
          'checkbox-dense': dense
        },
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
        onChange={onChange}
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
  dense: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.node
}
