---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { CopySimple, PencilSimple } from '@phosphor-icons/react'
import { Button, Buttons, Table, TableBody, TableCell, TableHead, TableRow } from "pallote-react"

import { DocLinks } from './partials/DocLinks'
import { TableExample } from "./partials/table"

# TableCell

A single cell containing data in a table.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2819-4952&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-tablecell--docs"
/>

<div class="docs_block">
  <Table>
    <TableBody>
      <TableRow>
        <TableCell>Table cell</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<TableCell>Table cell</TableCell>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<th class="table_cell">Cell (in table head)</th>
```

```html
<td class="table_cell">Cell (in table body)</td>
```
  </TabItem>
</Tabs>

## Props

### Kind

Change the content alignment and cell size depending on the type of content.

<div class="docs_block">
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
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<TableCell>Default</TableCell>
<TableCell kind="number">Number</TableCell>
<TableCell kind="action">Action</TableCell>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<th class="table_cell">Default</th>
<th class="table_cell table_cell-number">Number</th>
<th class="table_cell table_cell-action">Action</th>
```

```html
<td class="table_cell">Default</td>
<td class="table_cell table_cell-number">Number</td>
<td class="table_cell table_cell-action">Action</td>
```
  </TabItem>
</Tabs>
