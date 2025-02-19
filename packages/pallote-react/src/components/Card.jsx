import React, { createContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Color } from '../utilities/Color'

export const SizeContext = createContext('md')
export const PaddingContext = createContext(false)
export const DirectionContext = createContext('portrait')

export const Card = ({
  size,
  fill,
  direction,
  align,
  noPadding,
  hasShadow,
  transparent,
  className,
  children,
  ...props
}) => {

  return (
    <SizeContext.Provider value={size}>
      <PaddingContext.Provider value={noPadding}>
        <DirectionContext.Provider value={direction}>
          <Color fill={transparent || noPadding ? null : fill}>
            <div
              className={classnames([
                'card',
                {
                  [`card--${size}`]: size,
                  [`card--${direction}`]: direction,
                  [`card--${align}`]: align,
                  'card--hasShadow': hasShadow,
                  'card--transparent': transparent
                },
                className
              ])}
              {...props}
            >
              {children}
            </div>
          </Color>
        </DirectionContext.Provider>
      </PaddingContext.Provider>
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
    'main',
    'contrast',
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
  noPadding: PropTypes.bool,
  hasShadow: PropTypes.bool,
  transparent: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}

Card.defaultProps = {
  size: 'md',
  fill: 'paper',
  direction: 'portrait',
  align: 'left',
  noPadding: false,
  hasShadow: false,
  transparent: false
}
