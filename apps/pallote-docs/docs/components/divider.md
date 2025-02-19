---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Divider, Grid } from "pallote-react"

# Divider

Line to separate content.

<div class="docs_block">
  <Divider/>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Divider/>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<span class="divider"></span>
```
  </TabItem>
</Tabs>

## Props

### Direction

<div class="docs_block">
  <Divider/>
  <div><Divider direction="portrait" className="h-4" /></div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Divider/>
<Divider direction="portrait" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<span class="divider"></span>
<span class="divider divider-portrait"></span>
```
  </TabItem>
</Tabs>

:::info Size
A divider automatically takes up to full width or height of its parent.
:::

### Size

<div class="docs_block">
  <Divider size="sm" />
  <Divider/>
  <Divider size="lg" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Divider size="sm" />
<Divider/>
<Divider size="lg" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<span class="divider divider-sm"></span>
<span class="divider"></span>
<span class="divider divider-lg"></span>
```
  </TabItem>
</Tabs>
