import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string
  children: ReactNode
}

export const TableRow = ({ className, children, ...props }: TableRowProps) => {
  return (
    <tr
      className={classnames([
        'table_row',
        className
      ])}
      {...props}
    >
      {children}
    </tr>
  )
}
