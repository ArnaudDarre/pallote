import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const RadioButtons = ({
  onChange,
  id,
  label = 'Label',
  hint,
  error,
  disabled,
  optional,
  direction = 'portrait',
  children,
  className
}) => {

  return (
    <fieldset
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
      aria-description={hint}
    >
      {label && <legend className={'input_label'} htmlFor={id}>{label}</legend>}
      {hint && <p className={'input_hint'}>{hint}</p>}
      <div
        className={classnames([
          'input_control',
          'radios',
          {
            [`radios-${direction}`]: direction
          }
        ])}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { optional, disabled })
            : child
        )}
      </div>
    </fieldset>
  )
}

RadioButtons.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  hint: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.node
}
