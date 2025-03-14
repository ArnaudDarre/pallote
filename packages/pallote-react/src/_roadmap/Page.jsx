import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Page = ({ className, children, ...props }) => {
  return (
    <div
      className={classnames([
        'page',
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

Page.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
