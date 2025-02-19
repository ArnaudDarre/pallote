import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const List = ({ dense, className, children, ...props }) => {

  return (
    <div
      className={classnames([
        'list',
        {
          'list-dense': dense
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

List.propTypes = {
  dense: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}
