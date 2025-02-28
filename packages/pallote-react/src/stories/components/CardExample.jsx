import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '../../components/Card'
import { CardHeader } from '../../components/CardHeader'
import { CardMedia } from '../../components/CardMedia'

export const CardExample = ({
  title,
  width,
  ...props
}) => {

  return (
    <Card {...props}>
      <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" height="66.666%" width={width} />
      <CardHeader title={title} />
    </Card>
  )
}

CardExample.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number
}
