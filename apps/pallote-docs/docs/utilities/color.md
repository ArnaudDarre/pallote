---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Color, Text } from "pallote-react"

# Color

Use this utility props and classes to apply a custom background or stroke colour to an element.

If you are using the React package, wrap your component within the `<Color />` component. For Pallote CSS, simply apply the classes to your element.

:::info Text colour
The text colour is automatically applied using the `contrast` colour variables.
:::

## Props

### Fill & Stroke

Add the following classes to an element to override the background color or border color. When you change the background color with the `fill` utility, the text color will update automatically.

#### Common

<div class="docs_block">
  <div class="docs_row">
    <Color fill="main" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">main</Text></Color>
    <Color fill="contrast" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">contrast</Text></Color>
  </div>
  <div class="docs_row">
    <Color stroke="main" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">main</Text></Color>
    <Color stroke="contrast" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">contrast</Text></Color>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Color fill="main"></Color>
<Color fill="contrast"></Color>

<Color stroke="main"></Color>
<Color stroke="contrast"></Color>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-main"></div>
<div class="fill-contrast"></div>

<div class="stroke-main"></div>
<div class="stroke-contrast"></div>
```
  </TabItem>
</Tabs>

#### Grey

<div class="docs_block">
  <div class="docs_row">
    <Color fill="grey90" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 90</Text></Color>
    <Color fill="grey80" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 80</Text></Color>
    <Color fill="grey70" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 70</Text></Color>
    <Color fill="grey60" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 60</Text></Color>
    <Color fill="grey50" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 50</Text></Color>
    <Color fill="grey40" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 40</Text></Color>
    <Color fill="grey30" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 30</Text></Color>
    <Color fill="grey20" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 20</Text></Color>
    <Color fill="grey10" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 10</Text></Color>
    <Color fill="grey5" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 5</Text></Color>
  </div>
  <div class="docs_row">
    <Color stroke="grey90" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 90</Text></Color>
    <Color stroke="grey80" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 80</Text></Color>
    <Color stroke="grey70" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 70</Text></Color>
    <Color stroke="grey60" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 60</Text></Color>
    <Color stroke="grey50" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 50</Text></Color>
    <Color stroke="grey40" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 40</Text></Color>
    <Color stroke="grey30" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 30</Text></Color>
    <Color stroke="grey20" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 20</Text></Color>
    <Color stroke="grey10" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 10</Text></Color>
    <Color stroke="grey5" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">grey 5</Text></Color>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Color fill="grey90"></Color>
<Color fill="grey80"></Color>
<Color fill="grey70"></Color>
<Color fill="grey60"></Color>
<Color fill="grey50"></Color>
<Color fill="grey40"></Color>
<Color fill="grey30"></Color>
<Color fill="grey20"></Color>
<Color fill="grey10"></Color>
<Color fill="grey5"></Color>

<Color stroke="grey90"></Color>
<Color stroke="grey80"></Color>
<Color stroke="grey70"></Color>
<Color stroke="grey60"></Color>
<Color stroke="grey50"></Color>
<Color stroke="grey40"></Color>
<Color stroke="grey30"></Color>
<Color stroke="grey20"></Color>
<Color stroke="grey10"></Color>
<Color stroke="grey5"></Color>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-grey90"></div>
<div class="fill-grey80"></div>
<div class="fill-grey70"></div>
<div class="fill-grey60"></div>
<div class="fill-grey50"></div>
<div class="fill-grey40"></div>
<div class="fill-grey30"></div>
<div class="fill-grey20"></div>
<div class="fill-grey10"></div>
<div class="fill-grey5"></div>

<div class="stroke-grey90"></div>
<div class="stroke-grey80"></div>
<div class="stroke-grey70"></div>
<div class="stroke-grey60"></div>
<div class="stroke-grey50"></div>
<div class="stroke-grey40"></div>
<div class="stroke-grey30"></div>
<div class="stroke-grey20"></div>
<div class="stroke-grey10"></div>
<div class="stroke-grey5"></div>
```
  </TabItem>
</Tabs>

#### Background

