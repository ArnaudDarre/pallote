import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Buttons = ({
  direction,
  fullWidth,
  wide,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'buttons',
        {
          [`buttons-${direction}`]: direction,
          'buttons-fullWidth': fullWidth,
          'buttons-wide': wide
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

Buttons.propTypes = {
  direction: PropTypes.oneOf([
    'landscape',
    'portrait'
  ]),
  fullWidth: PropTypes.bool,
  wide: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}

Buttons.defaultProps = {
  direction: 'landscape'
}
