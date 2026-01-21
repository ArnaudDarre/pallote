import { InputHTMLAttributes, ChangeEvent } from 'react'
import classnames from 'classnames'

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  id: string
  name: string
  value?: string
  label: string
  checked?: boolean
  disabled?: boolean
  optional?: boolean
  dense?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const Radio = ({
  id,
  name,
  value,
  label,
  checked,
  disabled,
  optional,
  dense,
  onChange,
  className,
  ...props
}: RadioProps) => {
  return (
    <div
      className={classnames([
        'radio',
        {
          'radio-disabled': disabled,
          'radio-dense': dense
        },
        className
      ])}
    >
      <input
        className={classnames('radio_control')}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        aria-checked={checked}
        disabled={disabled}
        required={!(disabled || optional)}
        onChange={onChange}
        {...props}
      />
      <label
        className={classnames('radio_label')}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}
