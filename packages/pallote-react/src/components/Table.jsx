import React, { createContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { TableFooter } from './TableFooter'

export const DenseContext = createContext(false)

export const Table = ({ striped, hasHover, dense, border, withFooter, className, children, ...props }) => {
  return (
    <DenseContext.Provider value={dense}>
      <div
        className={classnames([
          'table',
          {
            'table-striped': striped,
            'table-hasHover': hasHover,
            'table-dense': dense,
            'table-border': border
          },
          className
        ])}
      >
        <table
          cellPadding={0}
          cellSpacing={0}
          className={classnames('table_content')}
          {...props}
        >
          {children}
        </table>
        {withFooter ? <TableFooter dense={dense ? dense : null} /> : null}
      </div>
    </DenseContext.Provider>
  )
}

Table.propTypes = {
  striped: PropTypes.bool,
  hasHover: PropTypes.bool,
  dense: PropTypes.bool,
  border: PropTypes.bool,
  withFooter: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
