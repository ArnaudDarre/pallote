import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Grid = ({
  item,
  wrap,
  direction,
  justify,
  items,
  self,
  gap,
  col,
  colxs,
  colsm,
  colmd,
  collg,
  colxl,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classnames(
        item ? 'flex_item' : 'flex',
        {
          'flex-wrap': wrap,
          [`direction-${direction}`]: direction,
          [`justify-${justify}`]: justify,
          [`items-${items}`]: items,
          [`slef-${self}`]: self,
          [`col-${col}`]: col,
          [`col-xs-${colxs}`]: colxs,
          [`col-sm-${colsm}`]: colsm,
          [`col-md-${colmd}`]: colmd,
          [`col-lg-${collg}`]: collg,
          [`col-xl-${colxl}`]: colxl,
          [`gap-${gap}`]: gap
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
  justify: PropTypes.oneOf([
    'center',
    'end',
    'start',
    'spaceAround',
    'spaceBetween',
    'spaceEvenly'
  ]),
  items: PropTypes.oneOf([
    'stretch',
    'center',
    'end',
    'start',
    'baseline'
  ]),
  self: PropTypes.oneOf([
    'stretch',
    'center',
    'end',
    'start',
    'baseline'
  ]),
  col: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  colxs: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  colsm: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  colmd: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  collg: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  colxl: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  gap: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]),
  className: PropTypes.node,
  children: PropTypes.node
}
