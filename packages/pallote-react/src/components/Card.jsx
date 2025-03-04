import React, { createContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Color } from '../utilities/Color'

export const SizeContext = createContext('md')

export const Card = ({
  size = 'md',
  fill = 'paper',
  direction = 'portrait',
  align = 'left',
  hasShadow = false,
  transparent = false,
  className,
  children,
  ...props
}) => {

  return (
    <SizeContext.Provider value={size}>
      <Color fill={transparent ? null : fill}>
        <div
          className={classnames([
            'card',
            {
              [`card-${size}`]: size,
              [`card-${direction}`]: direction,
              [`card-${align}`]: align,
              'card-hasShadow': hasShadow,
              'card-transparent': transparent
            },
            className
          ])}
          {...props}
        >
          {children}
        </div>
      </Color>
    </SizeContext.Provider>
  )
}

Card.propTypes = {
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
  ]),
  fill: PropTypes.oneOf([
    'default',
    'paper',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error'
  ]),
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  hasShadow: PropTypes.bool,
  transparent: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}
