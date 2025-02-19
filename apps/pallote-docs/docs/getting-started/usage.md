---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Usage

Learn the basics of working with the Pallote design system.

## Import components (for Pallote React)

After installing `pallote-react`, you can import any component of the design system. See [Components](/docs/category/components) for a full list of available components.

```jsx
import React from 'react';
import { Button } from 'palotte-react';

export default function ButtonTest() {
  return <Button>Hello Pallote</Button>;
}
```

## Customise

Pallote is, at it's core. a style library built with SASS. The design tokens (colours, font styles and hierarchy, border radius, etc.) can be overriden to match with your own design system.

### Override variables

The framework has a set of built-in variables that create the design look and feel. To override them, add a variable with the same name in your Sass style file. To see details of each variable, see [Variables](/docs/category/variables/) pages.

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```css
$primary: #007A1E;

@import '~/node_modules/pallote-css/dist/pallote.scss';
```
  </TabItem>
  <TabItem value="css" label="CSS">

```css
$primary: #007A1E;

@import '~/node_modules/pallote-css/dist/pallote.scss';
```
  </TabItem>
</Tabs>

:::info Code order
The code must be placed above any import of Pallote CSS.
:::

### Custom styles

To change a component style, see the documentation for each component and add create an instance of the class with new properties in your style file.

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```css
@import '~/node_modules/pallote-css/dist/pallote.scss';

.button {
  text-decoration: underline;
}
```
  </TabItem>
  <TabItem value="css" label="CSS">

```css
@import '~/node_modules/pallote-css/dist/pallote.scss';

.button {
  text-decoration: underline;
}
```
  </TabItem>
</Tabs>

:::info Code order
The class must be placed below any import of Pallote CSS.
:::

### Custom classes

You can add your own classes to any componnent to override the style.

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

For a React component, add a `className` prop to the component. It will be applied to the parent HTML tag.

```jsx
import React from 'react';
import { Button } from 'palotte-react';
import 'path/to/custom.css';

export default function ButtonTest() {
  return <Button className="custom-class">Hello Pallote</Button>;
}
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<button class="button custom-class">Button</button>
```
  </TabItem>
</Tabs>
