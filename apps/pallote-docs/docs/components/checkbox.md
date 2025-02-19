---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Checkbox } from "pallote-react"

# Checkbox

This component is mainly used as a child of the [Checkboxes](/docs/components/checkboxes.md) component.

<div class="docs_block">
  <Checkbox id="checkbox" value="checkbox" label="Checkbox" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkbox id="checkbox" value="checkbox" label="Checkbox" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="checkbox">
  <input type="checkbox" id="checkbox" value="checkbox" class="checkbox_control" />
  <label for="checkbox" class="checkbox_label">Checkbox</label>
</div>
```
  </TabItem>
</Tabs>

## Props

### Checked

<div class="docs_block">
  <Checkbox id="checked" value="Checked" label="Checked" checked />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkbox id="checked" value="Checked" label="Checked" checked />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="checkbox">
  <input type="checkbox" id="checked" value="Checked" class="checkbox_control" checked />
  <label for="checked" class="checkbox_label">Checkbox</label>
</div>
```
  </TabItem>
</Tabs>

### Disabled

<div class="docs_block">
  <Checkbox id="disabled" value="Disabled" label="Disabled" disabled />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkbox id="disabled" value="Disabled" label="Disabled" disabled />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="checkbox">
  <input type="checkbox" id="disabled" value="Disabled" class="checkbox_control" disabled />
  <label for="disabled" class="checkbox_label">Checkbox</label>
</div>
```
  </TabItem>
</Tabs>
