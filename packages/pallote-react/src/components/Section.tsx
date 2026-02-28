import { Children, HTMLAttributes, ReactElement, ReactNode, cloneElement, isValidElement } from 'react'
import classnames from 'classnames'

import { SectionHeader } from './SectionHeader'
import type { SectionHeaderProps } from './SectionHeader'

type SectionAlign = 'left' | 'center' | 'right'
type SectionColor = 'default' | 'paper' | 'primary' | 'primaryLight'

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  align?: SectionAlign
  color?: SectionColor
  landing?: boolean
  className?: string
  children: ReactNode
}

export const Section = ({
  align = 'left',
  color = 'default',
  landing,
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
          'section-landing': landing
        },
        className
      ])}
      {...props}
    >
      <div className={'section_container'}>
        {Children.map(children, child => {
          if (isValidElement(child) && child.type === SectionHeader) {
            const currentTitleLevel = (child as ReactElement<SectionHeaderProps>).props.titleLevel
            return cloneElement(child as ReactElement<SectionHeaderProps>, {
              titleLevel: currentTitleLevel ?? (landing ? 1 : 2)
            })
          }
          return child
        })}
      </div>
    </div>
  )
}
