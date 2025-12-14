import { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames'

import { Text } from '../utilities/Text'

type StatusColor = 'inactive' | 'success' | 'info' | 'warning' | 'error'

export interface StatusProps extends HTMLAttributes<HTMLElement> {
  color?: StatusColor
  dense?: boolean
  className?: string
  children?: ReactNode
}

export const Status = ({
  color = 'inactive',
  dense,
  className,
  children = 'Status',
  ...props
}: StatusProps) => {
  return (
    <Text
      className={classnames([
        'status',
        {
          [`status-${color}`]: color,
          'status-dense': dense
        },
        className
      ])}
      {...props}
    >
      {children}
    </Text>
  )
}