<div class="docs_block">
  <div class="docs_row">
    <Color fill="default" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">default</Text></Color>
    <Color fill="paper" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">paper</Text></Color>
  </div>
  <div class="docs_row">    
    <Color stroke="default" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">default</Text></Color>
    <Color stroke="paper" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">paper</Text></Color>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Color fill="default"></Color>
<Color fill="paper"></Color>

<Color stroke="default"></Color>
<Color stroke="paper"></Color>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-background"></div>
<div class="fill-paper"></div>

<div class="stroke-background"></div>
<div class="stroke-paper"></div>
```
  </TabItem>
</Tabs>

#### Brand

<div class="docs_block">
  <div class="docs_row">
    <Color fill="primary" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">primary</Text></Color>
    <Color fill="secondary" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">secondary</Text></Color>
  </div>
  <div class="docs_row">
    <Color stroke="primary" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">primary</Text></Color>
    <Color stroke="secondary" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">secondary</Text></Color>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Color fill="primary"></Color>
<Color fill="secondary"></Color>

<Color stroke="primary"></Color>
<Color stroke="secondary"></Color>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-primary"></div>
<div class="fill-secondary"></div>

<div class="stroke-primary"></div>
<div class="stroke-secondary"></div>
```
  </TabItem>
</Tabs>

#### Status

<div class="docs_block">
  <div class="docs_row">
    <Color fill="success" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">success</Text></Color>
    <Color fill="info" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">info</Text></Color>
    <Color fill="warning" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">warning</Text></Color>
    <Color fill="error" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">error</Text></Color>
  </div>
  <div class="docs_row">
    <Color stroke="success" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">success</Text></Color>
    <Color stroke="info" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">info</Text></Color>
    <Color stroke="warning" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">warning</Text></Color>
    <Color stroke="error" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">error</Text></Color>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Color fill="success"></Color>
<Color fill="info"></Color>
<Color fill="warning"></Color>
<Color fill="error"></Color>

<Color stroke="success"></Color>
<Color stroke="info"></Color>
<Color stroke="warning"></Color>
<Color stroke="error"></Color>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-success"></div>
<div class="fill-info"></div>
<div class="fill-warning"></div>
<div class="fill-error"></div>

<div class="stroke-success"></div>
<div class="stroke-info"></div>
<div class="stroke-warning"></div>
<div class="stroke-error"></div>
```
  </TabItem>
</Tabs>

#### Misc

<div class="docs_block">
  <div class="docs_row">
    <Color fill="border" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">success</Text></Color>
  </div>
  <div class="docs_row">
    <Color stroke="border" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">success</Text></Color>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Color fill="border"></Color>

<Color stroke="border"></Color>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="fill-border"></div>

<div class="stroke-border"></div>
```
  </TabItem>
</Tabs>

### CustomFill and customStroke

For the react `Color` component, you can enter an hex value to add a custom fill or stroke color to an element.

<div class="docs_block">
  <div class="docs_row">
    <Color customFill="#C6882C" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">custom fill</Text></Color>
    <Color customStroke="#007BFF" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">custom stroke</Text></Color>
    <Color customFill="#C6882C" customStroke="#007BFF" className={'mt-0 ph-1 pv-½ br-sm w-10'}><Text variant="caption">custom fill & stroke</Text></Color>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Color customFill="#C6882C"></Color>
<Color customStroke="#007BFF"></Color>
<Color customFill="#C6882C" customStroke="#007BFF"></Color>
```
  </TabItem>
</Tabs>

## Props details

| Prop | Values | Default |
| - | - | - |
| fill | `main` `contrast` <br></br> `default` `paper` <br></br> `grey90` `grey80` `grey70` `grey60` `grey50` `grey40` `grey30` `grey20` `grey10` `grey5` <br></br> `primary` `secondary` <br></br> `success` `info` `warning` `error` <br></br> `border` | |
| stroke | `main` `contrast` <br></br> `default` `paper` <br></br> `grey90` `grey80` `grey70` `grey60` `grey50` `grey40` `grey30` `grey20` `grey10` `grey5` <br></br> `primary` `secondary` <br></br> `success` `info` `warning` `error` <br></br> `border` | |
| customFill | `string` | |
| customStroke | `string` | |
