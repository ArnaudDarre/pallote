import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const SectionContent = ({
  align,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classnames([
        'section_content',
        {
          [`section_content-${align}`]: align
        },
        className
      ])}
      {...props}
    >
      {children}
    </div>
  )
}

SectionContent.propTypes = {
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  className: PropTypes.node,
  children: PropTypes.node
}

SectionContent.defaultProps = {
  align: 'left'
}
