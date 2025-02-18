import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Color = ({
  fill,
  stroke,
  customFill,
  customStroke,
  className,
  children,
  ...props
}) => {

  const style = {
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

Color.propTypes = {
  fill: PropTypes.oneOf([
    'main',
    'contrast',
    'grey90',
    'grey80',
    'grey70',
    'grey60',
    'grey50',
    'grey40',
    'grey30',
    'grey20',
    'grey10',
    'grey5',
    'default',
    'paper',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error'
  ]),
  stroke: PropTypes.oneOf([
    'main',
    'contrast',
    'grey90',
    'grey80',
    'grey70',
    'grey60',
    'grey50',
    'grey40',
    'grey30',
    'grey20',
    'grey10',
    'grey5',
    'default',
    'paper',
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'error'
  ]),
  customFill: PropTypes.string,
  customStroke: PropTypes.string,
  className: PropTypes.node,
  children: PropTypes.node
}
