import React, { ReactElement, CSSProperties } from 'react'
import classnames from 'classnames'

type ColorValue =
  | 'main'
  | 'contrast'
  | 'grey90'
  | 'grey80'
  | 'grey70'
  | 'grey60'
  | 'grey50'
  | 'grey40'
  | 'grey30'
  | 'grey20'
  | 'grey10'
  | 'grey5'
  | 'default'
  | 'paper'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'

export interface ColorProps {
  fill?: ColorValue
  stroke?: ColorValue
  customFill?: string
  customStroke?: string
  className?: string
  children: ReactElement<{ className?: string; style?: CSSProperties }>
}

export const Color = ({
  fill,
  stroke,
  customFill,
  customStroke,
  className,
  children,
  ...props
}: ColorProps) => {
  const style: CSSProperties = {
    ...(customFill ? { backgroundColor: customFill } : {}),
    ...(customStroke ? { border: `1px solid ${customStroke}` } : {})
  }

  const childClassName = classnames(children.props.className, className, {
    [`fill-${fill}`]: fill,
    [`stroke-${stroke}`]: stroke
  })

  return React.cloneElement(children, {
    className: childClassName,
    style: { ...children.props.style, ...style },
    ...props
  })
}
