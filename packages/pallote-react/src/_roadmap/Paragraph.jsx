import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Paragraph = ({
  variant,
  align,
  weight,
  underline,
  italic,
  color,
  className,
  children,
  ...props
}) => {

  return (
    <div
      className={classnames([
        'paragraph',
        {
          [`${variant}`]: variant,
          [`text-${align}`]: align,
          [`text-${weight}`]: weight,
          [`text-${color}`]: color,
          'text-underline': underline,
          'text-italic': italic
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

Paragraph.propTypes = {
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
    'light',
    'regular',
    'bold'
  ]),
  underline: PropTypes.bool,
  italic: PropTypes.bool,
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
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
