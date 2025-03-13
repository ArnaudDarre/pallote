import React, { useContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { TableCellComponentContext } from './TableHead'

export const TableCell = ({ kind = 'default', className, children, ...props }) => {

  const useTableCellComponent = () => useContext(TableCellComponentContext)
  const Component = useTableCellComponent()

  return (
    <Component
      className={classnames([
        'table_cell',
        {
          [`table_cell-${kind}`]: kind,
        },
        className
      ])}
      {...props}
    >
      {children}
    </Component>
  )
}

TableCell.propTypes = {
  kind: PropTypes.oneOf([
    'default',
    'number',
    'action'
  ]),
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
