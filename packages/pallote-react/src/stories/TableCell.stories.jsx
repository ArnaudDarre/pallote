import React from 'react'
import { CopySimple, PencilSimple } from '@phosphor-icons/react'

import { Button } from '../components/Button'
import { Buttons } from '../components/Buttons'
import { Table } from '../components/Table'
import { TableBody } from '../components/TableBody'
import { TableCell } from '../components/TableCell'
import { TableHead } from '../components/TableHead'
import { TableRow } from '../components/TableRow'

export default {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A single cell containing data in a table.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => (
  <Table>
    <TableBody>
      <TableRow>
        <TableCell {...args} />
      </TableRow>
    </TableBody>
  </Table>
)

export const Playground = Template.bind({})

Playground.args = {
  children: 'Table cell'
}

export const Kind = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Default</TableCell>
        <TableCell kind="number">Number</TableCell>
        <TableCell kind="action">Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Default</TableCell>
        <TableCell kind="number">00</TableCell>
        <TableCell kind="action">
          <Buttons>
            <Button kind="icon" size="sm"><PencilSimple /></Button>
            <Button kind="icon" color="secondary" size="sm"><CopySimple /></Button>
          </Buttons>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

Kind.parameters = {
  docs: {
    description: {
      story: 'Change the content alignment and cell size depending on the type of content.'
    }
  }
}
