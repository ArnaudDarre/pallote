import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  dense?: boolean
  className?: string
  children: ReactNode
}

export const List = ({ dense, className, children, ...props }: ListProps) => {
  return (
    <div
      className={classnames([
        'list',
        {
          'list-dense': dense
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}
