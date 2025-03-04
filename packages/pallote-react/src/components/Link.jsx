import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { ArrowSquareOut } from '@phosphor-icons/react'

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
      href={isExternal ? href : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
      {icon && !isExternal && <span className={'link_icon'}>{icon}</span>}
      {isExternal && <span className={'link_icon'}><ArrowSquareOut /></span>}
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
