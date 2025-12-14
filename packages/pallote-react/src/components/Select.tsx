import { useEffect, useRef, SelectHTMLAttributes, ReactNode, ChangeEvent } from 'react'
import classnames from 'classnames'

import { InputLabel } from './InputLabel'

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  id: string
  label?: string
  isFocused?: boolean
  error?: boolean
  disabled?: boolean
  optional?: boolean
  dense?: boolean
  hint?: string
  hideLabel?: boolean
  children: ReactNode
  className?: string
}

export const Select = ({
  onChange,
  id,
  label = 'Select',
  isFocused,
  error,
  disabled,
  optional,
  dense,
  hint,
  hideLabel,
  children,
  className,
  ...props
}: SelectProps) => {
  const inputRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <div
      className={classnames([
        'input',
        'select',
        {
          'input-focused': isFocused,
          'js-error': error,
          'input-disabled': disabled,
          'input-optional': optional,
          'input-dense': dense,
        },
        className
      ])}
    >
      <InputLabel
        htmlFor={id}
        label={label}
        hint={hint}
        hideLabel={hideLabel}
      />
      <select
        ref={inputRef}
        className={'input_control'}
        name={id}
        id={id}
        disabled={disabled}
        required={!(disabled || optional)}
        onChange={onChange}
        {...(hint || error
          ? {
              'aria-describedby': [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
                .filter(Boolean)
                .join(' '),
            }
          : null
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}
