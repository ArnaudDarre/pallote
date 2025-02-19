---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Select } from "pallote-react"

# Select

Allow users to select an option from a long list. This component uses the base structure of the [Input](/docs/components/input) component.

<div class="docs_block">
  <Select id="select" label="Select">
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</div>


<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Select id="select" label="Select">
  <option value=""></option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>`
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input select">
  <label for="select" class="input_label">Select</label>
  <select name="select" id="select" class="input_control">
    <option value=""></option>
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
  </select>
</div>
```
  </TabItem>
</Tabs>

## Usage

To follow user-centred design and GDPR best practices, we should only ask users for information we need. In that respect, all form fields of the Pallote component library are by default required.

For the CSS library, you do not need to add the `required` property to the form fields, it is added automatically with the javascript import.

## Props

### isFocused

Focus on a input on page load.

<div class="docs_block">
  <Select id="focused" label="IsFocused" isFocused>
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Select id="focused" label="IsFocused" isFocused>
  <option value=""></option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-focused select">
  <label for="focused" class="input_label">Focused</label>
  <select name="focused" id="focused" class="input_control">
    <option value=""></option>
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
  </select>
</div>
```
  </TabItem>
</Tabs>

### Error

Notify users that the field has an error.

<div class="docs_block">
  <Select id="error" label="Error" error>
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Select id="error" label="Error" error>
  <option value=""></option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-error select">
  <label for="error" class="input_label">Error</label>
  <select name="error" id="error" class="input_control">
    <option value=""></option>
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
  </select>
</div>
```
  </TabItem>
</Tabs>

### Disabled

Add this class to signal users the field is disabled.

<div class="docs_block">
  <Select id="disabled" label="Disabled" disabled>
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Select id="disabled" label="Disabled" disabled>
  <option value=""></option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-disabled select">
  <label for="disabled" class="input_label">Disabled</label>
  <select name="disabled" id="disabled" class="input_control">
    <option value=""></option>
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
  </select>
</div>
```
  </TabItem>
</Tabs>

### Optional

<div class="docs_block">
  <Select id="optional" label="Optional" optional>
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Select id="optional" label="Optional" optional>
  <option value=""></option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-optional select">
  <label for="optional" class="input_label">Optional</label>
  <select name="optional" id="optional" class="input_control">
    <option value=""></option>
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
  </select>
</div>
```
  </TabItem>
</Tabs>
