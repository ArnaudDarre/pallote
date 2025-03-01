import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Grid = ({
  item,
  wrap,
  direction,
  justifyContent,
  alignItems,
  alignSelf,
  col,
  xs,
  sm,
  md,
  lg,
  xl,
  spacing,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classnames(
        item ? 'grid_item' : 'grid',
        {
          'grid-wrap': wrap,
          [`grid-${direction}`]: direction,
          [`grid-jc-${justifyContent}`]: justifyContent,
          [`grid-ai-${alignItems}`]: alignItems,
          [`grid-as-${alignSelf}`]: alignSelf,
          [`grid_item-${col}`]: col,
          [`grid_item-xs-${xs}`]: xs,
          [`grid_item-sm-${sm}`]: sm,
          [`grid_item-md-${md}`]: md,
          [`grid_item-lg-${lg}`]: lg,
          [`grid_item-xl-${xl}`]: xl,
          [`grid-spacing-${spacing}`]: spacing
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Grid.propTypes = {
  item: PropTypes.bool,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf([
    'column',
    'columnReverse',
    'row',
    'rowReverse'
  ]),
  justifyContent: PropTypes.oneOf([
    'center',
    'end',
    'start',
    'spaceAround',
    'spaceBetween',
    'spaceEvenly'
  ]),
  alignItems: PropTypes.oneOf([
    'stretch',
    'center',
    'end',
    'start',
    'baseline'
  ]),
  alignSelf: PropTypes.oneOf([
    'stretch',
    'center',
    'end',
    'start',
    'baseline'
  ]),
  col: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  xs: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  sm: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  md: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  lg: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  xl: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  spacing: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  className: PropTypes.node,
  children: PropTypes.node
}
