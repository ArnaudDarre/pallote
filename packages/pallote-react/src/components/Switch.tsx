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
  ...props
}: SwitchProps) => {
  return (
    <div
      className={classnames([
        'switch',
        { 'switch-disabled': disabled },
        className
      ])}
    >
      {startLabel ? <Text className={classnames('switch_label')} variant="body">{startLabel}</Text> : null}
      <input
        className={classnames('switch_input')}
        type="checkbox"
        name={id}
        id={id}
        disabled={disabled}
        {...props}
      />
      <label
        className={classnames('switch_switch')}
        htmlFor={id}
      >
        <div className={classnames('switch_toggle')} />
      </label>
      {endLabel ? <Text className={classnames('switch_label')} variant="body">{endLabel}</Text> : null}
    </div>
  )
}
