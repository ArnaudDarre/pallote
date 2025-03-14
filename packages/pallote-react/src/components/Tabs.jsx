import React, { createContext, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const TabsContext = createContext()

export const Tabs = ({ direction, dense, hasBorder, className,  children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div
        className={classnames([
          'tabs',
          {
            [`tabs-${direction}`]: direction,
            'tabs-dense': dense,
            'tabs-hasBorder': hasBorder,
          },
          className
        ])}
      >
        {children}
      </div>
    </TabsContext.Provider>
  )
}

Tabs.propTypes = {
  direction: PropTypes.oneOf([
    'portrait',
    'landscape'
  ]),
  dense: PropTypes.bool,
  hasBorder: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
