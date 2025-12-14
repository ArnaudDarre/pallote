import { useContext, useRef, useEffect, useState, HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown"

import { AccordionContext } from './Accordion'
import { Text } from '../utilities/Text'

type TextVariant = 'caption' | 'body' | 'subtitle'

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  icon?: ReactNode
  label: string
  disabled?: boolean
  className?: string
  children: ReactNode
  // Injected by Accordion parent
  isOpen?: boolean
  onToggle?: () => void
  index?: number
}

export const AccordionItem = ({
  icon,
  label,
  disabled,
  className,
  children,
  isOpen = false,
  onToggle,
  index = 0,
  ...props
}: AccordionItemProps) => {
  const { size } = useContext(AccordionContext)
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState<string>('0px')

  const labelVariant: TextVariant = size === 'sm' ? 'caption' : size === 'lg' ? 'subtitle' : 'body'

  const headerId = `accordion-header-${index}`
  const panelId = `accordion-panel-${index}`

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`)
    } else {
      setMaxHeight('0px')
    }
  }, [isOpen])

  const handleClick = () => {
    if (!disabled && onToggle) {
      onToggle()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div
      className={classnames([
        'accordion_item',
        {
          'accordion_item-active': isOpen,
          'accordion_item-disabled': disabled
        },
        className
      ])}
      {...props}
    >
      <button
        type="button"
        id={headerId}
        className={classnames('accordion_control')}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-disabled={disabled ? true : undefined}
        disabled={disabled}
      >
        {icon ? <span className="accordion_icon" aria-hidden="true">{icon}</span> : null}
        <Text className="accordion_header" variant={labelVariant} weight="bold">
          {label}
        </Text>
        <CaretDownIcon  className="accordion_icon accordion_icon-arrow" aria-hidden="true" />
      </button>
      <div
        id={panelId}
        ref={contentRef}
        role="region"
        aria-labelledby={headerId}
        className={classnames('accordion_content')}
        style={{ maxHeight }}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  )
}
