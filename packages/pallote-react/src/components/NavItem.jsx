import React, { useRef, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

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
}) => {

  const dropdownRef = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const onClick = () => setIsExpanded(!isExpanded)

  let Component

  if (dropdown) {
    Component = 'button'
  } else {
    Component = component || "a"
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
      ) : null }
    </div>
  )
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  dropdown: PropTypes.object,
  icon: PropTypes.node,
  end: PropTypes.node,
  to: PropTypes.node,
  className: PropTypes.node
}
