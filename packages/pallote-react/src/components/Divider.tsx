import { HTMLAttributes } from 'react'
import classnames from 'classnames'

type DividerDirection = 'landscape' | 'portrait'
type DividerPadding = 'none' | 'sm' | 'md' | 'lg'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: DividerDirection
  padding?: DividerPadding
  className?: string
}

export const Divider = ({
  direction = 'landscape',
  padding = 'md',
  className,
  ...props
}: DividerProps) => {
  return (
    <div
      className={classnames([
        'divider',
        {
          [`divider-${direction}`]: direction,
          [`divider-${padding}`]: padding
        },
        className
      ])}
      {...props}
    />
  )
}
