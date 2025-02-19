---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Radio, RadioButtons } from "pallote-react"

# Radio buttons

Allow users to select one option from a list. This component uses the base structure of the [Input](/docs/components/input) component.

<div class="docs_block">
  <RadioButtons label="Legend">
    <Radio name="radio" id="radio_1" value="1" label="Option 1" />
    <Radio name="radio" id="radio_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Legend">
  <Radio name="radio" id="radio_1" value="1" label="Option 1" />
  <Radio name="radio" id="radio_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <legend class="input_label">Legend</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="radio" id="radio_1" value="radio_1" class="radio_control" />
      <label for="radio_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="radio" id="radio_2" value="radio_2" class="radio_control" />
      <label for="radio_2" class="radio_label">Option 2</label>
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
  <RadioButtons label="Landscape">
    <Radio name="landscape" id="landscape_1" value="1" label="Option 1" />
    <Radio name="landscape" id="landscape_2" value="2" label="Option 2" />
  </RadioButtons>
  <RadioButtons label="Portrait" direction="portrait">
    <Radio name="portrait" id="portrait_1" value="1" label="Option 1" />
    <Radio name="portrait" id="portrait_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Landscape">
  <Radio name="landscape" id="landscape_1" value="1" label="Option 1" />
  <Radio name="landscape" id="landscape_2" value="2" label="Option 2" />
</RadioButtons>

<RadioButtons label="Portrait" direction="portrait">
  <Radio name="portrait" id="portrait_1" value="1" label="Option 1" />
  <Radio name="portrait" id="portrait_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input">
  <legend class="input_label">Landscape</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="landscape" id="landscape_1" value="landscape_1" class="radio_control" />
      <label for="landscape_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="landscape" id="landscape_2" value="landscape_2" class="radio_control" />
      <label for="landscape_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>

<div class="input input-portrait">
  <legend class="input_label">Portrait</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="portrait" id="portrait_1" value="portrait_1" class="radio_control" />
      <label for="portrait_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="portrait" id="portrait_2" value="portrait_2" class="radio_control" />
      <label for="portrait_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Error

<div class="docs_block">
  <RadioButtons label="Error" error>
    <Radio name="error" id="error_1" value="1" label="Option 1" />
    <Radio name="error" id="error_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Error" error>
  <Radio name="error" id="error_1" value="1" label="Option 1" />
  <Radio name="error" id="error_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-error">
  <legend class="input_label">Error</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="error" id="error_1" value="error_1" class="radio_control" />
      <label for="error_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="error" id="error_2" value="error_2" class="radio_control" />
      <label for="error_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Disabled

<div class="docs_block">
  <RadioButtons label="Disabled" disabled>
    <Radio name="disabled" id="disabled_1" value="1" label="Option 1" />
    <Radio name="disabled" id="disabled_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Disabled" disabled>
  <Radio name="disabled" id="disabled_1" value="1" label="Option 1" />
  <Radio name="disabled" id="disabled_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-disabled">
  <legend class="input_label">Disabled</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="disabled" id="disabled_1" value="disabled_1" class="radio_control" />
      <label for="disabled_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="disabled" id="disabled_2" value="disabled_2" class="radio_control" />
      <label for="disabled_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Optional

<div class="docs_block">
  <RadioButtons label="Optional" optional>
    <Radio name="optional" id="optional_1" value="1" label="Option 1" />
    <Radio name="optional" id="optional_2" value="2" label="Option 2" />
  </RadioButtons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<RadioButtons label="Optional" optional>
  <Radio name="optional" id="optional_1" value="1" label="Option 1" />
  <Radio name="optional" id="optional_2" value="2" label="Option 2" />
</RadioButtons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="input input-optional">
  <legend class="input_label">Optional</legend>
  <div class="input_control radios">
    <div class="radio">
      <input type="radio" name="optional" id="optional_1" value="optional_1" class="radio_control" />
      <label for="optional_1" class="radio_label">Option 1</label>
    </div>
    <div class="radio">
      <input type="radio" name="optional" id="optional_2" value="optional_2" class="radio_control" />
      <label for="optional_2" class="radio_label">Option 2</label>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>
