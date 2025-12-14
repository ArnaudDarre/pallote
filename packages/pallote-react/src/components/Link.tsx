import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react'
import classnames from 'classnames'
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/csr/ArrowSquareOut"

type LinkColor = 'default' | 'alt' | 'disabled' | 'contrast' | 'contrastAlt' | 'contrastDisabled' | 'primary' | 'secondary' | 'inherit'

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  component?: ElementType
  icon?: ReactNode
  color?: LinkColor
  isExternal?: boolean
  href?: string
  className?: string
  children: ReactNode
}

export const Link = ({
  component = 'a',
  icon,
  color,
  isExternal,
  href,
  className,
  children,
  ...props
}: LinkProps) => {
  const Component = component || 'a'

  return (
    <Component
      className={classnames([
        'link',
        { [`text-${color}`]: color },
        className
      ])}
      href={isExternal ? href : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
      {icon && !isExternal && <span className={'link_icon'} aria-hidden="true">{icon}</span>}
      {isExternal && (
        <>
          <span className="sr-only"> (opens in new tab)</span>
          <span className={'link_icon'} aria-hidden="true"><ArrowSquareOutIcon /></span>
        </>
      )}
    </Component>
  )
}
