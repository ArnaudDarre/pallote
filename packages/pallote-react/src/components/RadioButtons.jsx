import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { InputLabel } from './InputLabel'

export const RadioButtons = ({
  id,
  label = 'Label',
  direction = 'portrait',
  error,
  disabled,
  optional,
  dense,
  hint,
  hideLabel,
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
          'input-optional': optional,
          'input-dense': dense
        },
        className
      ])}
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
        hideLabel={hideLabel}
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
        {children}
      </div>
    </fieldset>
  )
}

RadioButtons.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  optional: PropTypes.bool,
  dense: PropTypes.bool,
  hint: PropTypes.string,
  hideLabel: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.node
}
