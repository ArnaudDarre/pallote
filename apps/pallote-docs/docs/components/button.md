---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Coffee, Moon, Sun } from '@phosphor-icons/react'
import { Button } from "pallote-react"

# Button

Component for every call-to-action.

<div class="docs_block">
  <Button>Button</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button>Button</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button">Button</button>
```
  </TabItem>
</Tabs>

## Props

### Component

Change the HTML tag of the component

<div class="docs_block">
  <Button>Button</Button>
  <Button component="a">Anchor link</Button>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Button>Button</Button>
<Button component="a">Anchor link</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button">Button</button>
<a href="#" class="button">Anchor link</a>
```
  </TabItem>
</Tabs>

### Kind

Change the button style.

<div class="docs_block">
  <Button>Text</Button>
  <Button kind="icon"><Coffee /></Button>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Button>Text</Button>
<Button kind="icon">{/* insert icon */}</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button">Text</button>
<button class="button button-icon"><!-- insert icon --></button>
```
  </TabItem>
</Tabs>

### Variant

Change the button style.

<div class="docs_block">
  <Button>Fill</Button>
  <Button variant="stroke">Stroke</Button>
  <Button variant="transparent">Transparent</Button>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Button>Fill</Button>
<Button variant="stroke">Stroke</Button>
<Button variant="transparent">Transparent</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button">Fill</button>
<button class="button button-stroke">Stroke</button>
<button class="button button-transparent">Transparent</button>
```
  </TabItem>
</Tabs>

### Size

<div class="docs_block">
  <Button size="xs">Xsmall</Button>
  <Button size="sm">Small</Button>
  <Button>Medium</Button>
  <Button size="lg">Large</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button size="xs">Xsmall</Button>
<Button size="sm">Small</Button>
<Button>Medium</Button>
<Button size="lg">Large</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button button-xs">Xsmall</button>
<button class="button button-sm">Small</button>
<button class="button">Medium</button>
<button class="button button-lg">Large</button>
```
  </TabItem>
</Tabs>

### Color

<div class="docs_block">
  <div class="docs_row">
    <Button>Primary</Button>
    <Button color="secondary">Secondary</Button>
  </div>
  <div class="docs_row">
    <Button color="success">Success</Button>
    <Button color="info">Info</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
  </div>
  <div class="docs_row">
    <Button color="grey">Grey</Button>
    <Button color="main">Main</Button>
    <Button color="contrast">Contrast</Button>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button>Primary</Button>
<Button color="secondary">Secondary</Button>

<Button color="success">Success</Button>
<Button color="info">Info</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>

<Button color="grey">Grey</Button>
<Button color="main">Main</Button>
<Button color="contrast">Contrast</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button">Primary</button>
<button class="button button-secondary">Secondary</button>

<button class="button button-success">Success</button>
<button class="button button-info">Info</button>
<button class="button button-warning">Warning</button>
<button class="button button-error">Error</button>

<button class="button button-grey">Grey</button>
<button class="button button-main">Main</button>
<button class="button button-contrast">Contrast</button>
```
  </TabItem>
</Tabs>

### FullWidth

<div class="docs_block">
  <Button fullWidth>Full width</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button fullWidth>Full width</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button button-fullWidth">Full width</button>
```
  </TabItem>
</Tabs>

### Disabled

<div class="docs_block">
  <Button disabled>Disabled</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button disabled>Disabled</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button button-disabled">Disabled</button>
```
  </TabItem>
</Tabs>

### Icons

<div class="docs_block">
  <Button iconLeft={<Sun />}>Icon left</Button>
  <Button iconRight={<Moon />}>Icon right</Button>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Button iconLeft={{/* insert icon */}}>Icon left</Button>
<Button iconRight={{/* insert icon */}}>Icon right</Button>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button type="button" class="button">
  <!-- insert icon -->
  Icon left
</button>
<button type="button" class="button">
  Icon right
  <!-- insert icon -->
</button>
```
  </TabItem>
</Tabs>
