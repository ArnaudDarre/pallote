import React, { ReactElement, ReactNode } from 'react'
import classnames from 'classnames'

import { Text, TextProps } from '../utilities/Text'

export interface ListItemProps extends Omit<TextProps, 'children'> {
  icon?: ReactElement<{ className?: string }>
  bold?: boolean
  className?: string
  children?: ReactNode
}

export const ListItem = ({ icon, bold, className, children = 'List item', ...props }: ListItemProps) => {
  return (
    <Text
      className={classnames([
        'list_item',
        {
          'list_item-bold': bold
        },
        className
      ])}
      {...props}
    >
      {icon ? React.cloneElement(icon, { className: `${icon.props.className ?? ''} list_itemIcon` }) : null}
      {children}
    </Text>
  )
}
