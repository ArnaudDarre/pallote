import { ReactNode } from 'react'
import classnames from 'classnames'

export interface TabsControlProps {
  className?: string
  children: ReactNode
}

export const TabsControl = ({
  className,
  children,
}: TabsControlProps) => {
  return (
    <div
      role='tablist'
      className={classnames([
        'tabs_controls',
        className
      ])}
    >
      {children}
    </div>
  )
}
