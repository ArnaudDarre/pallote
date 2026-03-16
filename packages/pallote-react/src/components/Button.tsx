import { ElementType, ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react'
import classnames from 'classnames'

type ButtonKind = 'text' | 'icon'
type ButtonVariant = 'fill' | 'stroke' | 'transparent'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
type ButtonColor = 'primary' | 'secondary' | 'grey' | 'success' | 'info' | 'warning' | 'error' | 'main' | 'contrast'
type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'type' | 'color'> {
  component?: ElementType
  kind?: ButtonKind
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ButtonColor
  fullWidth?: boolean
  iconStart?: ReactNode
  iconEnd?: ReactNode
  type?: ButtonType
  to?: string
  [key: string]: unknown
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  component = 'button',
  kind,
  variant = 'fill',
  size = 'md',
  color = 'primary',
  fullWidth,
  disabled,
  iconStart,
  iconEnd,
  className,
  children = 'button',
  type = 'button',
  ...props
}, ref) => {
  const Component = component as ElementType

  let content: ReactNode

  if (kind === 'icon') {
    content = children as ReactNode
  } else {
    content = (
      <>
        {iconStart && iconStart}
        {children}
        {iconEnd && iconEnd}
      </>
    )
  }

  return (
    <Component
      className={classnames([
        'button',
        {
          [`button-${size}`]: size,
          [`button-${color}`]: color,
          [`button-${kind}`]: kind,
          [`button-${variant}`]: variant,
          'button-fullWidth': fullWidth,
          'button-disabled': disabled
        },
        className
      ])}
      ref={ref}
      disabled={Component === 'button' ? disabled : undefined}
      aria-disabled={Component !== 'button' && disabled ? true : undefined}
      {...(Component === 'button' ? { type } : {})}
      {...props}
    >
      {content}
    </Component>
  )
})

Button.displayName = 'Button'
