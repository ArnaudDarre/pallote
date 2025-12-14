import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string
  children: ReactNode
}

export const TableBody = ({ className, children, ...props }: TableBodyProps) => {
  return (
    <tbody
      className={classnames([
        'table_body',
        className
      ])}
      {...props}
    >
      {children}
    </tbody>
  )
}
