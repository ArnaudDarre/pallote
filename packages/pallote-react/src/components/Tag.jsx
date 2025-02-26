import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from '../utilities/Text'

export const Tag = ({
  color = 'primary',
  dense,
  className,
  children = 'Tag',
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
