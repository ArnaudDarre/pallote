---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Coffee } from '@phosphor-icons/react'
import { List, ListItem } from "pallote-react"

# List

Collection of related items.

<div class="docs_block">
  <List>
    <ListItem icon={<Coffee />}>This is a list of items</ListItem>
    <ListItem>Use this component for consistent</ListItem>
    <ListItem>Spacing and styling</ListItem>
  </List>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<List>
  <ListItem icon={{/* insert icon */}}>This is a list of items</ListItem>
  <ListItem>Use this component for consistent</ListItem>
  <ListItem>Spacing and styling</ListItem>
</List>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="list">
  <p class="list_item">
    <!-- insert icon -->
    This is a list of items
  </p>
  <p class="list_item">Use this component for consistent</p>
  <p class="list_item">Spacing and styling</p>
</div>
```
  </TabItem>
</Tabs>

## Props

### Dense

<div class="docs_block">
  <List dense>
    <ListItem>This is a dense list</ListItem>
    <ListItem>The space between items</ListItem>
    <ListItem>And font size are smaller</ListItem>
  </List>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<List dense>
  <ListItem>This is a dense list</ListItem>
  <ListItem>The space between items</ListItem>
  <ListItem>And font size are smaller</ListItem>
</List>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="list list-dense">
  <p class="list_item">This is a dense list of items</p>
  <p class="list_item">Where the spacing</p>
  <p class="list_item">And the font are smaller</p>
</div>
```
  </TabItem>
</Tabs>
