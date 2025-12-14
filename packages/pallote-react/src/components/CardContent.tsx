import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean
  className?: string
  children: ReactNode
}

export const CardContent = ({ fullWidth, className, children, ...props }: CardContentProps) => {
  return (
    <div
      className={classnames([
        'card_content',
        {
          'card_content-fullWidth': fullWidth
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}
