import React, { useState } from 'react'

import { TablePagination } from '../components/TablePagination'

export default {
  title: 'Components/TablePagination',
  component: TablePagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Pagination component for DataTable. Displays page navigation and rows-per-page selector.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    onPageChange: { control: false },
    onPageSizeChange: { control: false }
  }
}

export const Default = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const totalRows = 53

  return (
    <TablePagination
      pageIndex={pageIndex}
      pageCount={Math.ceil(totalRows / pageSize)}
      pageSize={pageSize}
      totalRows={totalRows}
      onPageChange={setPageIndex}
      onPageSizeChange={(size) => {
        setPageSize(size)
        setPageIndex(0)
      }}
    />
  )
}
