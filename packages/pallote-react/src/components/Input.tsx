import { useEffect, useRef, InputHTMLAttributes, ReactNode, ChangeEvent } from 'react'
import classnames from 'classnames'
import { CalendarBlankIcon } from "@phosphor-icons/react/dist/csr/CalendarBlank"
import { CaretUpDownIcon } from "@phosphor-icons/react/dist/csr/CaretUpDown"
import { ClockIcon } from "@phosphor-icons/react/dist/csr/Clock"

import { InputLabel } from './InputLabel'

type InputType = 'date' | 'email' | 'number' | 'tel' | 'text' | 'time' | 'password' | 'color'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type?: InputType
  id: string
  placeholder?: string
  label?: string
  icon?: ReactNode
  isFocused?: boolean
  error?: boolean
  disabled?: boolean
  optional?: boolean
  dense?: boolean
  hint?: ReactNode
  hideLabel?: boolean
  className?: string
}

export const Input = ({
  onChange,
  type = 'text',
  id,
  placeholder,
  label = 'Input',
  icon,
  isFocused,
  error,
  disabled,
  optional,
  dense,
  hint,
  hideLabel,
  className,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  const customIcon =
    icon ||
    (type === 'date' && <CalendarBlankIcon />) ||
    (type === 'time' && <ClockIcon />) ||
    (type === 'number' && <CaretUpDownIcon />)

  return (
    <div
      className={classnames([
        'input',
        {
          'js-error': error,
          'input-disabled': disabled,
          'input-optional': optional,
          'input-dense': dense,
          'input-withIcon': icon
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
      {customIcon && <div className={'input_icon'} aria-hidden="true">{customIcon}</div>}
      <input
        ref={inputRef}
        type={type}
        className={'input_control'}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        required={!(disabled || optional)}
        aria-invalid={error ? true : undefined}
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
      />
    </div>
  )
}
