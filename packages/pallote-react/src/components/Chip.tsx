import { HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'
import { XIcon } from "@phosphor-icons/react/dist/csr/X"

import { Color } from '../utilities/Color'

type ChipColor = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  color?: ChipColor
  dense?: boolean
  avatar?: string
  disabled?: boolean
  onClose?: () => void
  className?: string
  children: ReactNode
}

export const Chip = ({
  color = 'default',
  dense,
  avatar,
  disabled,
  onClose,
  className,
  children,
  ...props
}: ChipProps) => {
  return (
    <Color fill={color}>
      <div
        className={classnames([
          'chip',
          {
            'chip-dense': dense,
            'chip-disabled': disabled
          },
          className
        ])}
        role="listitem"
        aria-disabled={disabled ? true : undefined}
        {...props}
      >
        {avatar ? (
          <img
            className={classnames('chip_avatar')}
            src={avatar}
            alt=""
            aria-hidden="true"
          />
        ) : null}
        {children}
        {onClose ? (
          <button
            type="button"
            className={classnames('chip_close')}
            onClick={onClose}
            disabled={disabled}
            aria-label="Remove"
          >
            <XIcon size={dense ? 16 : 20} aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </Color>
  )
}
