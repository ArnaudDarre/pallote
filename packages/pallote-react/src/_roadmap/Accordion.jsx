import React, { createContext, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const SizeContext = createContext(false)

export const Accordion = ({
  size = 'md',
  allowMultiple = false,
  transparent,
  gutter,
  className,
  children
}) => {
  const [activeItems, setActiveItems] = useState([])

  const handleClick = (index) => {
    if (allowMultiple) {
      if (activeItems.includes(index)) {
        setActiveItems(activeItems.filter(item => item !== index))
      } else {
        setActiveItems([...activeItems, index])
      }
    } else {
      setActiveItems([index])
    }
    console.log(index)
  }

  return (
    <SizeContext.Provider value={size}>
      <div
        className={classnames([
          'accordion',
          {
            [`accordion-${size}`]: size,
            'accordion-transparent': transparent,
            'accordion-gutter': gutter
          },
          className
        ])}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              active: activeItems.includes(index),
              onClick: () => handleClick(index)
            })
          }
          return null
        })}
      </div>
    </SizeContext.Provider>
  )
}

Accordion.propTypes = {
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg'
  ]),
  allowMultiple: PropTypes.bool,
  transparent: PropTypes.bool,
  gutter: PropTypes.bool,
  className: PropTypes.node,
  children: PropTypes.node.isRequired
}
