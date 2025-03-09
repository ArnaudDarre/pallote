import React from 'react'
import { CopySimple, PencilSimple } from '@phosphor-icons/react'

import { Button } from '../components/Button'
import { Buttons } from '../components/Buttons'
import { Table } from '../components/Table'
import { TableCell } from '../components/TableCell'
import { TableHead } from '../components/TableHead'
import { TableRow } from '../components/TableRow'

export default {
  title: 'Components/TableHead',
  component: TableHead,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The header of a table with the column names.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const exampleTableHead = (
  <TableRow>
    <TableCell>Name</TableCell>
    <TableCell>Instrument</TableCell>
    <TableCell kind="number">Age</TableCell>
    <TableCell kind="action"></TableCell>
  </TableRow>
)

const Template = (args) => (
  <Table>
    <TableHead {...args} />
  </Table>
)

export const Playground = Template.bind({})

Playground.args = {
  children: exampleTableHead
}
