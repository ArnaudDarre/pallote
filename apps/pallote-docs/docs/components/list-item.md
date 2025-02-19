---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Coffee } from '@phosphor-icons/react'
import { List, ListItem } from "pallote-react"

# ListItem

Children of the [List](/docs/components/list.md) component.

<div class="docs_block">
  <ListItem>List item</ListItem>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<ListItem>List item</ListItem>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="list_item">List item</p>
```
  </TabItem>
</Tabs>

## Props

### Icon

<div class="docs_block">
  <List>
    <ListItem icon={<Coffee />}>With icon</ListItem>
    <ListItem icon={<Coffee />} bold>With with icon</ListItem>
  </List>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<ListItem icon={{/* insert icon */}}>With icon</ListItem>
<ListItem icon={{/* insert icon */}} bold>With with icon</ListItem>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="list_item">
  <!-- insert icon -->
  With icon
</p>
<p class="list_item list_item-bold">
  <!-- insert icon -->
  Bold with icon
</p>
```
  </TabItem>
</Tabs>

### Bold

<div class="docs_block">
  <ListItem bold>Bold</ListItem>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<ListItem bold>Bold</ListItem>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="list_item list_item-bold">Bold</p>
```
  </TabItem>
</Tabs>
