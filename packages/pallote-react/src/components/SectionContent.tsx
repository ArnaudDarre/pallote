import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

type SectionContentAlign = 'left' | 'center' | 'right'

export interface SectionContentProps extends HTMLAttributes<HTMLDivElement> {
  align?: SectionContentAlign
  className?: string
  children: ReactNode
}

export const SectionContent = ({
  align = 'left',
  className,
  children,
  ...props
}: SectionContentProps) => {
  return (
    <div
      className={classnames([
        'section_content',
        {
          [`section_content-${align}`]: align
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}
