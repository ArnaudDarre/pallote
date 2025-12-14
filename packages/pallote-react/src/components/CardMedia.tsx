import { HTMLAttributes } from 'react'
import classnames from 'classnames'

export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  image: string
  fullWidth?: boolean
  className?: string
}

export const CardMedia = ({ width, height, image, fullWidth, className, ...props }: CardMediaProps) => {
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
          width: width ? width + 'px' : undefined,
          paddingBottom: height,
          backgroundImage: `url(${image})`
        }}
      ></div>
    </div>
  )
}
