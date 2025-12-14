import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

type Direction = 'column' | 'columnReverse' | 'row' | 'rowReverse'
type JustifyContent = 'center' | 'end' | 'start' | 'spaceAround' | 'spaceBetween' | 'spaceEvenly'
type AlignItems = 'stretch' | 'center' | 'end' | 'start' | 'baseline'
type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  item?: boolean
  wrap?: boolean
  direction?: Direction
  justify?: JustifyContent
  items?: AlignItems
  self?: AlignItems
  gap?: ColSize
  col?: ColSize
  colxs?: ColSize
  colsm?: ColSize
  colmd?: ColSize
  collg?: ColSize
  colxl?: ColSize
  className?: string
  children?: ReactNode
}

export const Grid = ({
  item,
  wrap,
  direction,
  justify,
  items,
  self,
  gap,
  col,
  colxs,
  colsm,
  colmd,
  collg,
  colxl,
  className,
  children,
  ...props
}: GridProps) => {
  return (
    <div
      className={classnames(
        'flex',
        {
          'flex-wrap': wrap,
          [`direction-${direction}`]: direction,
          [`justify-${justify}`]: justify,
          [`items-${items}`]: items,
          [`slef-${self}`]: self,
          [`col-${col}`]: col,
          [`col-xs-${colxs}`]: colxs,
          [`col-sm-${colsm}`]: colsm,
          [`col-md-${colmd}`]: colmd,
          [`col-lg-${collg}`]: collg,
          [`col-xl-${colxl}`]: colxl,
          [`gap-${gap}`]: gap
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
