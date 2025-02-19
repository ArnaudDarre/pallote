---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Button, Buttons } from "pallote-react"

# Buttons

Component for every call-to-action.

<div class="docs_block">
  <Buttons>
    <Button>Save</Button>
    <Button color="secondary">Edit</Button>
  </Buttons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button>
  <Button>Save</Button>
  <Button color="secondary">Edit</Button>
</Buttons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="buttons">
  <button type="button" class="button">Save</button>
  <button type="button" class="button button-secondary">Edit</button>
</div>
```
  </TabItem>
</Tabs>

## Props

### Direction

Change the button style.

<div class="docs_block">
  <Buttons>
    <Button>Landscape</Button>
    <Button color="secondary">Landscape</Button>
  </Buttons>
  <Buttons direction="portrait">
    <Button>Portrait</Button>
    <Button color="secondary">Portrait</Button>
  </Buttons>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Buttons>
  <Button>Landscape</Button>
  <Button color="secondary">Landscape</Button>
</Buttons>
<Buttons direction="portrait">
  <Button>Portrait</Button>
  <Button color="secondary">Portrait</Button>
</Buttons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="buttons">
  <button type="button" class="button">Landscape</button>
  <button type="button" class="button button-secondary">Landscape</button>
</div>
<div class="buttons buttons-portrait">
  <button type="button" class="button">Portrait</button>
  <button type="button" class="button button-secondary">Portrait</button>
</div>
```
  </TabItem>
</Tabs>

### FullWidth

<div class="docs_block">
  <Buttons fullWidth>
    <Button>Full width</Button>
    <Button color="secondary">Full width</Button>
  </Buttons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Buttons fullWidth>
  <Button>Full width</Button>
  <Button color="secondary">Full width</Button>
</Buttons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="buttons buttons-fullWidth">
  <button type="button" class="button">Full width</button>
  <button type="button" class="button button-secondary">Full width</button>
</div>
```
  </TabItem>
</Tabs>

### Wide

<div class="docs_block">
  <Buttons wide>
    <Button>Wide</Button>
    <Button color="secondary">Wide</Button>
  </Buttons>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Buttons wide>
  <Button>Wide</Button>
  <Button color="secondary">Wide</Button>
</Buttons>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="buttons buttons-wide">
  <button type="button" class="button">Wide</button>
  <button type="button" class="button button-secondary">Wide</button>
</div>
```
  </TabItem>
</Tabs>
