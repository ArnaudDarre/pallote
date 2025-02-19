import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from '../utilities/Text'

export const Tag = ({
  color,
  dense,
  className,
  children,
  ...props
}) => {

  return (
    <Text
      className={classnames([
        'tag',
        {
          [`tag-${color}`]: color,
          'tag-dense': dense
        },
        className
      ])}
      {...props}
    >
      {children}
    </Text>
  )
}

Tag.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'grey',
    'success',
    'info',
    'warning',
    'error'
  ]),
  dense: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}

Tag.defaultProps = {
  color: 'primary',
  children: 'Tag'
}
