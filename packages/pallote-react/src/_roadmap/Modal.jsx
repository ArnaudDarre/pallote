import React, { useEffect, useState } from 'react'
// import ReactDom from 'react-dom'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { XIcon } from "@phosphor-icons/react/dist/csr/X";

import { Card } from './Card'

export const Modal = ({
  transition = 'slide',
  width = 'mobile-sm',
  disableBlackdropClick = false,
  show,
  onClose,
  className,
  children,
  ...props
}) => {

  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = () => {
    if (!show) setRender(false)
  }

  // return ReactDom.createPortal(
  return createPortal(
    shouldRender && (
      <div
        className={classnames('modal')}
        onAnimationEnd={onAnimationEnd}
      >
        <div
          className={classnames([
            'modal_backdrop',
            {
              'modal-fadeIn': show,
              'modal-fadeOut': !show
            }
          ])}
          onClick={disableBlackdropClick ? null : onClose}
        >
        </div>
        <Card
          className={classnames([
            'modal_modal',
            {
              [`modal-${width}`]: width,
              [`modal-${transition}In`]: show,
              [`modal-${transition}Out`]: !show
            },
            className
          ])}
          size="lg"
          {...props}
        >
          {children}
          <XIcon
            className={classnames('modal_close')}
            onClick={onClose}
          />
        </Card>
      </div>
    ),
    document.getElementById('modals')
  )
}

Modal.propTypes = {
  transition: PropTypes.oneOf([
    'slide',
    'zoom',
    'fade'
  ]),
  width: PropTypes.oneOf([
    'mobile-sm',
    'mobile',
    'tablet',
    'laptop',
    'desktop'
  ]),
  disableBlackdropClick: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
