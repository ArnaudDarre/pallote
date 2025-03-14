import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { X } from '@phosphor-icons/react'

import { Color } from '../utilities/Color'

export const Chip = ({
  color = 'paper',
  dense,
  avatar,
  disabled,
  onClose = null,
  className,
  children,
  ...props
}) => {

  return (
    <Color fill={color}>
      <div
        className={classnames([
          'chip',
          {
            'chip-dense': dense,
            'chip-disabled': disabled
          },
          className
        ])}
        {...props}
      >
        {avatar ? <img className={classnames('chip_avatar')} src={avatar} /> : null}
        <div className={classnames('chip_content')}>
          {children}
        </div>
        {onClose ? <X className={classnames('chip_close')} size={dense ? 16 : 24} /> : null}
      </div>
    </Color>
  )
}

Chip.propTypes = {
  color: PropTypes.oneOf([
    'paper',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error'
  ]),
  dense: PropTypes.bool,
  avatar: PropTypes.node,
  disabled: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
