import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from '../utilities/Text'

export const SectionHeader = ({
  label,
  title,
  promoteTitle = false,
  titleComponent = 'h2',
  subtitle,
  actions,
  className,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'section_header',
        className
      ])}
      {...props}
    >
      {label ? <Text className={classnames('section_label')}>{label}</Text> : null }
      <Text
        className="section_title"
        component={titleComponent || (promoteTitle ? 'h1' : 'h2')}
      >
        {title}
      </Text>
      {subtitle ? <div className={classnames('section_subtitle')}>{subtitle}</div> : null }
      {actions ? (
        <div className="section_actions">
          {actions}
        </div>
      ) : null}
    </div>
  )
}

SectionHeader.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  promoteTitle: PropTypes.bool,
  titleComponent: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p'
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  actions: PropTypes.node,
  className: PropTypes.node
}
