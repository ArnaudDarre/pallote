import React from 'react'
import PropTypes from 'prop-types'

import { Color } from '../../utilities/Color'
import { Text } from '../../utilities/Text'

export const GridExample = ({
  fill,
  content,
}) => {

  return (
    <Color fill={fill ? fill : 'default'} stroke="border" className={'ph-1 pv-½ br-sm w-full'}>
      <Text variant="caption">{content}</Text>
    </Color>
  )
}

GridExample.propTypes = {
  fill: PropTypes.oneOf([
    'default',
    'grey5',
    'grey10',
    'grey20'
  ]),
  content: PropTypes.string,
}
