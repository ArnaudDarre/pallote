import React, { useContext, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";

import { SizeContext } from './Accordion'

import { Text } from '../utilities/Text'

export const AccordionItem = ({
  icon,
  label,
  active,
  disabled,
  onClick,
  className,
  children
}) => {

  const useSize = () => useContext(SizeContext)
  const size = useSize()

  let labelVariant

  if (size === 'sm') {
    labelVariant = 'caption'
  } else if (size === 'md') {
    labelVariant = 'body'
  } else if (size === 'lg') {
    labelVariant = 'subtitle'
  }

  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (active) {
      setContentHeight(contentRef.current.scrollHeight)
    } else {
      setContentHeight(0)
    }
  }, [active])

  const contentStyle = {
    height: `${contentHeight}px`
  }

  const handleClick = () => {
    if (!disabled) {
      onClick()
    }
  }

  return (
    <div
      className={classnames([
        'accordion_item',
        {
          'accordion_item-active': active,
          'accordion_item-disabled': disabled
        },
        className
      ])}
    >
      <button
        className={classnames([
          'accordion_control'
        ])}
        onClick={disabled ? handleClick : onClick}
      >
        {icon ? <div className={'accordion_icon'}>{icon}</div> : null}
        <Text className={'accordion_header'} variant={labelVariant} weight='bold'>{label}</Text>
        <div className={classnames('accordion_icon accordion_icon-arrow')}><CaretDownIcon /></div>
      </button>
      <div style={contentStyle} ref={contentRef} className={classnames('accordion_content')}>
        {children}
      </div>
    </div>
  )
}

AccordionItem.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
