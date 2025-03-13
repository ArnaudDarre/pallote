import React, { useContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { TabsContext } from "./Tabs"

export const Tab = ({
  index,
  label,
  className,
}) => {

  const { activeIndex, setActiveIndex } = useContext(TabsContext)
  const isSelected = activeIndex === index

  return (
    <button
      className={classnames([
        'tab',
        {
          'tab-active': isSelected,
        },
        className
      ])}
      role="tab"
      aria-selected={isSelected}
      aria-controls={`tabpanel-${index}`}
      id={`tab-${index}`}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => setActiveIndex(index)}
    >
      {label}
    </button>
  )
}

Tab.propTypes = {
  label: PropTypes.string,
  className: PropTypes.node.isRequired
}
