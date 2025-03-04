import { Button, Buttons, TableBody, TableCell, TableHead, TableRow } from 'pallote-react'
import { CopySimple, PencilSimple } from '@phosphor-icons/react'

const members = [
  { name: "John", instrument: "Guitar", age: 20 },
  { name: "Paul", instrument: "Bass guitar", age: 18 },
  { name: "George", instrument: "Guitar", age: 17 },
  { name: "Ringo", instrument: "Drums", age: 20 }
]

export const TableHeadExample = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Instrument</TableCell>
        <TableCell kind="number">Age</TableCell>
        <TableCell kind="action"></TableCell>
      </TableRow>
    </TableHead>
  )
}

export const TableBodyExample = () => {
  return (
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
  )
}

export const TableExample = () => {
  return (
    <>
      <TableHeadExample />
      <TableBodyExample />
    </>
  )
}
