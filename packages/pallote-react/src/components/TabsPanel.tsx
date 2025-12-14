import { useContext, ReactNode } from 'react'
import classnames from 'classnames'

import { TabsContext } from "./Tabs"

export interface TabsPanelProps {
  index: number
  className?: string
  children: ReactNode
}

export const TabsPanel = ({
  index,
  className,
  children,
}: TabsPanelProps) => {
  const context = useContext(TabsContext)
  const activeIndex = context?.activeIndex ?? 0
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
