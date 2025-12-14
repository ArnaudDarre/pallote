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

  const dropdownId = dropdown ? `nav-dropdown-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined

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
        aria-expanded={dropdown ? isExpanded : undefined}
        aria-haspopup={dropdown ? 'menu' : undefined}
        aria-controls={dropdownId}
        {...props}
      >
        {icon ? (<span className={classnames('nav_icon')} aria-hidden="true">{icon}</span>) : null}
        {label}
      </Component>
      {dropdown ? (
        <div
          ref={dropdownRef}
          id={dropdownId}
          className='nav_target'
          role="menu"
        >
          {dropdown}
        </div>
      ) : null}
    </div>
  )
}
