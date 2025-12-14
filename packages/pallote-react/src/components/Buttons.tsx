import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

type ButtonsDirection = 'landscape' | 'portrait'

export interface ButtonsProps extends HTMLAttributes<HTMLDivElement> {
  direction?: ButtonsDirection
  fullWidth?: boolean
  wide?: boolean
  className?: string
  children: ReactNode
}

export const Buttons = ({
  direction = 'landscape',
  fullWidth,
  wide,
  className,
  children,
  ...props
}: ButtonsProps) => {
  return (
    <div
      className={classnames([
        'buttons',
        {
          [`buttons-${direction}`]: direction,
          'buttons-fullWidth': fullWidth,
          'buttons-wide': wide
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}
