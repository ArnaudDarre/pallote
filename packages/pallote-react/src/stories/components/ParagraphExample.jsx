import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '../../utilities/Text'

export const ParagraphExample = ({ children }) => {
  return (
    <>
      <Text>This is a  paragraph component with the <span className='text-bold'>{children}</span> property applied to it.</Text>
      <Text>That property will be applied to any child Text component.</Text>
    </>
  )
}

ParagraphExample.propTypes = {
  children: PropTypes.node
}

export default ParagraphExample
