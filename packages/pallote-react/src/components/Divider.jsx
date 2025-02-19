import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Divider = ({
  direction,
  size,
  className,
  ...props
}) => {

  return (
    <div
      className={classnames([
        'divider',
        {
          [`divider-${direction}`]: direction,
          [`divider-${size}`]: size
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
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  className: PropTypes.node
}

Divider.defaultProps = {
  direction: 'landscape',
  size: 'md'
}
