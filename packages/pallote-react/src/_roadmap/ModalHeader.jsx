import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { CardHeader } from './CardHeader'

export const ModalHeader = ({ className, ...props }) => {
  return (
    <CardHeader
      className={classnames([
        'modal_header',
        className
      ])}
      {...props}
    />
  )
}

ModalHeader.propTypes = {
  className: PropTypes.node.isRequired
}
