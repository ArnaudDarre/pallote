---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Grid, Input } from "pallote-react"

# Input

Allow users to enter text that will fit on a single line. This is the most basic form field.

<div class="docs_block">
  <Input id="input" label="Input" />
</div>


<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Input id="input" label="Input" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <label for="input" class="input_label">Input</label>
  <input type="text" id="input" class="input_control">
</div>
```
  </TabItem>
</Tabs>

## Usage

To follow user-centred design and GDPR best practices, we should only ask users for information we need. In that respect, all form fields of the Pallote component library are by default required.

For the CSS library, you do not need to add the `required` property to the form fields, it is added automatically with the javascript import.

## Props

### Type

Change the input type property.

<div class="docs_block">
  <Grid wrapper spacing={2}>
    <Grid item xs="6"><Input type="date" id="date" label="Date" /></Grid>
    <Grid item xs="6"><Input type="email" id="email" label="Email" /></Grid>
    <Grid item xs="6"><Input type="number" id="number" label="Number" /></Grid>
    <Grid item xs="6"><Input type="tel" id="tel" label="Telephone" /></Grid>
    <Grid item xs="6"><Input type="text" id="text" label="Text" /></Grid>
    <Grid item xs="6"><Input type="time" id="time" label="Time" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Input type="date" id="date" label="Date" />
<Input type="email" id="email" label="Email" />
<Input type="number" id="number" label="Number" />
<Input type="tel" id="tel" label="Telephone" />
<Input type="text" id="text" label="Text" />
<Input type="time" id="time" label="Time" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <label for="date" class="input_label">Date</label>
  <input type="date" id="date" class="input_control">
</div>

<div class="input">
  <label for="email" class="input_label">Email</label>
  <input type="email" id="email" class="input_control">
</div>

<div class="input">
  <label for="number" class="input_label">Number</label>
  <input type="number" id="number" class="input_control">
</div>

<div class="input">
  <label for="tel" class="input_label">Telephone</label>
  <input type="tel" id="tel" class="input_control">
</div>

<div class="input">
  <label for="text" class="input_label">Text</label>
  <input type="text" id="text" class="input_control">
</div>

<div class="input">
  <label for="time" class="input_label">Time</label>
  <input type="time" id="time" class="input_control">
</div>
```
  </TabItem>
</Tabs>

### isFocused

Focus on a input on page load.

<div class="docs_block">
  <Input id="focused" label="IsFocused" isFocused />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Input id="focused" label="IsFocused" isFocused />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-focused">
  <label for="focused" class="input_label">Focused</label>
  <input type="text" id="focused" class="input_control">
</div>
```
  </TabItem>
</Tabs>

### Error

Notify users that the field has an error.

<div class="docs_block">
  <Input id="error" label="Error" error />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Input id="error" label="Error" error />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-error">
  <label for="error" class="input_label">Error</label>
  <input type="text" id="error" class="input_control">
</div>
```
  </TabItem>
</Tabs>

### Disabled

Add this class to signal users the field is disabled.

<div class="docs_block">
  <Input id="disabled" label="Disabled" disabled />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Input id="disabled" label="Disabled" disabled />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-disabled">
  <label for="disabled" class="input_label">Disabled</label>
  <input type="text" id="disabled" class="input_control">
</div>
```
  </TabItem>
</Tabs>

### Optional

<div class="docs_block">
  <Input id="optional" label="Optional" optional />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Input id="optional" label="Optional" optional />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-optional">
  <label for="optional" class="input_label">Optional</label>
  <input type="text" id="optional" class="input_control">
</div>
```
  </TabItem>
</Tabs>
