import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { InputLabel } from './InputLabel'

export const Checkboxes = ({
  onChange,
  id,
  label = 'Label',
  direction = 'portrait',
  error,
  disabled,
  optional,
  hint,
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
      {...(hint || error
        ? {
            'aria-describedby': [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
              .filter(Boolean)
              .join(' '),
          }
        : null
      )}
    >
      <InputLabel
        isLegend
        label={label}
        hint={hint}
        error={error}
      />
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

Checkboxes.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  hint: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.node
}
