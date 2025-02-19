import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { SectionHeader } from './SectionHeader'

export const Section = ({
  align,
  color,
  landing,
  header,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'section',
        {
          [`section-${align}`]: align,
          [`section-${color}`]: color,
          'section-landing': landing,
          'section-header': header
        },
        className
      ])}
      {...props}
    >
      <div className={'section_container'}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type === SectionHeader) {
            return React.cloneElement(child, { promoteTitle: landing || header })
          }
          return child
        })}
      </div>
    </div>
  )
}

Section.propTypes = {
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  color: PropTypes.oneOf([
    'default',
    'paper',
    'primary',
    'primaryLight'
  ]),
  landing: PropTypes.bool,
  header: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}

Section.defaultProps = {
  align: 'left',
  color: 'default'
}
