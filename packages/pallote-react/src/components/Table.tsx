import { createContext, HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

import { TableFooter } from './TableFooter'

export const DenseContext = createContext<boolean>(false)

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  striped?: boolean
  hasHover?: boolean
  dense?: boolean
  border?: boolean
  withFooter?: boolean
  className?: string
  children: ReactNode
}

export const Table = ({ striped, hasHover, dense, border, withFooter, className, children, ...props }: TableProps) => {
  return (
    <DenseContext.Provider value={dense ?? false}>
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
        {withFooter ? <TableFooter /> : null}
      </div>
    </DenseContext.Provider>
  )
}
