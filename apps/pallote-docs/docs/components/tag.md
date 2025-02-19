---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Tag } from "pallote-react"

# Tag

Small label representing date like status or property.

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

Change the Tag style.

<div class="docs_block">
  <Tag color="primary">Primary</Tag>
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
<Tag color="primary">Primary</Tag>
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

### Size

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
