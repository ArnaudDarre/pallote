import { InputHTMLAttributes, ChangeEvent, useId } from 'react'
import classnames from 'classnames'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  id?: string
  value?: string
  label?: string
  checked?: boolean
  disabled?: boolean
  optional?: boolean
  dense?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const Checkbox = ({
  id: providedId,
  value,
  label,
  checked,
  disabled,
  optional,
  dense,
  onChange,
  className,
  ...props
}: CheckboxProps) => {
  const generatedId = useId()
  const id = providedId || generatedId

  return (
    <div
      className={classnames([
        'checkbox',
        {
          'checkbox-disabled': disabled,
          'checkbox-dense': dense
        },
        className
      ])}
    >
      <input
        className={classnames('checkbox_control')}
        type="checkbox"
        name={id}
        id={id}
        value={value}
        checked={checked}
        aria-checked={checked}
        aria-label={!label ? 'Checkbox' : undefined}
        disabled={disabled}
        required={!(disabled || optional)}
        onChange={onChange}
        {...props}
      />
      {label && (
        <label
          className={classnames('checkbox_label')}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  )
}
