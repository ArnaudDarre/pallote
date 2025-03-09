---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Breadcrumbs } from "pallote-react"

import { breadcrumbItems } from "./partials/breadcrumbs"
import { DocLinks } from './partials/DocLinks'

# Breadcrumbs

List of links to allow users to navigate the page tree.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2789-3137&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-breadcrumbs--docs"
/>

<div class="docs_block">
  <Breadcrumbs items={breadcrumbItems} />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
export const breadcrumbItems = [
  { label: "path", href: "/path" },
  { label: "to", href: "/path/to" },
  { label: "file" },
];

<Breadcrumbs items={breadcrumbItems} />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<nav aria-label="breadcrumbs" class="breadcrumbs">
  <ol>
    <li class="breadcrumbs_item"><a href="/path">Path</a></li>
    <li class="breadcrumbs_item"><a href="/path/to">To</a></li>
    <li class="breadcrumbs_item"><p aria-current="page">File</p></li>
  </ol>
</nav>
```
  </TabItem>
</Tabs>

## Props

### Separator

<div class="docs_block docs_block-portrait" style={{gap: '1rem'}}>

  <Breadcrumbs items={breadcrumbItems} />
  <Breadcrumbs items={breadcrumbItems} separator="arrow" />
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Breadcrumbs items={breadcrumbItems} />
<Breadcrumbs items={breadcrumbItems} separator="arrow" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<nav aria-label="breadcrumbs" class="breadcrumbs">
  <ol>
    <li class="breadcrumbs_item"><a href="/path">Path</a></li>
    <li class="breadcrumbs_item"><a href="/path/to">To</a></li>
    <li class="breadcrumbs_item"><p aria-current="page">File</p></li>
  </ol>
</nav>

<nav aria-label="breadcrumbs" class="breadcrumbs breadcrumbs-arrow">
  <ol>
    <li class="breadcrumbs_item"><a href="/path">Path</a></li>
    <li class="breadcrumbs_item"><a href="/path/to">To</a></li>
    <li class="breadcrumbs_item"><p aria-current="page">File</p></li>
  </ol>
</nav>
```
  </TabItem>
</Tabs>
