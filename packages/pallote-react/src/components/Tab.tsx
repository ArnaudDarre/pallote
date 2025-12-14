import { useContext } from 'react'
import classnames from 'classnames'

import { TabsContext } from "./Tabs"

export interface TabProps {
  index: number
  label?: string
  className?: string
}

export const Tab = ({
  index,
  label,
  className,
}: TabProps) => {
  const context = useContext(TabsContext)
  const activeIndex = context?.activeIndex ?? 0
  const setActiveIndex = context?.setActiveIndex ?? (() => {})
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
