import { useRef, useState, ElementType, ReactNode } from 'react'
import classnames from 'classnames'

export interface NavItemProps {
  component?: ElementType
  label: string
  active?: boolean
  dropdown?: ReactNode
  icon?: ReactNode
  end?: boolean
  to?: string
  className?: string
  [key: string]: unknown
}

export const NavItem = ({
  component,
  label,
  active,
  dropdown,
  icon,
  end,
  to,
  className,
  ...props
}: NavItemProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const onClick = () => setIsExpanded(!isExpanded)

  let Component: ElementType

  if (dropdown) {
    Component = 'button'
  } else {
    Component = component || 'a'
  }

  return (
    <div
      className={classnames([
        'nav_item',
        {
          'nav_item-dropdown': dropdown,
          'js-show': isExpanded
        },
        className
      ])}
    >
      <Component
        end={end}
        to={to}
        className={classnames([
          'nav_trigger',
          {
            'nav_trigger-active': active
          }
        ])}
        onClick={onClick}
        {...props}
      >
        {icon ? (<span className={classnames('nav_icon')}>{icon}</span>) : null}
        {label}
      </Component>
      {dropdown ? (
        <div
          ref={dropdownRef}
          className='nav_target'
        >
          {dropdown}
        </div>
      ) : null}
    </div>
  )
}
