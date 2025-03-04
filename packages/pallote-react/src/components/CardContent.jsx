import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const CardContent = ({ fullWidth, className, children, ...props }) => {

  return (
    <div
      className={classnames([
        'card_content',
        {
          'card_content-fullWidth': fullWidth
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

CardContent.propTypes = {
  fullWidth: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}
