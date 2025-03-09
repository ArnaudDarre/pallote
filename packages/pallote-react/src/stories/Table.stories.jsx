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
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Display data in ordered rows and columns.'
      }
    }
  },
  argTypes: {
    children: { control: false },
    className: { control: false }
  }
}

const members = [
  { name: "John", instrument: "Guitar", age: 20 },
  { name: "Paul", instrument: "Bass guitar", age: 18 },
  { name: "George", instrument: "Guitar", age: 17 },
  { name: "Ringo", instrument: "Drums", age: 20 }
]

const exampleTable = (
  <>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Instrument</TableCell>
        <TableCell kind="number">Age</TableCell>
        <TableCell kind="action"></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
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
    </TableBody>
  </>
)

const Template = (args) => <Table {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: exampleTable
}

export const Striped = () => (
  <Table striped>
    {exampleTable}
  </Table>
)

export const HasHover = () => (
  <Table hasHover>
    {exampleTable}
  </Table>
)

export const Dense = () => (
  <Table dense>
    {exampleTable}
  </Table>
)

export const Border = () => (
  <Table border>
    {exampleTable}
  </Table>
)
