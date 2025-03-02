---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { CopySimple, PencilSimple } from '@phosphor-icons/react'
import { Button, Buttons, Table, TableBody, TableCell, TableRow } from "pallote-react"

import { TableBodyExample } from "./partials/table"

# TableRow

The content of a table component.

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
