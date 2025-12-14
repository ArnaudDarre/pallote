import { useContext, useRef, KeyboardEvent } from 'react'
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
  const tabCount = context?.tabCount ?? 1
  const isSelected = activeIndex === index
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    let newIndex = index

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        newIndex = (index + 1) % tabCount
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        newIndex = (index - 1 + tabCount) % tabCount
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = tabCount - 1
        break
      default:
        return
    }

    setActiveIndex(newIndex)
    // Focus the new tab
    const newTab = document.getElementById(`tab-${newIndex}`)
    newTab?.focus()
  }

  return (
    <button
      ref={buttonRef}
      type="button"
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
      onKeyDown={handleKeyDown}
    >
      {label}
    </button>
  )
}
