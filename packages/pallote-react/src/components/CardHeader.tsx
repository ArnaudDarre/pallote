import React, { HTMLAttributes, ReactElement } from 'react'
import classnames from 'classnames'

import { Text } from '../utilities/Text'

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactElement<{ className?: string }>
  label?: string
  title: string
  subtitle?: string
  actions?: React.ReactNode
  className?: string
}

export const CardHeader = ({ icon, label, title, subtitle, actions, className, ...props }: CardHeaderProps) => {
  return (
    <div
      className={classnames([
        'card_header',
        className
      ])}
      {...props}
    >
      {actions && (
        <div className="card_headerActions">
          {actions}
        </div>
      )}
      {icon ? React.cloneElement(icon, { className: `${icon.props.className ?? ''} card_icon` }) : null}
      {label ? (<Text className={classnames('card_label')}>{label}</Text>) : null}
      <Text className={classnames('card_title')}>{title}</Text>
      {subtitle ? (<Text className={classnames('card_subtitle')}>{subtitle}</Text>) : null}
    </div>
  )
}
