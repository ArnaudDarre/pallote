---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Radio } from "pallote-react"

import { DocLinks } from './partials/DocLinks'

# Radio

Single radio button component.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2792-3893&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-radio--docs"
/>

<div class="docs_block">
  <Radio name="radio" id="radio_1" value="1" label="Radio" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Radio name="radio" id="radio_1" value="1" label="Radio" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="radio">
  <input type="radio" name="radio" id="radio_1" value="1" class="radio_control" />
  <label for="radio_1" class="radio_label">Radio</label>
</div>
```
  </TabItem>
</Tabs>

## Props

### Checked

<div class="docs_block">
  <Radio name="checked" id="checked_1" value="1" label="Checked" checked />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Radio name="checked" id="checked_1" value="1" label="Checked" checked />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="radio">
  <input type="radio" name="checked" id="checked_1" value="1" class="radio_control" checked />
  <label for="checked_1" class="radio_label">Radio</label>
</div>
```
  </TabItem>
</Tabs>

### Disabled

<div class="docs_block">
  <Radio name="disabled" id="disabled_1" value="1" label="Disabled" disabled />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Radio name="disabled" id="disabled_1" value="1" label="Disabled" disabled />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="radio">
  <input type="radio" name="disabled" id="disabled_1" value="1" class="radio_control" disabled />
  <label for="disabled_1" class="radio_label">Radio</label>
</div>
```
  </TabItem>
</Tabs>
