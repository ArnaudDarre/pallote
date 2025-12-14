import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

import { Text } from '../utilities/Text'

type TitleComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string
  title: string
  promoteTitle?: boolean
  titleComponent?: TitleComponent
  subtitle?: ReactNode
  actions?: ReactNode
  className?: string
}

export const SectionHeader = ({
  label,
  title,
  promoteTitle = false,
  titleComponent = 'h2',
  subtitle,
  actions,
  className,
  ...props
}: SectionHeaderProps) => {
  return (
    <div
      className={classnames([
        'section_header',
        className
      ])}
      {...props}
    >
      {label ? <Text className={classnames('section_label')}>{label}</Text> : null}
      <Text
        className="section_title"
        component={titleComponent || (promoteTitle ? 'h1' : 'h2')}
      >
        {title}
      </Text>
      {subtitle ? <div className={classnames('section_subtitle')}>{subtitle}</div> : null}
      {actions ? (
        <div className="section_actions">
          {actions}
        </div>
      ) : null}
    </div>
  )
}
