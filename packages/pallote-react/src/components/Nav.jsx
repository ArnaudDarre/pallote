import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Nav = ({ direction, dense, className, children, ...props }) => {
  return (
    <nav
      className={classnames([
        'nav',
        {
          [`nav-${direction}`]: direction,
          'nav-dense': dense
        },
        className
      ])}
      {...props}
    >
      <div className='nav_container'>
        {children}
      </div>
    </nav>
  )
}

Nav.propTypes = {
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  dense: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}
