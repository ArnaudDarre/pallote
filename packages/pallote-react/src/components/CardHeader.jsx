import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from '../utilities/Text'

export const CardHeader = ({ icon, label, title, subtitle, actions, className, ...props }) => {

  return (
    <div
      className={classnames([
        'card_header',
        className
      ])}
      {...props}
    >
      {actions && (
        <div className="card_headerActions">
          {actions}
        </div>
      )}
      {icon ? React.cloneElement(icon, { className: `${icon.props.className ?? ''} card_icon` }) : null}
      {label ? ( <Text className={classnames('card_label')}>{label}</Text> ) : null}
      <Text className={classnames('card_title')}>{title}</Text>
      {subtitle ? ( <Text className={classnames('card_subtitle')}>{subtitle}</Text> ) : null}
    </div>
  )
}

CardHeader.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  actions: PropTypes.node,
  className: PropTypes.node,
  children: PropTypes.node
}
