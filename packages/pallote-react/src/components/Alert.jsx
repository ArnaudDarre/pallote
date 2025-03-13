import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { X } from '@phosphor-icons/react'

import { Text } from '../utilities/Text'

export const Alert = ({
  color = 'success',
  variant = 'toast',
  title,
  subtitle,
  dense,
  noIcon,
  show,
  onClose,
  className,
  ...props
}) => {

  const [shouldRender, setRender] = useState(show)
  const [container] = useState(() => {
    let el = document.getElementById('alerts')
    if (!el) {
      el = document.createElement('div')
      el.id = 'alerts'
      document.body.appendChild(el)
    }
    return el
  })

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  let alert = (
    <div
      className={classnames([
        'alert',
        {
          [`alert-${color}`]: color,
          [`alert-${variant}`]: variant,
          'alert-slideIn': show,
          'alert-slideOut': !show,
          'alert-dense': dense,
          'alert-noIcon': noIcon
        },
        className
      ])}
      onAnimationEnd={onAnimationEnd}
      {...props}
    >
      <div className={classnames('alert_content')}>
        {title ? <Text className={classnames('alert_title')} variant={dense ? 'caption' : 'body'}  weight='bold'>{title}</Text> : null}
        {subtitle ? <Text variant={dense ? 'overline' : 'caption'} className={classnames('alert_subtitle')}>{subtitle}</Text> : null}
      </div>
      {onClose ? (
        <X className={classnames('alert_close')} onClick={onClose} size={dense ? 14 : 16} />
      ) : null}
    </div>
  )

  if (variant === 'notice') {
    return <>{alert}</>
  } else {
    return createPortal(
      shouldRender && alert,
      container
    )
  }
}

Alert.propTypes = {
  color: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'error'
  ]),
  variant: PropTypes.oneOf([
    'bar',
    'toast',
    'notice'
  ]),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  dense: PropTypes.bool,
  noIcon: PropTypes.bool,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.node
}
