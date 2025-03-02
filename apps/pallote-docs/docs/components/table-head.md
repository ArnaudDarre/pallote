---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Table } from "pallote-react"

import { TableHeadExample } from "./partials/table"

# TableHead

The header of a table with the column names.

<div class="docs_block">
  <Table>
    <TableHeadExample />
  </Table>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<TableHead>
  <TableRow>
    <TableCell>Cell</TableCell>
    <TableCell>Cell</TableCell>
  </TableRow>
</TableHead>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<thead class="table_head">
  <tr class="table_row">
    <th class="table_cell">Cell</th>
    <th class="table_cell">Cell</th>
  </tr>
</thead>
```
  </TabItem>
</Tabs>
