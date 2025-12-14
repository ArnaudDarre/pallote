import { HTMLAttributes } from 'react'
import classnames from 'classnames'
import { CaretLeftIcon } from "@phosphor-icons/react/dist/csr/CaretLeft"
import { CaretRightIcon } from "@phosphor-icons/react/dist/csr/CaretRight"
import { CaretDoubleLeftIcon } from "@phosphor-icons/react/dist/csr/CaretDoubleLeft"
import { CaretDoubleRightIcon } from "@phosphor-icons/react/dist/csr/CaretDoubleRight"

import { Button } from './Button'
import { Buttons } from './Buttons'
import { Select } from './Select'

export interface TableFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const TableFooter = ({
  className,
  ...props
}: TableFooterProps) => {
  return (
    <div
      className={classnames([
        'table_footer',
        className
      ])}
      {...props}
    >
      <Select dense id="rows" className="table_rowSelect">
        <option value="1">10</option>
        <option value="2">25</option>
        <option value="2">50</option>
        <option value="2">100</option>
        <option value="2">All</option>
      </Select>
      <Buttons className="table_pagination">
        <Button kind="icon" variant="transparent" size="sm"><CaretDoubleLeftIcon /></Button>
        <Button kind="icon" variant="transparent" size="sm"><CaretLeftIcon /></Button>
        <Button kind="icon" size="sm">1</Button>
        <Button kind="icon" variant="transparent" size="sm">2</Button>
        <Button kind="icon" variant="transparent" size="sm">3</Button>
        <Button kind="icon" variant="transparent" size="sm">…</Button>
        <Button kind="icon" variant="transparent" size="sm">8</Button>
        <Button kind="icon" variant="transparent" size="sm"><CaretRightIcon /></Button>
        <Button kind="icon" variant="transparent" size="sm"><CaretDoubleRightIcon /></Button>
      </Buttons>
    </div>
  )
}
