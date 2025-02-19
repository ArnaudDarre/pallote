---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Textarea } from "pallote-react"

# Textarea

Allow users to enter text on multiple lines. This component uses the base structure of the [Input](/docs/components/input) component.

<div class="docs_block">
  <Textarea id="textarea" label="Textarea" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="textarea" label="Textarea" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input textarea">
  <label for="textarea" class="input_label">Textarea</label>
  <textarea id="textarea" rows="4" class="input_control"></textarea>
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
  <Textarea id="focused" label="IsFocused" isFocused />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="focused" label="IsFocused" isFocused />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-focused textarea">
  <label for="focused" class="input_label">Focused</label>
  <textarea id="focused" rows="4" class="input_control"></textarea>
</div>
```
  </TabItem>
</Tabs>

### Error

Notify users that the field has an error.

<div class="docs_block">
  <Textarea id="error" label="Error" error />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="error" label="Error" error />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-error textarea">
  <label for="error" class="input_label">Error</label>
  <textarea id="error" rows="4" class="input_control"></textarea>
</div>
```
  </TabItem>
</Tabs>

### Disabled

Add this class to signal users the field is disabled.

<div class="docs_block">
  <Textarea id="disabled" label="Disabled" disabled />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="disabled" label="Disabled" disabled />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-disabled textarea">
  <label for="disabled" class="input_label">Disabled</label>
  <textarea id="disabled" rows="4" class="input_control"></textarea>
</div>
```
  </TabItem>
</Tabs>

### Optional

<div class="docs_block">
  <Textarea id="optional" label="Optional" optional />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Textarea id="optional" label="Optional" optional />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-optional textarea">
  <label for="optional" class="input_label">Optional</label>
  <textarea id="optional" rows="4" class="input_control"></textarea>
</div>
```
  </TabItem>
</Tabs>
