import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Loader = ({
  variant = 'dots',
  color = 'primary',
  className,
  ...props
}) => {

  let child

  if (variant === 'dots') {
    child = <><span /><span /><span /></>
  } else if (variant === 'circle') {
    child = <><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></>
  }

  return (
    <span
      className={classnames([
        'loader',
        {
          [`loader-${variant}`]: variant,
          [`loader-${color}`]: color
        },
        className
      ])}
      {...props}
    >
      {child}
    </span>
  )
}

Loader.propTypes = {
  variant: PropTypes.oneOf([
    'dots',
    'circle'
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'black',
    'white'
  ]),
  className: PropTypes.node
}
