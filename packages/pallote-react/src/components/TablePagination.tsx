import { HTMLAttributes } from 'react'
import classnames from 'classnames'
import { CaretLeftIcon } from "@phosphor-icons/react/dist/csr/CaretLeft"
import { CaretRightIcon } from "@phosphor-icons/react/dist/csr/CaretRight"
import { CaretDoubleLeftIcon } from "@phosphor-icons/react/dist/csr/CaretDoubleLeft"
import { CaretDoubleRightIcon } from "@phosphor-icons/react/dist/csr/CaretDoubleRight"

import { Button } from './Button'
import { Buttons } from './Buttons'
import { Select } from './Select'
import { Text } from '../utilities/Text'

export interface TablePaginationProps extends HTMLAttributes<HTMLDivElement> {
  pageIndex: number
  pageCount: number
  pageSize: number
  pageSizeOptions?: number[]
  totalRows: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
  className?: string
}

export const TablePagination = ({
  pageIndex,
  pageCount,
  pageSize,
  pageSizeOptions = [10, 25, 50, 100],
  totalRows,
  onPageChange,
  onPageSizeChange,
  className,
  ...props
}: TablePaginationProps) => {
  const start = pageIndex * pageSize + 1
  const end = Math.min((pageIndex + 1) * pageSize, totalRows)

  return (
    <div
      className={classnames('table_pagination', className)}
      role="navigation"
      aria-label="Table pagination"
      {...props}
    >
      <div className="table_paginationInfo">
        <Select
          dense
          id="rows-per-page"
          label="Rows per page"
          hideLabel
          className="table_rowSelect"
          value={String(pageSize)}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          {pageSizeOptions.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </Select>
        <Text variant="caption" className="table_paginationCount">
          {start}–{end} of {totalRows}
        </Text>
      </div>
      <Buttons className="table_paginationPages">
        <Button
          kind="icon"
          variant="transparent"
          size="sm"
          onClick={() => onPageChange(0)}
          disabled={pageIndex === 0}
          aria-label="First page"
        >
          <CaretDoubleLeftIcon />
        </Button>
        <Button
          kind="icon"
          variant="transparent"
          size="sm"
          onClick={() => onPageChange(pageIndex - 1)}
          disabled={pageIndex === 0}
          aria-label="Previous page"
        >
          <CaretLeftIcon />
        </Button>
        <Text variant="caption" className="table_paginationPage">
          {pageIndex + 1} / {pageCount}
        </Text>
        <Button
          kind="icon"
          variant="transparent"
          size="sm"
          onClick={() => onPageChange(pageIndex + 1)}
          disabled={pageIndex >= pageCount - 1}
          aria-label="Next page"
        >
          <CaretRightIcon />
        </Button>
        <Button
          kind="icon"
          variant="transparent"
          size="sm"
          onClick={() => onPageChange(pageCount - 1)}
          disabled={pageIndex >= pageCount - 1}
          aria-label="Last page"
        >
          <CaretDoubleRightIcon />
        </Button>
      </Buttons>
    </div>
  )
}
