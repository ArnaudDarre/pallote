import React from 'react'
import { CopySimple, PencilSimple } from '@phosphor-icons/react'

import { Button } from '../components/Button'
import { Buttons } from '../components/Buttons'
import { Table } from '../components/Table'
import { TableBody } from '../components/TableBody'
import { TableCell } from '../components/TableCell'
import { TableRow } from '../components/TableRow'

export default {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A row in a table.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const exampleTableRow = (
  <>
    <TableCell>Paul</TableCell>
    <TableCell>Bass guitar</TableCell>
    <TableCell kind="number">18</TableCell>
    <TableCell kind="action">
      <Buttons>
        <Button kind="icon" size="sm"><PencilSimple /></Button>
        <Button kind="icon" color="secondary" size="sm"><CopySimple /></Button>
      </Buttons>
    </TableCell>
  </>
)

const Template = (args) => (
  <Table>
    <TableBody>
      <TableRow {...args} />
    </TableBody>
  </Table>
)

export const Playground = Template.bind({})

Playground.args = {
  children: exampleTableRow
}
