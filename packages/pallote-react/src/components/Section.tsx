import React, { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

import { SectionHeader } from './SectionHeader'

type SectionAlign = 'left' | 'center' | 'right'
type SectionColor = 'default' | 'paper' | 'primary' | 'primaryLight'

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  align?: SectionAlign
  color?: SectionColor
  landing?: boolean
  header?: boolean
  className?: string
  children: ReactNode
}

export const Section = ({
  align = 'left',
  color = 'default',
  landing,
  header,
  className,
  children,
  ...props
}: SectionProps) => {
  return (
    <div
      className={classnames([
        'section',
        {
          [`section-${align}`]: align,
          [`section-${color}`]: color,
          'section-landing': landing,
          'section-header': header
        },
        className
      ])}
      {...props}
    >
      <div className={'section_container'}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type === SectionHeader) {
            return React.cloneElement(child as React.ReactElement<{ promoteTitle?: boolean }>, { promoteTitle: landing || header })
          }
          return child
        })}
      </div>
    </div>
  )
}
