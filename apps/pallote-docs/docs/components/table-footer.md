---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { TableFooter } from "pallote-react"

import { DocLinks } from './partials/DocLinks'

# TableFooter

Pagination and filter component for a table.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2819-4877&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-tablefooter--docs"
/>

:::info Work in progress
This component is not functional yet and only serves as a style guide for now.
:::

<div class="docs_block">
  <TableFooter />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<TableFooter />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="table_footer">
  <div class="input select input-dense table_rowSelect">
    <select class="input_control" name="rows" id="rows" required="">
      <!-- list of options -->
    </select>
  </div>
  <div class="buttons buttons-landscape table_pagination">
    <!-- list of buttons -->
  </div>
</div>
```
  </TabItem>
</Tabs>
