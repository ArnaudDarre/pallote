import React from 'react'

import { DataTable } from '../components/DataTable'
import { Tag } from '../components/Tag'

export default {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Feature-rich data table with sorting, filtering, search, and pagination. Built on TanStack Table. Supports the same style variants as Table: `striped`, `dense`, `border`, `hasHover`.'
      }
    }
  },
  argTypes: {
    data: { control: false },
    columns: { control: false },
    className: { control: false }
  }
}

const employees = [
  { name: 'Alice Johnson', department: 'Engineering', role: 'Senior Developer', salary: 120000, status: 'Active' },
  { name: 'Bob Smith', department: 'Design', role: 'Lead Designer', salary: 105000, status: 'Active' },
  { name: 'Carol White', department: 'Engineering', role: 'Junior Developer', salary: 75000, status: 'On Leave' },
  { name: 'Dave Brown', department: 'Marketing', role: 'Marketing Manager', salary: 95000, status: 'Active' },
  { name: 'Eve Davis', department: 'Engineering', role: 'DevOps Engineer', salary: 110000, status: 'Active' },
  { name: 'Frank Miller', department: 'Sales', role: 'Sales Representative', salary: 70000, status: 'Inactive' },
  { name: 'Grace Lee', department: 'Design', role: 'UX Researcher', salary: 90000, status: 'Active' },
  { name: 'Henry Wilson', department: 'Engineering', role: 'Senior Developer', salary: 125000, status: 'Active' },
  { name: 'Ivy Chen', department: 'Marketing', role: 'Content Writer', salary: 65000, status: 'Active' },
  { name: 'Jack Taylor', department: 'Sales', role: 'Account Manager', salary: 85000, status: 'On Leave' },
  { name: 'Karen Moore', department: 'Engineering', role: 'QA Engineer', salary: 88000, status: 'Active' },
  { name: 'Leo Harris', department: 'Design', role: 'Visual Designer', salary: 92000, status: 'Inactive' },
  { name: 'Mia Clark', department: 'Engineering', role: 'Frontend Developer', salary: 98000, status: 'Active' },
  { name: 'Noah Adams', department: 'Sales', role: 'Sales Director', salary: 130000, status: 'Active' },
  { name: 'Olivia Wright', department: 'Marketing', role: 'SEO Specialist', salary: 72000, status: 'Active' },
]

const statusColor = (status) => {
  switch (status) {
    case 'Active': return 'success'
    case 'On Leave': return 'warning'
    case 'Inactive': return 'grey'
    default: return 'primary'
  }
}

export const Default = () => (
  <DataTable
    data={employees}
    columns={[
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'role', header: 'Role', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true, cell: (value) => `$${Number(value).toLocaleString()}` },
      { accessorKey: 'status', header: 'Status', enableSorting: true, cell: (value) => <Tag dense color={statusColor(value)}>{String(value)}</Tag> },
    ]}
    border
  />
)

Default.parameters = {
  docs: {
    description: {
      story: 'Full-featured data table with sorting, search, and pagination.'
    }
  }
}

export const EnableSearch = () => (
  <DataTable
    data={employees}
    columns={[
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true, filterType: 'select', filterOptions: ['Engineering', 'Design', 'Marketing', 'Sales'] },
      { accessorKey: 'role', header: 'Role', enableSorting: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true, cell: (value) => `$${Number(value).toLocaleString()}` },
      { accessorKey: 'status', header: 'Status', enableSorting: true, filterType: 'select', filterOptions: ['Active', 'On Leave', 'Inactive'], cell: (value) => <Tag dense color={statusColor(value)}>{String(value)}</Tag> },
    ]}
    enableSearch
    border
  />
)

EnableSearch.parameters = {
  docs: {
    description: {
      story: 'Add global search functionality to filter across all columns.'
    }
  }
}

export const EnableFiltering = () => (
  <DataTable
    data={employees}
    columns={[
      { accessorKey: 'name', header: 'Name', enableSorting: true, enableFiltering: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true, enableFiltering: true, filterType: 'select', filterOptions: ['Engineering', 'Design', 'Marketing', 'Sales'] },
      { accessorKey: 'role', header: 'Role', enableSorting: true, enableFiltering: true },
      { accessorKey: 'salary', header: 'Salary', enableSorting: true, enableFiltering: false, cell: (value) => `$${Number(value).toLocaleString()}` },
      { accessorKey: 'status', header: 'Status', enableSorting: true, enableFiltering: true, filterType: 'select', filterOptions: ['Active', 'On Leave', 'Inactive'], cell: (value) => <Tag dense color={statusColor(value)}>{String(value)}</Tag> },
    ]}
    border
  />
)

EnableFiltering.parameters = {
  docs: {
    description: {
      story: 'Column filters with text inputs and select dropdowns. Department and Status use dropdown filters.'
    }
  }
}

export const PageSizeOptions = () => (
  <DataTable
    data={employees}
    columns={[
      { accessorKey: 'name', header: 'Name', enableSorting: true },
      { accessorKey: 'department', header: 'Department', enableSorting: true },
      { accessorKey: 'role', header: 'Role' },
    ]}
    pageSize={5}
    pageSizeOptions={[5, 10, 15]}
    border
  />
)

PageSizeOptions.parameters = {
  docs: {
    description: {
      story: 'Custom page size and page size options.'
    }
  }
}
