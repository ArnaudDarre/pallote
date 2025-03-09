---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Status } from "pallote-react"

import { DocLinks } from './partials/DocLinks'

# Status

Indicate the status of an object.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2819-5685&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-status--docs"
/>

<div class="docs_block">
  <Status>Status</Status>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Status>Status</Status>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="status">Status</p>
```
  </TabItem>
</Tabs>

## Props

### Color

<div class="docs_block">
  <Status>Inactive</Status>
  <Status color="success">Success</Status>
  <Status color="info">Info</Status>
  <Status color="warning">Warning</Status>
  <Status color="error">Error</Status>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Status>Inactive</Status>
<Status color="success">Success</Status>
<Status color="info">Info</Status>
<Status color="warning">Warning</Status>
<Status color="error">Error</Status>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="status">Inactive</p>
<p class="status status-success">Success</p>
<p class="status status-info">Info</p>
<p class="status status-warning">Warning</p>
<p class="status status-error">Error</p>
```
  </TabItem>
</Tabs>

### Dense

<div class="docs_block">
  <Status dense>Dense</Status>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Status dense>Dense</Status>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="status status-dense">Dense</p>
```
  </TabItem>
</Tabs>
