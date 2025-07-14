import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info";

export const Tooltip = ({
  infoIcon,
  infoIconSize,
  content,
  bold,
  dense,
  className,
  children,
  ...props
}) => {

  return (
    <span
      className={classnames([
        'tooltip',
        {
          'tooltip-info': infoIcon,
          'tooltip-bold': bold
        },
        className
      ])}
      {...props}
    >
      {infoIcon ? <InfoIcon className={classnames('tooltip_icon')} size={infoIconSize ? infoIconSize : 12} /> : children}
      <span
        className={classnames([
          'tooltip_content',
          {
            'tooltip_content-dense': dense
          }
        ])}
      >
        {content}
      </span>
    </span>
  )
}

Tooltip.propTypes = {
  infoIcon: PropTypes.bool,
  infoIconSize: PropTypes.number,
  content: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  dense: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
