import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Button = React.forwardRef(({
  component = 'button',
  kind,
  variant = 'fill',
  size = 'md',
  color = 'primary',
  fullWidth,
  disabled,
  iconLeft,
  iconRight,
  className,
  children = 'button',
  ...props
}, ref) => {

  const Component = component || 'button'

  let content

  if (kind === 'icon') {
    content = children
  } else {
    content = (
      <>
        {iconLeft && iconLeft}
        {children}
        {iconRight && iconRight}
      </>
    )
  }

  return (
    <Component
      className={classnames([
        'button',
        {
          [`button-${size}`]: size,
          [`button-${color}`]: color,
          [`button-${kind}`]: kind,
          [`button-${variant}`]: variant,
          'button-fullWidth': fullWidth,
          'button-disabled': disabled
        },
        className
      ])}
      ref={ref}
      disabled={Component === 'button' ? disabled : undefined}
      {...props}
    >
      {content}
    </Component>
  )
})

Button.displayName = 'Button'

Button.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.oneOf(['button', 'a']),
    PropTypes.elementType
  ]),
  kind: PropTypes.oneOf([
    'text',
    'icon'
  ]),
  variant: PropTypes.oneOf([
    'fill',
    'stroke',
    'transparent'
  ]),
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg'
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'grey',
    'success',
    'info',
    'warning',
    'error',
    'main',
    'contrast'
  ]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  className: PropTypes.node,
  children: PropTypes.node
}
