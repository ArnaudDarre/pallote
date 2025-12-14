import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

import { Color } from '../utilities/Color'

type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type CardFill = 'default' | 'paper' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
type CardDirection = 'portrait' | 'landscape'
type CardAlign = 'left' | 'center' | 'right'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardSize
  fill?: CardFill
  direction?: CardDirection
  align?: CardAlign
  hasShadow?: boolean
  transparent?: boolean
  className?: string
  children: ReactNode
}

export const Card = ({
  size = 'md',
  fill = 'paper',
  direction = 'portrait',
  align = 'left',
  hasShadow = false,
  transparent = false,
  className,
  children,
  ...props
}: CardProps) => {
  return (
    <Color fill={transparent ? undefined : fill}>
      <div
        className={classnames([
          'card',
          {
            [`card-${size}`]: size,
            [`card-${direction}`]: direction,
            [`card-${align}`]: align,
            'card-hasShadow': hasShadow,
            'card-transparent': transparent
          },
          className
        ])}
        {...props}
      >
        {children}
      </div>
    </Color>
  )
}
