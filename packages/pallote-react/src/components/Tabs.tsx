import { createContext, useState, ReactNode, Dispatch, SetStateAction, Children, isValidElement } from 'react'
import classnames from 'classnames'

type TabsDirection = 'portrait' | 'landscape'

interface TabsContextValue {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  tabCount: number
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

  // Count Tab components for keyboard navigation
  let tabCount = 0
  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.props) {
      const childProps = child.props as { children?: ReactNode }
      Children.forEach(childProps.children, (grandchild) => {
        if (isValidElement(grandchild)) {
          const grandchildProps = grandchild.props as { index?: number }
          if (grandchildProps.index !== undefined) {
            tabCount++
          }
        }
      })
    }
  })

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex, tabCount: tabCount || 1 }}>
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
