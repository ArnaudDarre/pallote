---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Color, Display, Text } from "pallote-react"

# Display

This utility allows to show or hide elements depending on certain conditions.

:::info Difference between packages
For the React package, use the `<Display />` component. This fully removes its chidlren from the DOM, while the classes from the `pallote-css` only hides them with `display: none`.
:::

## Props

### Show

<div class="docs_block docs_block-portrait">
  <Display show="mobileSm">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on small mobile</Text></Color>
  </Display>
  <Display show="mobile">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on mobile</Text></Color>
  </Display>
  <Display show="tablet">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on tablet</Text></Color>
  </Display>
  <Display show="laptop">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on laptop</Text></Color>
  </Display>
  <Display show="desktop">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on desktop</Text></Color>
  </Display>
  <Display show="touch">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Show on touch devices</Text></Color>
  </Display>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Display show="mobileSm">{/* content */} </Display>
<Display show="mobile">{/* content */} </Display>
<Display show="tablet">{/* content */} </Display>
<Display show="laptop">{/* content */} </Display>
<Display show="desktop">{/* content */} </Display>
<Display show="touch">{/* content */} </Display>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="show-mobileSm"><!-- content --></div>
<div class="show-mobile"><!-- content --></div>
<div class="show-tablet"><!-- content --></div>
<div class="show-laptop"><!-- content --></div>
<div class="show-desktop"><!-- content --></div>
<div class="show-touch"><!-- content --></div>
```
  </TabItem>
</Tabs>

### Hide

<div class="docs_block docs_block-portrait">
  <Display hide="mobileSm">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on small mobile</Text></Color>
  </Display>
  <Display hide="mobile">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on mobile</Text></Color>
  </Display>
  <Display hide="tablet">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on tablet</Text></Color>
  </Display>
  <Display hide="laptop">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on laptop</Text></Color>
  </Display>
  <Display hide="desktop">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on desktop</Text></Color>
  </Display>
  <Display hide="touch">
    <Color fill="default" stroke="border" className={'ph-1 pv-½ br-sm'}><Text variant="caption">Hide on touch devices</Text></Color>
  </Display>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Display hide="mobileSm">{/* content */} </Display>
<Display hide="mobile">{/* content */} </Display>
<Display hide="tablet">{/* content */} </Display>
<Display hide="laptop">{/* content */} </Display>
<Display hide="desktop">{/* content */} </Display>
<Display hide="touch">{/* content */} </Display>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="hide-mobileSm"><!-- content --></div>
<div class="hide-mobile"><!-- content --></div>
<div class="hide-tablet"><!-- content --></div>
<div class="hide-laptop"><!-- content --></div>
<div class="hide-desktop"><!-- content --></div>
<div class="hide-touch"><!-- content --></div>
```
  </TabItem>
</Tabs>

## Props details

| Prop | Values | Default |
| - | - | - |
| show | `mobileSm` `mobile` `tablet` `laptop` `desktop` `touch` | | 
| hide | `mobileSm` `mobile` `tablet` `laptop` `desktop` `touch` | |
