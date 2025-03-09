---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Tag } from "pallote-react"

import { DocLinks } from './partials/DocLinks'

# Tag

Small label representing data like a status or a property.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2819-3812&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-tag--docs"
/>

<div class="docs_block">
  <Tag>Tag</Tag>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Tag>Tag</Tag>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="tag">Tag</p>
```
  </TabItem>
</Tabs>

## Props

### Color

<div class="docs_block">
  <Tag>Primary</Tag>
  <Tag color="secondary">Secondary</Tag>
  <Tag color="grey">Grey</Tag>
  <Tag color="success">Success</Tag>
  <Tag color="info">Info</Tag>
  <Tag color="warning">Warning</Tag>
  <Tag color="error">Error</Tag>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Tag>Primary</Tag>
<Tag color="secondary">Secondary</Tag>
<Tag color="grey">Grey</Tag>
<Tag color="success">Success</Tag>
<Tag color="info">Info</Tag>
<Tag color="warning">Warning</Tag>
<Tag color="error">Error</Tag>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="tag">Primary</p>
<p class="tag tag-secondary">Secondary</p>
<p class="tag tag-grey">Grey</p>
<p class="tag tag-success">Success</p>
<p class="tag tag-info">Info</p>
<p class="tag tag-warning">Warning</p>
<p class="tag tag-error">Error</p>
```
  </TabItem>
</Tabs>

### Dense

<div class="docs_block">
  <Tag dense>Dense</Tag>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Tag dense>Dense</Tag>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="tag tag-dense">Dense</p>
```
  </TabItem>
</Tabs>
