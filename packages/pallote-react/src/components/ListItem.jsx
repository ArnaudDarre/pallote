import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Text } from '../utilities/Text'

export const ListItem = ({ icon, bold, className, children = 'List item', ...props }) => {

  return (
    <Text
      className={classnames([
        'list_item',
        {
          'list_item-bold': bold
        },
        className
      ])}
      {...props}
    >
      {icon ? React.cloneElement(icon, { className: `${icon.props.className ?? ''} list_itemIcon` }) : null}
      {children}
    </Text>
  )
}

ListItem.propTypes = {
  icon: PropTypes.node,
  bold: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node
}
