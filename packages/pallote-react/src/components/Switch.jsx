import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from '../utilities/Text'

export const Switch = ({
  id,
  startLabel,
  endLabel,
  disabled,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'switch',
        { 'switch-disabled': disabled },
        className
      ])}
    >
      {startLabel ? <Text className={classnames('switch_label')} variant="body">{startLabel}</Text> : null}
      <input
        className={classnames('switch_input')}
        type="checkbox"
        name={id}
        id={id}
        disabled={disabled}
        {...props}
      />
      <label
        className={classnames('switch_switch')}
        htmlFor={id}
      >
        <div className={classnames('switch_toggle')} />
      </label>
      {endLabel ? <Text className={classnames('switch_label')} variant="body">{endLabel}</Text> : null}
    </div>
  )
}

Switch.propTypes = {
  id: PropTypes.string,
  startLabel: PropTypes.string,
  endLabel: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.node
}
