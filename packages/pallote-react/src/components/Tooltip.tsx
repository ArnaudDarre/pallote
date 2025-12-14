import { HTMLAttributes, ReactNode, useId } from 'react'
import classnames from 'classnames'
import { InfoIcon } from "@phosphor-icons/react/dist/csr/Info"

export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  infoIcon?: boolean
  content: ReactNode
  dense?: boolean
  className?: string
  children?: ReactNode
}

export const Tooltip = ({
  infoIcon,
  content,
  dense,
  className,
  children,
  ...props
}: TooltipProps) => {
  const tooltipId = useId()

  return (
    <span
      className={classnames([
        'tooltip',
        {
          'tooltip-info': infoIcon,
        },
        className
      ])}
      aria-describedby={tooltipId}
      tabIndex={infoIcon ? 0 : undefined}
      {...props}
    >
      {infoIcon ? (
        <InfoIcon
          className={classnames('tooltip_icon')}
          size={12}
          aria-hidden="true"
        />
      ) : (
        children
      )}
      <span
        id={tooltipId}
        role="tooltip"
        className={classnames([
          'tooltip_content',
          {
            'tooltip_content-dense': dense
          }
        ])}
      >
        {content}
      </span>
    </span>
  )
}
