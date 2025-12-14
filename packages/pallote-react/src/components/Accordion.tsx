import { createContext, HTMLAttributes, ReactNode, useState, Children, isValidElement, cloneElement } from 'react'
import classnames from 'classnames'

type AccordionSize = 'sm' | 'md' | 'lg'

interface AccordionContextValue {
  size: AccordionSize
}

export const AccordionContext = createContext<AccordionContextValue>({ size: 'md' })

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  size?: AccordionSize
  allowMultiple?: boolean
  transparent?: boolean
  className?: string
  children: ReactNode
}

export const Accordion = ({
  size = 'md',
  allowMultiple = false,
  transparent,
  className,
  children,
  ...props
}: AccordionProps) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([])

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setActiveIndices(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    } else {
      setActiveIndices(prev =>
        prev.includes(index) ? [] : [index]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ size }}>
      <div
        className={classnames([
          'accordion',
          {
            [`accordion-${size}`]: size,
            'accordion-transparent': transparent
          },
          className
        ])}
        {...props}
      >
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(child as React.ReactElement<{ isOpen?: boolean; onToggle?: () => void; index?: number }>, {
              isOpen: activeIndices.includes(index),
              onToggle: () => handleToggle(index),
              index
            })
          }
          return null
        })}
      </div>
    </AccordionContext.Provider>
  )
}
