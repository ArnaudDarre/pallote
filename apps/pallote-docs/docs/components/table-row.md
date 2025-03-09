---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { CopySimple, PencilSimple } from '@phosphor-icons/react'
import { Button, Buttons, Table, TableBody, TableCell, TableRow } from "pallote-react"

import { DocLinks } from './partials/DocLinks'
import { TableBodyExample } from "./partials/table"

# TableRow

A row in a table.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2819-5157&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-tablerow--docs"
/>

<div class="docs_block">
  <Table>
    <TableBody>
      <TableRow>
        <TableCell>Paul</TableCell>
        <TableCell>Bass guitar</TableCell>
        <TableCell kind="number">18</TableCell>
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
<TableRow>
  <TableCell>Cell</TableCell>
  <TableCell>Cell</TableCell>
</TableRow>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<tr class="table_row">
  <td class="table_cell">Cell</td>
  <td class="table_cell">Cell</td>
</tr>
```
  </TabItem>
</Tabs>
