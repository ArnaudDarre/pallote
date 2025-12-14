import { useEffect, useState, HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import { XIcon } from "@phosphor-icons/react/dist/csr/X"

import { Text } from '../utilities/Text'

type AlertColor = 'success' | 'info' | 'warning' | 'error'
type AlertVariant = 'bar' | 'toast' | 'notice'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  color?: AlertColor
  variant?: AlertVariant
  title: string
  subtitle?: string
  dense?: boolean
  noIcon?: boolean
  show?: boolean
  onClose?: () => void
  className?: string
}

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
}: AlertProps) => {
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

  const alert = (
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
        {title ? <Text className={classnames('alert_title')} variant={dense ? 'caption' : 'body'} weight='bold'>{title}</Text> : null}
        {subtitle ? <Text variant={dense ? 'overline' : 'caption'} className={classnames('alert_subtitle')}>{subtitle}</Text> : null}
      </div>
      {onClose ? (
        <XIcon className={classnames('alert_close')} onClick={onClose} size={dense ? 14 : 16} />
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
