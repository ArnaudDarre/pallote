import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Divider = ({
  direction = 'landscape',
  padding = 'md',
  className,
  ...props
}) => {

  return (
    <div
      className={classnames([
        'divider',
        {
          [`divider-${direction}`]: direction,
          [`divider-${padding}`]: padding
        },
        className
      ])}
      {...props}
    />
  )
}

Divider.propTypes = {
  direction: PropTypes.oneOf([
    'landscape',
    'portrait'
  ]),
  padding: PropTypes.oneOf([
    'none',
    'sm',
    'md',
    'lg'
  ]),
  className: PropTypes.node
}
