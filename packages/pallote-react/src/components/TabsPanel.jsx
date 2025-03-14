import React, { useContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { TabsContext } from "./Tabs"

export const TabsPanel = ({
  index,
  className,
  children,
}) => {

  const { activeIndex } = useContext(TabsContext)
  const isActive = activeIndex === index

  return (
    isActive ? (
      <div
        className={classnames([
          'tabs_panel',
          className
        ])}
        role="tabpanel"
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        hidden={!isActive}
      >
        {children}
      </div>
    ) : null
  )
}

TabsPanel.propTypes = {
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
