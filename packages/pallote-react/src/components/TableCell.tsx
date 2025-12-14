import { useContext, TdHTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

import { TableCellComponentContext } from './TableHead'

type TableCellKind = 'default' | 'number' | 'action'

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  kind?: TableCellKind
  className?: string
  children: ReactNode
}

export const TableCell = ({ kind = 'default', className, children, ...props }: TableCellProps) => {
  const Component = useContext(TableCellComponentContext)

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
