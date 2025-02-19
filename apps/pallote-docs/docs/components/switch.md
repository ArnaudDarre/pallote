---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Switch } from "pallote-react"

# Switch

Allow user to toggle between two states.

<div class="docs_block">
  <Switch id="switch" label="Switch" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Switch id="switch" label="Switch" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="switch">
  <input class="switch_input" type="checkbox" name="switch" id="switch" aria-label="Switch">
  <span class="switch_toggle"></span>
</div>
```
  </TabItem>
</Tabs>

## Props

### Start label

<div class="docs_block">
  <Switch startLabel="Start label" id="startLabel" label="Switch with a start label"></Switch>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Switch startLabel="Start label" id="startLabel" label="Switch with a start label"></Switch>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="switch">
  <p class="text body switch_label">Start label</p>
  <input class="switch_input" type="checkbox" name="startLabel" id="startLabel" aria-label="Switch with a start label">
  <span class="switch_toggle"></span>
</div>
```
  </TabItem>
</Tabs>

:::info Combine labels
You can combine the `startLabel` and `endLabel` props.
:::

### End label

<div class="docs_block">
  <Switch endLabel="End label" id="endLabel" label="Switch with an end label" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Switch endLabel="End label" id="endLabel" label="Switch with an end label" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="switch">
  <input class="switch_input" type="checkbox" name="endLabel" id="endLabel" aria-label="Switch with an end label">
  <span class="switch_toggle"></span>
  <p class="text body switch_label">End label</p>
</div>
```
  </TabItem>
</Tabs>

### Checked

<div class="docs_block">
  <Switch id="checked" checked label="Switch checked by default" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Switch id="checked" checked label="Switch checked by default" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="switch">
  <input class="switch_input" type="checkbox" name="checked" id="checked" checked aria-label="Switch checked by default">
  <span class="switch_toggle"></span>
</div>
```
  </TabItem>
</Tabs>

### Disabled

<div class="docs_block">
  <Switch id="disabled" disabled label="Disabled switch" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Switch id="disabled" disabled label="Disabled switch" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="switch">
  <input class="switch_input" type="checkbox" name="disabled" id="disabled" disabled aria-label="Disabled switch">
  <span class="switch_toggle"></span>
</div>
```
  </TabItem>
</Tabs>
