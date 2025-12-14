import { useEffect, useRef, TextareaHTMLAttributes, ChangeEvent } from 'react'
import classnames from 'classnames'

import { InputLabel } from './InputLabel'

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  id: string
  placeholder?: string
  label?: string
  isFocused?: boolean
  error?: boolean
  disabled?: boolean
  optional?: boolean
  dense?: boolean
  hint?: string
  hideLabel?: boolean
  className?: string
}

export const Textarea = ({
  onChange,
  id,
  placeholder,
  label = 'Textarea',
  isFocused,
  error,
  disabled,
  optional,
  dense,
  hint,
  hideLabel,
  className,
  ...props
}: TextareaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <div
      className={classnames([
        'input',
        {
          'js-error': error,
          'input-disabled': disabled,
          'input-optional': optional,
          'input-dense': dense
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
      <textarea
        ref={inputRef}
        className={'input_control'}
        name={id}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        required={!(disabled || optional)}
        rows={4}
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
      ></textarea>
    </div>
  )
}
