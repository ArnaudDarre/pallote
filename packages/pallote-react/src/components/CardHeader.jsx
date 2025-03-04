import React, { useContext } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { SizeContext } from './Card'

import { Text } from '../utilities/Text'

export const CardHeader = ({ label, title, subtitle, actions, className, ...props }) => {

  const useSize = () => useContext(SizeContext)
  const size = useSize()

  let labelComponent
  let titleComponent
  let subtitleComponent

  if (size === 'xs') {
    labelComponent = 'overline'
    titleComponent = 'body'
    subtitleComponent = 'caption'
  } else if (size === 'sm') {
    labelComponent = 'overline'
    titleComponent = 'subtitle'
    subtitleComponent = 'body'
  } else if (size === 'md') {
    labelComponent = 'overline'
    titleComponent = 'h6'
    subtitleComponent = 'subtitle'
  } else if (size === 'lg') {
    labelComponent = 'caption'
    titleComponent = 'h5'
    subtitleComponent = 'h6'
  } else if (size === 'xl') {
    labelComponent = 'body'
    titleComponent = 'h4'
    subtitleComponent = 'h5'
  }

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
      {label ? ( <Text variant={labelComponent} weight='bold'>{label}</Text> ) : null}
      <Text className={classnames('card_title')} variant={titleComponent} weight='bold'>{title}</Text>
      {subtitle ? (
        <Text
          className={classnames('card_subtitle')}
          variant={subtitleComponent}
          weight='regular'
        >
          {subtitle}
        </Text>
      ) : null}
    </div>
  )
}

CardHeader.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.node,
  className: PropTypes.node,
  children: PropTypes.node
}
