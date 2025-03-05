import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Text = ({
  variant,
  align,
  weight,
  transform,
  italic,
  underline,
  strikeThrough,
  code,
  color,
  component,
  className,
  children,
  ...props
}) => {

  const Component = component || 'p';

  return (
    <Component
      className={classnames([
        {
          [`${variant}`]: variant,
          [`text-${align}`]: align,
          [`text-${weight}`]: weight,
          [`text-${transform}`]: transform,
          [`text-${color}`]: color,
          'text-italic': italic,
          'text-underline': underline,
          'text-strikeThrough': strikeThrough,
          'text-code': code
        },
        className
      ])}
      {...props}
    >
      {children}
    </Component>
  )
}

Text.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle',
    'body',
    'caption',
    'overline'
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'justify'
  ]),
  weight: PropTypes.oneOf([
    'regular',
    'bold'
  ]),
  transform: PropTypes.oneOf([
    'none',
    'capitalize',
    'uppercase',
    'lowercase',
    'initial',
    'inherit'
  ]),
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  strikeThrough: PropTypes.bool,
  code: PropTypes.bool,
  color: PropTypes.oneOf([
    'default',
    'alt',
    'disabled',
    'contrast',
    'contrastAlt',
    'contrastDisabled',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error'
  ]),
  component: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'label',
    'legend'
  ]),
  className: PropTypes.node,
  children: PropTypes.node
}
