---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Checkbox, Checkboxes } from "pallote-react"

# Checkboxes

Allow users to select multiple options from a list. This component uses the base structure of the [Input](/docs/components/input) component.

<div class="docs_block">
  <Checkboxes label="Legend">
    <Checkbox id="checkbox_1" value="1" label="Option 1" />
    <Checkbox id="checkbox_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Legend">
  <Checkbox id="checkbox_1" value="1" label="Option 1" />
  <Checkbox id="checkbox_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <legend class="input_label">Legend</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="checkbox_1" value="checkbox_1" class="checkbox_control" />
      <label for="checkbox_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="checkbox_2" value="checkbox_2" class="checkbox_control" />
      <label for="checkbox_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

## Usage

To follow user-centred design and GDPR best practices, we should only ask users for information we need. In that respect, all form fields of the Pallote component library are by default required.

For the CSS library, you do not need to add the `required` property to the form fields, it is added automatically with the javascript import.

## Props

### Direction

<div class="docs_block">
  <Checkboxes label="Landscape">
    <Checkbox id="landscape_1" value="1" label="Option 1" />
    <Checkbox id="landscape_2" value="2" label="Option 2" />
  </Checkboxes>
  <Checkboxes label="Portrait" direction="portrait">
    <Checkbox id="portrait_1" value="1" label="Option 1" />
    <Checkbox id="portrait_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Landscape">
  <Checkbox id="landscape_1" value="1" label="Option 1" />
  <Checkbox id="landscape_2" value="2" label="Option 2" />
</Checkboxes>

<Checkboxes label="Portrait" direction="portrait">
  <Checkbox id="portrait_1" value="1" label="Option 1" />
  <Checkbox id="portrait_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <legend class="input_label">Landscape</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="landscape_1" value="landscape_1" class="checkbox_control" />
      <label for="landscape_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="landscape_2" value="landscape_2" class="checkbox_control" />
      <label for="landscape_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>

<div class="input input-portrait">
  <legend class="input_label">Portrait</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="landscape_1" value="landscape_1" class="checkbox_control" />
      <label for="landscape_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="landscape_2" value="landscape_2" class="checkbox_control" />
      <label for="landscape_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Error

<div class="docs_block">
  <Checkboxes label="Error" error>
    <Checkbox id="error_1" value="1" label="Option 1" />
    <Checkbox id="error_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Error" error>
  <Checkbox id="error_1" value="1" label="Option 1" />
  <Checkbox id="error_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-error">
  <legend class="input_label">Error</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="error_1" value="error_1" class="checkbox_control" />
      <label for="error_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="error_2" value="error_2" class="checkbox_control" />
      <label for="error_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Disabled

<div class="docs_block">
  <Checkboxes label="Disabled" disabled>
    <Checkbox id="disabled_1" value="1" label="Option 1" />
    <Checkbox id="disabled_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Disabled" disabled>
  <Checkbox id="disabled_1" value="1" label="Option 1" />
  <Checkbox id="disabled_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-disabled">
  <legend class="input_label">Disabled</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="disabled_1" value="disabled_1" class="checkbox_control" />
      <label for="disabled_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="disabled_2" value="disabled_2" class="checkbox_control" />
      <label for="disabled_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Optional

<div class="docs_block">
  <Checkboxes label="Optional" optional>
    <Checkbox id="optional_1" value="1" label="Option 1" />
    <Checkbox id="optional_2" value="2" label="Option 2" />
  </Checkboxes>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Checkboxes label="Optional" optional>
  <Checkbox id="optional_1" value="1" label="Option 1" />
  <Checkbox id="optional_2" value="2" label="Option 2" />
</Checkboxes>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-optional">
  <legend class="input_label">Optional</legend>
  <div class="input_control checkboxes">
    <div class="checkbox">
      <input type="checkbox" id="optional_1" value="optional_1" class="checkbox_control" />
      <label for="optional_1" class="checkbox_label">Option 1</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" id="optional_2" value="optional_2" class="checkbox_control" />
      <label for="optional_2" class="checkbox_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>
