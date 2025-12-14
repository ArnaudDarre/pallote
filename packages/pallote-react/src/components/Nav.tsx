import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

type NavDirection = 'portrait' | 'landscape'

export interface NavProps extends HTMLAttributes<HTMLElement> {
  direction?: NavDirection
  dense?: boolean
  className?: string
  children: ReactNode
}

export const Nav = ({ direction, dense, className, children, ...props }: NavProps) => {
  return (
    <nav
      className={classnames([
        'nav',
        {
          [`nav-${direction}`]: direction,
          'nav-dense': dense
        },
        className
      ])}
      {...props}
    >
      <div className='nav_container'>
        {children}
      </div>
    </nav>
  )
}
