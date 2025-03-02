---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Table, TableBody } from "pallote-react"

import { TableBodyExample } from "./partials/table"

# TableBody

The content of a table component.

<div class="docs_block">
  <Table>
    <TableBodyExample />
  </Table>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<TableBody>
  <TableRow>
    <TableCell>Cell</TableCell>
    <TableCell>Cell</TableCell>
  </TableRow>
  {/* repeat <TableRow /> */}
</TableBody>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<tbody class="table_body">
  <tr class="table_row">
    <td class="table_cell">Cell</td>
    <td class="table_cell">Cell</td>
  </tr>
  <!-- repeat <tr /> -->
</tbody>
```
  </TabItem>
</Tabs>
