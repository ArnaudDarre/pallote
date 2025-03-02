import React, { createContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const TableCellComponentContext = createContext('td')

export const TableHead = ({ className, children, ...props }) => {
  return (
    <TableCellComponentContext.Provider value='th'>
      <thead
        className={classnames([
          'table_head',
          className
        ])}
        {...props}
      >
        {children}
      </thead>
    </TableCellComponentContext.Provider>
  )
}

TableHead.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node
}
