import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

import { Display } from '../utilities/Display'
import { Text } from '../utilities/Text'

type TitleComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
type TitleLevel = 1 | 2 | 3

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string
  title: string
  titleLevel?: TitleLevel
  subtitle?: ReactNode
  actions?: ReactNode
  actionsPosition?: 'right' | 'bottom'
  className?: string
}

export const SectionHeader = ({
  label,
  title,
  titleLevel = 2,
  subtitle,
  actions,
  actionsPosition,
  className,
  ...props
}: SectionHeaderProps) => {
  const titleVariant = titleLevel === 1 ? 'h2' : titleLevel === 2 ? 'h3' : 'h4'
  const titleComponent = titleLevel === 1 ? 'h1' : titleLevel === 2 ? 'h2' : 'h3'

  return (
    <div
      className={classnames([
        'section_header',
        `section_header-${titleLevel}`,
        className
      ])}
      {...props}
    >
      {label ? <Text className={classnames('section_label')}>{label}</Text> : null}
      <div className="section_titleWrapper">
        <Text
          className="section_title"
          variant={titleVariant}
          component={titleComponent}
        >
          {title}
        </Text>
        {actions && actionsPosition === 'right' ? (
          <Display hide="tablet">
            <div className="section_actions">
              {actions}
            </div>
          </Display>
        ) : null}
      </div>
      {subtitle ? <div className={classnames('section_subtitle')}>{subtitle}</div> : null}
      {actions ? (
        actionsPosition === 'right' ? (
          <Display show="tablet">
            <div className="section_actions">
              {actions}
            </div>
          </Display>
        ) : (
          <div className="section_actions">
            {actions}
          </div>
        )
      ) : null}
    </div>
  )
}
