import { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames'

import { Text } from '../utilities/Text'

export type TagColor = 'primary' | 'secondary' | 'grey' | 'success' | 'info' | 'warning' | 'error'

export interface TagProps extends HTMLAttributes<HTMLElement> {
  color?: TagColor
  dense?: boolean
  className?: string
  children?: ReactNode
}

export const Tag = ({
  color = 'primary',
  dense,
  className,
  children = 'Tag',
  ...props
}: TagProps) => {
  return (
    <Text
      className={classnames([
        'tag',
        {
          [`tag-${color}`]: color,
          'tag-dense': dense
        },
        className
      ])}
      {...props}
    >
      {children}
    </Text>
  )
}
