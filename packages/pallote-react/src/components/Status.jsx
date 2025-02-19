import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from '../utilities/Text'

export const Status = ({
  color,
  dense,
  className,
  children,
  ...props
}) => {

  return (
    <Text
      className={classnames([
        'status',
        {
          [`status-${color}`]: color,
          'status-dense': dense
        },
        className
      ])}
      {...props}
    >
      {children}
    </Text>
  )
}

Status.propTypes = {
  color: PropTypes.oneOf([
    'inactive',
    'success',
    'info',
    'warning',
    'error'
  ]),
  dense: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}

Status.defaultProps = {
  color: 'inactive',
  children: 'Status'
}
