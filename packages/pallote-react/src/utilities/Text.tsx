import { ElementType, HTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption' | 'overline'
type TextAlign = 'left' | 'center' | 'right' | 'justify'
type TextWeight = 'regular' | 'bold'
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit'
type TextColor = 'default' | 'alt' | 'disabled' | 'contrast' | 'contrastAlt' | 'contrastDisabled' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
type TextComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'legend'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant
  align?: TextAlign
  weight?: TextWeight
  transform?: TextTransform
  italic?: boolean
  underline?: boolean
  strikeThrough?: boolean
  code?: boolean
  color?: TextColor
  component?: TextComponent
  className?: string
  children?: ReactNode
}

export const Text = ({
  variant,
  align,
  weight,
  transform,
  italic,
  underline,
  strikeThrough,
  code,
  color,
  component,
  className,
  children,
  ...props
}: TextProps) => {
  const Component: ElementType = component || 'p'

  return (
    <Component
      className={classnames([
        {
          [`${variant}`]: variant,
          [`text-${align}`]: align,
          [`text-${weight}`]: weight,
          [`text-${transform}`]: transform,
          [`text-${color}`]: color,
          'text-italic': italic,
          'text-underline': underline,
          'text-strikeThrough': strikeThrough,
          'text-code': code
        },
        className
      ])}
      {...props}
    >
      {children}
    </Component>
  )
}
