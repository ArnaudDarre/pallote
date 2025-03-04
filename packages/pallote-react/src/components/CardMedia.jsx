import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const CardMedia = ({ width, height, image, fullWidth, className, ...props }) => {

  return (
    <div
      className={classnames([
        'card_media',
        {
          'card_media-fullWidth': fullWidth
        },
        className
      ])}
      {...props}
    >
      <div
        className={'card_mediaInner'}
        style={{
          width: width + 'px',
          paddingBottom: height,
          backgroundImage: `url(${image})`
        }}
      ></div>
    </div>
  )
}

CardMedia.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  image: PropTypes.string,
  fullWidth: PropTypes.bool,
  className: PropTypes.node
}
