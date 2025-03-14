import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const Breadcrumbs = ({ items, separator = "slash", className }) => (

  <nav
    aria-label="breadcrumbs"
    className={classnames([
      'breadcrumbs',
      {
        [`breadcrumbs-${separator}`]: separator,
      },
      className
    ])}
  >
    <ol>
      {items.map((item, index) => (
        <li key={index} className='breadcrumbs_item'>
          {index === items.length - 1 ? (
            <p aria-current="page">{item.label}</p>
          ) : (
            <a href={item.href}>{item.label}</a>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

Breadcrumbs.propTypes = {
  items: PropTypes.array.isRequired,
  separator: PropTypes.oneOf([
    'slash',
    'arrow'
  ]),
  className: PropTypes.node
}
