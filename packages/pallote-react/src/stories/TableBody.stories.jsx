import React from 'react'
import { CopySimple, PencilSimple } from '@phosphor-icons/react'

import { Button } from '../components/Button'
import { Buttons } from '../components/Buttons'
import { Table } from '../components/Table'
import { TableBody } from '../components/TableBody'
import { TableCell } from '../components/TableCell'
import { TableRow } from '../components/TableRow'

export default {
  title: 'Components/TableBody',
  component: TableBody,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The content of a table component.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const members = [
  { name: "John", instrument: "Guitar", age: 20 },
  { name: "Paul", instrument: "Bass guitar", age: 18 },
  { name: "George", instrument: "Guitar", age: 17 },
  { name: "Ringo", instrument: "Drums", age: 20 }
]

const exampleTableBody = (
  <>
    {members.map((item, index) => (
      <TableRow key={index}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.instrument}</TableCell>
        <TableCell kind="number">{item.age}</TableCell>
        <TableCell kind="action">
          <Buttons>
            <Button kind="icon" size="sm"><PencilSimple /></Button>
            <Button kind="icon" color="secondary" size="sm"><CopySimple /></Button>
          </Buttons>
        </TableCell>
      </TableRow>
    ))}
  </>
)

const Template = (args) => (
  <Table>
    <TableBody {...args} />
  </Table>
)

export const Playground = Template.bind({})

Playground.args = {
  children: exampleTableBody
}
