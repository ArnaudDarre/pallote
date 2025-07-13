import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Section } from './Section'
import { Text } from '../utilities/Text'

export const PageHeader = ({
  align,
  label,
  title,
  subtitle,
  isLanding,
  className,
  ...props
}) => {
  return (
    <Section
      className={classnames([
        'page_header',
        className
      ])}
      align={align}
      {...props}
    >
      {label ? <Text variant="caption" weight='bold' className={classnames('page_label')}>{label}</Text> : null }
      {title ? <Text variant={isLanding ? 'h1' : 'h2'} color="primary" className={classnames('page_title')}>{title}</Text> : null }
      {subtitle ? <div variant={isLanding ? 'h5' : 'h6'} weight="regular" className={classnames('page_subtitle editor')}>{subtitle}</div> : null }
    </Section>
  )
}

PageHeader.propTypes = {
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  isLanding: PropTypes.bool,
  className: PropTypes.node
}
