import { createContext, HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

export const TableCellComponentContext = createContext<'td' | 'th'>('td')

export interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string
  children: ReactNode
}

export const TableHead = ({ className, children, ...props }: TableHeadProps) => {
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
