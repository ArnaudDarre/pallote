import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

type CardActionsDirection = 'portrait' | 'landscape'

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  direction?: CardActionsDirection
  className?: string
  children: ReactNode
}

export const CardActions = ({ direction, className, children, ...props }: CardActionsProps) => {
  return (
    <div
      className={classnames([
        'card_actions',
        {
          [`card_actions-${direction}`]: direction
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}
