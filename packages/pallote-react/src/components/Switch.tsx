import { InputHTMLAttributes } from 'react'
import classnames from 'classnames'

import { Text } from '../utilities/Text'

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  startLabel?: string
  endLabel?: string
  disabled?: boolean
  className?: string
}

export const Switch = ({
  id,
  startLabel,
  endLabel,
  disabled,
  className,
  checked,
  defaultChecked,
  ...props
}: SwitchProps) => {
  const isChecked = checked ?? defaultChecked ?? false

  return (
    <div
      className={classnames([
        'switch',
        { 'switch-disabled': disabled },
        className
      ])}
    >
      {startLabel ? <Text className={classnames('switch_label')} variant="body" id={`${id}-start`}>{startLabel}</Text> : null}
      <input
        className={classnames('switch_input')}
        type="checkbox"
        role="switch"
        name={id}
        id={id}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        aria-checked={isChecked}
        aria-labelledby={startLabel || endLabel ? [startLabel ? `${id}-start` : null, endLabel ? `${id}-end` : null].filter(Boolean).join(' ') : undefined}
        {...props}
      />
      <label
        className={classnames('switch_switch')}
        htmlFor={id}
        aria-hidden="true"
      >
        <div className={classnames('switch_toggle')} />
      </label>
      {endLabel ? <Text className={classnames('switch_label')} variant="body" id={`${id}-end`}>{endLabel}</Text> : null}
    </div>
  )
}
