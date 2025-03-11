import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const TabsControl = ({
  className,
  children,
}) => {

  return (
    <div
      role='tablist'
      className={classnames([
        'tabs_controls',
      ])}
  >
      {children}
    </div>
  )
}

TabsControl.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node
}
