import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Link = ({
  component = 'a',
  icon,
  color,
  isExternal,
  href,
  className,
  children,
  ...props
}) => {

  const Component = component || 'a'

  return (
    <Component
      className={classnames([
        'link',
        {[`text-${color}`]: color},
        className
      ])}
      href={href}
      {...props}
    >
      {children}
      {icon && <span className={'link_icon'}>{icon}</span>}
    </Component>
  )
}

Link.propTypes = {
  component: PropTypes.oneOfType([
    'a',
    PropTypes.elementType
  ]),
  icon: PropTypes.node,
  color: PropTypes.oneOf([
    'default',
    'alt',
    'disabled',
    'contrast',
    'contrastAlt',
    'contrastDisabled',
    'primary',
    'secondary',
    'inherit',
  ]),
  href: PropTypes.string,
  className: PropTypes.node,
  children: PropTypes.node
}
