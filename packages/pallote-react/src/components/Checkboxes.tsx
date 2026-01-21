import { ReactNode } from 'react'
import classnames from 'classnames'

import { InputLabel } from './InputLabel'

type CheckboxesDirection = 'portrait' | 'landscape'

export interface CheckboxesProps {
  id: string
  label?: string
  direction?: CheckboxesDirection
  error?: boolean
  disabled?: boolean
  optional?: boolean
  dense?: boolean
  hint?: ReactNode
  hideLabel?: boolean
  children: ReactNode
  className?: string
}

export const Checkboxes = ({
  id,
  label = 'Label',
  direction = 'portrait',
  error,
  disabled,
  optional,
  dense,
  hint,
  hideLabel,
  children,
  className
}: CheckboxesProps) => {
  return (
    <fieldset
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
      {...(hint || error
        ? {
            'aria-describedby': [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
              .filter(Boolean)
              .join(' '),
          }
        : null
      )}
    >
      <InputLabel
        isLegend
        label={label}
        hint={hint}
        hideLabel={hideLabel}
      />
      <div
        className={classnames([
          'input_control',
          'radios',
          {
            [`radios-${direction}`]: direction
          }
        ])}
      >
        {children}
      </div>
    </fieldset>
  )
}
