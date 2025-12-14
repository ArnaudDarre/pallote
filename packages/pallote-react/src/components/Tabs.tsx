import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import classnames from 'classnames'

type TabsDirection = 'portrait' | 'landscape'

interface TabsContextValue {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
}

export const TabsContext = createContext<TabsContextValue | null>(null)

export interface TabsProps {
  direction?: TabsDirection
  dense?: boolean
  hasBorder?: boolean
  className?: string
  children: ReactNode
}

export const Tabs = ({ direction, dense, hasBorder, className, children }: TabsProps) => {
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
