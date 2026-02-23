import { useState, useMemo, ReactNode, HTMLAttributes, ChangeEvent } from 'react'
import classnames from 'classnames'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  Header,
} from '@tanstack/react-table'
import { CaretUpIcon, CaretDownIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"

import { Table } from './Table'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import { TableCell, type TableCellKind } from './TableCell'
import { TablePagination } from './TablePagination'
import { Input } from './Input'
import { Select } from './Select'

export type DataTableFilterType = 'text' | 'select'

/** Option value for filtering; label is shown in the dropdown. Use when row values are raw (e.g. in_progress) but you want formatted labels (e.g. In progress). */
export type DataTableFilterOption = string | { value: string; label: string }

export interface DataTableColumnDef<TData> {
  accessorKey: keyof TData & string
  header: string
  enableSorting?: boolean
  enableFiltering?: boolean
  filterType?: DataTableFilterType
  filterOptions?: DataTableFilterOption[]
  cell?: (value: TData[keyof TData & string], row: TData) => ReactNode
  className?: string
  kind?: TableCellKind
}

export interface DataTableProps<TData> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  data: TData[]
  columns: DataTableColumnDef<TData>[]
  enableSearch?: boolean
  searchPlaceholder?: string
  pageSize?: number
  pageSizeOptions?: number[]
  striped?: boolean
  hasHover?: boolean
  dense?: boolean
  border?: boolean
  className?: string
  kind?: TableCellKind
}

function normalizeFilterOption(opt: DataTableFilterOption): { value: string; label: string } {
  return typeof opt === 'string' ? { value: opt, label: opt } : opt
}

function ColumnFilter<TData>({ header }: { header: Header<TData, unknown> }) {
  const columnDef = header.column.columnDef.meta as { filterType?: DataTableFilterType; filterOptions?: DataTableFilterOption[] } | undefined
  const filterType = columnDef?.filterType ?? 'text'
  const filterOptions = columnDef?.filterOptions ?? []
  const filterValue = (header.column.getFilterValue() as string) ?? ''

  if (filterType === 'select') {
    const options = filterOptions.map(normalizeFilterOption)
    return (
      <Select
        dense
        id={`filter-${header.id}`}
        label={`Filter ${header.column.columnDef.header as string}`}
        hideLabel
        className="datatable_filter"
        value={filterValue}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => header.column.setFilterValue(e.target.value || undefined)}
      >
        <option value="">All</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </Select>
    )
  }

  return (
    <Input
      dense
      id={`filter-${header.id}`}
      label={`Filter ${header.column.columnDef.header as string}`}
      hideLabel
      placeholder="Filter..."
      className="datatable_filter"
      value={filterValue}
      onChange={(e: ChangeEvent<HTMLInputElement>) => header.column.setFilterValue(e.target.value || undefined)}
    />
  )
}

export function DataTable<TData extends Record<string, unknown>>({
  data,
  columns: columnDefs,
  enableSearch,
  searchPlaceholder = 'Search...',
  pageSize: initialPageSize = 10,
  pageSizeOptions = [10, 25, 50, 100],
  striped,
  hasHover = true,
  dense,
  border,
  kind: defaultKind,
  className,
  ...props
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const tanstackColumns = useMemo<ColumnDef<TData, unknown>[]>(() =>
    columnDefs.map(col => ({
      accessorKey: col.accessorKey,
      header: col.header,
      enableSorting: col.enableSorting ?? false,
      enableColumnFilter: col.enableFiltering === true,
      cell: col.cell
        ? (info) => col.cell!(info.getValue() as TData[keyof TData & string], info.row.original)
        : (info) => String(info.getValue() ?? ''),
      meta: {
        filterType: col.filterType ?? 'text',
        filterOptions: col.filterOptions,
        className: col.className,
        kind: col.kind,
      },
    })),
    [columnDefs]
  )

  const table = useReactTable({
    data,
    columns: tanstackColumns,
    state: { sorting, columnFilters, globalFilter },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: initialPageSize },
    },
  })

  const hasFilters = columnDefs.some(col => col.enableFiltering === true)

  return (
    <div className={classnames('datatable', className)} {...props}>
      {enableSearch && (
        <div className="datatable_search">
          <Input
            id="datatable-search"
            label="Search"
            hideLabel
            placeholder={searchPlaceholder}
            icon={<MagnifyingGlassIcon />}
            value={globalFilter}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)}
          />
        </div>
      )}
      <Table
        striped={striped}
        hasHover={hasHover}
        dense={dense}
        border={border}
      >
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                const meta = header.column.columnDef.meta as { className?: string; kind?: TableCellKind } | undefined
                const cellKind = meta?.kind ?? defaultKind ?? 'default'
                return (
                <TableCell
                  key={header.id}
                  kind={cellKind}
                  className={classnames(meta?.className, {
                    'datatable_sortable': header.column.getCanSort()
                  })}
                  onClick={header.column.getToggleSortingHandler()}
                  aria-sort={
                    header.column.getIsSorted() === 'asc' ? 'ascending'
                    : header.column.getIsSorted() === 'desc' ? 'descending'
                    : undefined
                  }
                >
                  <span className="datatable_headerContent">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() && (
                      <span className="datatable_sortIcon" aria-hidden="true">
                        {header.column.getIsSorted() === 'asc' ? (
                          <CaretDownIcon size={12} />
                        ) : header.column.getIsSorted() === 'desc' ? (
                          <CaretUpIcon size={12} />
                        ) : (
                          <CaretDownIcon size={12} className="datatable_sortIcon-inactive" />
                        )}
                      </span>
                    )}
                  </span>
                </TableCell>
              )})}
            </TableRow>
          ))}
          {hasFilters && (
            <TableRow className="datatable_filterRow">
              {table.getHeaderGroups()[0].headers.map(header => {
                const meta = header.column.columnDef.meta as { className?: string; kind?: TableCellKind } | undefined
                const cellKind = meta?.kind ?? defaultKind ?? 'default'
                return (
                  <TableCell key={`filter-${header.id}`} kind={cellKind} className={meta?.className}>
                    {header.column.getCanFilter() ? (
                      <ColumnFilter header={header} />
                    ) : null}
                  </TableCell>
                )
              })}
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columnDefs.length} className="datatable_empty">
                No results found
              </TableCell>
            </TableRow>
          ) : (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => {
                  const meta = cell.column.columnDef.meta as { className?: string; kind?: TableCellKind } | undefined
                  const cellKind = meta?.kind ?? defaultKind ?? 'default'
                  return (
                    <TableCell key={cell.id} kind={cellKind} className={meta?.className}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination
        pageIndex={table.getState().pagination.pageIndex}
        pageCount={table.getPageCount()}
        pageSize={table.getState().pagination.pageSize}
        pageSizeOptions={pageSizeOptions}
        totalRows={table.getFilteredRowModel().rows.length}
        onPageChange={(page) => table.setPageIndex(page)}
        onPageSizeChange={(size) => table.setPageSize(size)}
      />
    </div>
  )
}
