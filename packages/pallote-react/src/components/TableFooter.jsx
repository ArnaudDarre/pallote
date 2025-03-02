import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { CaretLeft, CaretRight, CaretDoubleLeft, CaretDoubleRight } from '@phosphor-icons/react'

import { Text } from '../utilities/Text'
import { Button } from './Button'
import { Buttons } from './Buttons'
import { Select } from './Select'

export const TableFooter = ({
  className,
  ...props
}) => {

  return (
    <div
      className={classnames([
        'table_footer',
        className
      ])}
      {...props}
    >
      <Select dense id="rows" className="table_rowSelect">
        <option value="1" >10</option>
        <option value="2" >25</option>
        <option value="2" >50</option>
        <option value="2" >100</option>
        <option value="2" >All</option>
      </Select>
      <Buttons className="table_pagination">
        <Button kind="icon" variant="transparent" size="sm"><CaretDoubleLeft /></Button>
        <Button kind="icon" variant="transparent" size="sm"><CaretLeft /></Button>
        <Button kind="icon" size="sm">1</Button>
        <Button kind="icon" variant="transparent" size="sm">2</Button>
        <Button kind="icon" variant="transparent" size="sm">3</Button>
        <Button kind="icon" variant="transparent" size="sm">…</Button>
        <Button kind="icon" variant="transparent" size="sm">8</Button>
        <Button kind="icon" variant="transparent" size="sm"><CaretRight /></Button>
        <Button kind="icon" variant="transparent" size="sm"><CaretDoubleRight /></Button>
      </Buttons>
    </div>
  )
}

TableFooter.propTypes = {
  className: PropTypes.node
}
