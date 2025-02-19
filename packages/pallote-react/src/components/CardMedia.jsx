import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const CardMedia = ({ width, height, borderRadius, image, fullWidth, className, ...props }) => {

  return (
    <div
      className={classnames([
        'card__media',
        {
          [`card__media--borderRadius--${borderRadius}`]: borderRadius,
          'card__media--fullWidth': fullWidth
        },
        className
      ])}
      {...props}
    >
      <div
        className={'card__mediaInner'}
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
  borderRadius: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
  ]),
  image: PropTypes.string,
  fullWidth: PropTypes.bool,
  className: PropTypes.node
}
