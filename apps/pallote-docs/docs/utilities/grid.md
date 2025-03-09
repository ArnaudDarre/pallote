---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Color, Grid, Text, Snippet } from "pallote-react"

import { GridExample } from "./partials/grid"

# Grid

Container element to arrange items on a page and create a responsive layout.

<!-- By default the chil elements takes up 100% of the height. If you want children to fit their content, add the `items="start` property to the parent `<Grid />` element. -->

<div class="docs_block">
  <Grid gap={2}>
    <Grid><GridExample fill="grey5" content="1" /></Grid>
    <Grid><GridExample fill="grey10" content="2" /></Grid>
    <Grid><GridExample fill="grey20" content="3" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid gap={2}>
  <Grid></Grid>
  <Grid></Grid>
  <Grid></Grid>
</Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex gap-2">
  <div class="flex"></div>
  <div class="flex"></div>
  <div class="flex"></div>
</div>
```
  </TabItem>
</Tabs>

## Props

### Wrap

Make all child elements automatically the same width.

<div class="docs_block">
  <Grid gap={2} wrap className="w-full">
    <Grid><GridExample fill="grey5" content="1" /></Grid>
    <Grid><GridExample fill="grey10" content="2" /></Grid>
    <Grid><GridExample fill="grey20" content="3" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid wrap></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex flex-wrap"></div>
```
  </TabItem>
</Tabs>

### Direction

This prop overrides the `flex-direction` value of the component.

<div class="docs_block">
  <Grid gap={4}>
    <Grid colsm={6} gap={2} direction="column">
      <Grid><Snippet content="direction='column'" dense /></Grid>
      <Grid gap={2} direction="column">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={6} gap={2} direction="column">
      <Grid><Snippet content="direction='columnReverse'" dense /></Grid>
      <Grid gap={2} direction="columnReverse">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={6} gap={2} direction="column">
      <Grid><Snippet content="direction='row'" dense /></Grid>
      <Grid gap={2} direction="row">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={6} gap={2} direction="column">
      <Grid><Snippet content="direction='rowReverse'" dense /></Grid>
      <Grid gap={2} direction="rowReverse">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid direction="column"></Grid>
<Grid direction="columnReverse"></Grid>
<Grid direction="row"></Grid>
<Grid direction="rowReverse"></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex direction-column"></div>
<div class="flex direction-columnReverse"></div>
<div class="flex direction-row"></div>
<div class="flex direction-rowReverse"></div>
```
  </TabItem>
</Tabs>

### Justify

This prop overrides the `justify-content` value of the component.

<div class="docs_block">
  <Grid gap={4}>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="justify='center'" dense /></Grid>
      <Grid gap={2} justify="center">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="justify='end'" dense /></Grid>
      <Grid gap={2} justify="end">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="justify='start'" dense /></Grid>
      <Grid gap={2} justify="start">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="justify='spaceAround'" dense /></Grid>
      <Grid gap={2} justify="spaceAround">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="justify='spaceBetween'" dense /></Grid>
      <Grid gap={2} justify="spaceBetween">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="justify='spaceEvenly'" dense /></Grid>
      <Grid gap={2} justify="spaceEvenly">
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid justify="center"></Grid>
<Grid justify="end"></Grid>
<Grid justify="start"></Grid>
<Grid justify="spaceAround"></Grid>
<Grid justify="spaceBetween"></Grid>
<Grid justify="spaceEvenly"></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex justify-center"></div>
<div class="flex justify-end"></div>
<div class="flex justify-start"></div>
<div class="flex justify-spaceAround"></div>
<div class="flex justify-spaceBetween"></div>
<div class="flex justify-spaceEvenly"></div>
```
  </TabItem>
</Tabs>

### AlignItems

This prop overrides the `align-items` value of the component.

<div class="docs_block">
  <Grid gap={4}>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="items='stretch'" dense /></Grid>
      <Grid gap={2} items="stretch">
        <Grid><Text variant="h6" code>1</Text></Grid>
        <Grid><Text variant="h2" code>2</Text></Grid>
        <Grid><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="items='center'" dense /></Grid>
      <Grid gap={2} items="center">
        <Grid><Text variant="h6" code>1</Text></Grid>
        <Grid><Text variant="h2" code>2</Text></Grid>
        <Grid><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="items='end'" dense /></Grid>
      <Grid gap={2} items="end">
        <Grid><Text variant="h6" code>1</Text></Grid>
        <Grid><Text variant="h2" code>2</Text></Grid>
        <Grid><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="items='start'" dense /></Grid>
      <Grid gap={2} items="start">
        <Grid><Text variant="h6" code>1</Text></Grid>
        <Grid><Text variant="h2" code>2</Text></Grid>
        <Grid><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="items='baseline'" dense /></Grid>
      <Grid gap={2} items="baseline">
        <Grid><Text variant="h6" code>1</Text></Grid>
        <Grid><Text variant="h2" code>2</Text></Grid>
        <Grid><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grids="stretch"></Grid>
<Grids="center"></Grid>
<Grids="end"></Grid>
<Grids="start"></Grid>
<Grids="baseline"></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex items-stretch"></div>
<div class="flex items-center"></div>
<div class="flex items-end"></div>
<div class="flex items-start"></div>
<div class="flex items-baseline"></div>
```
  </TabItem>
</Tabs>

### AlignSelf

This prop overrides the `align-self` value of the component.

<div class="docs_block">
  <Grid gap={4}>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="self='stretch'" dense /></Grid>
      <Grid self="stretch">
        <GridExample content="Stretch" />
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="self='center'" dense /></Grid>
      <Grid self="center">
        <GridExample content="Center" />
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="self='end'" dense /></Grid>
      <Grid self="end">
        <GridExample content="End" />
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="self='start'" dense /></Grid>
      <Grid self="start">
        <GridExample content="Start" />
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="self='baseline'" dense /></Grid>
      <Grid self="baseline">
        <GridExample content="Baseline" />
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid self="stretch"></Grid>
<Grid self="center"></Grid>
<Grid self="end"></Grid>
<Grid self="start"></Grid>
<Grid self="baseline"></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex self-stretch"></div>
<div class="flex self-center"></div>
<div class="flex self-end"></div>
<div class="flex self-start"></div>
<div class="flex self-baseline"></div>
```
  </TabItem>
</Tabs>

### Gap

<div class="docs_block">
  <Grid gap={4}>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={1}" dense /></Grid>
      <Grid gap={1}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={2}" dense /></Grid>
      <Grid gap={2}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={3}" dense /></Grid>
      <Grid gap={3}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={4}" dense /></Grid>
      <Grid gap={4}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={5}" dense /></Grid>
      <Grid gap={5}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={6}" dense /></Grid>
      <Grid gap={6}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={7}" dense /></Grid>
      <Grid gap={7}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={8}" dense /></Grid>
      <Grid gap={8}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={9}" dense /></Grid>
      <Grid gap={9}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={10}" dense /></Grid>
      <Grid gap={10}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={11}" dense /></Grid>
      <Grid gap={11}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid colsm={4} gap={2} direction="column">
      <Grid><Snippet content="gap={12}" dense /></Grid>
      <Grid gap={12}>
        <Grid><GridExample fill="grey5" content="1" /></Grid>
        <Grid><GridExample fill="grey10" content="2" /></Grid>
        <Grid><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid gap={1}></Grid>
<Grid gap={2}></Grid>
<Grid gap={3}></Grid>
<Grid gap={4}></Grid>
<Grid gap={5}></Grid>
<Grid gap={6}></Grid>
<Grid gap={7}></Grid>
<Grid gap={8}></Grid>
<Grid gap={9}></Grid>
<Grid gap={10}></Grid>
<Grid gap={11}></Grid>
<Grid gap={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex gap-1"></div>
<div class="flex gap-2"></div>
<div class="flex gap-3"></div>
<div class="flex gap-4"></div>
<div class="flex gap-5"></div>
<div class="flex gap-6"></div>
<div class="flex gap-7"></div>
<div class="flex gap-8"></div>
<div class="flex gap-9"></div>
<div class="flex gap-10"></div>
<div class="flex gap-11"></div>
<div class="flex gap-12"></div>
```
  </TabItem>
</Tabs>

### Col

Define the default width, based on a 12 column grid.

<div class="docs_block">
  <Grid gap={2}>
    <Grid col={1}><GridExample content="1" /></Grid>
    <Grid col={2}><GridExample content="2" /></Grid>
    <Grid col={3}><GridExample content="3" /></Grid>
    <Grid col={4}><GridExample content="4" /></Grid>
    <Grid col={5}><GridExample content="5" /></Grid>
    <Grid col={6}><GridExample content="6" /></Grid>
    <Grid col={7}><GridExample content="7" /></Grid>
    <Grid col={8}><GridExample content="8" /></Grid>
    <Grid col={9}><GridExample content="9" /></Grid>
    <Grid col={10}><GridExample content="10" /></Grid>
    <Grid col={11}><GridExample content="11" /></Grid>
    <Grid col={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid col={1}></Grid>
<Grid col={2}></Grid>
<Grid col={3}></Grid>
<Grid col={4}></Grid>
<Grid col={5}></Grid>
<Grid col={6}></Grid>
<Grid col={7}></Grid>
<Grid col={8}></Grid>
<Grid col={9}></Grid>
<Grid col={10}></Grid>
<Grid col={11}></Grid>
<Grid col={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex col-1"></div>
<div class="flex col-2"></div>
<div class="flex col-3"></div>
<div class="flex col-4"></div>
<div class="flex col-5"></div>
<div class="flex col-6"></div>
<div class="flex col-7"></div>
<div class="flex col-8"></div>
<div class="flex col-9"></div>
<div class="flex col-10"></div>
<div class="flex col-11"></div>
<div class="flex col-12"></div>
```
  </TabItem>
</Tabs>

### Colxs

<div class="docs_block">
  <Grid gap={2}>
    <Grid colxs={1}><GridExample content="1" /></Grid>
    <Grid colxs={2}><GridExample content="2" /></Grid>
    <Grid colxs={3}><GridExample content="3" /></Grid>
    <Grid colxs={4}><GridExample content="4" /></Grid>
    <Grid colxs={5}><GridExample content="5" /></Grid>
    <Grid colxs={6}><GridExample content="6" /></Grid>
    <Grid colxs={7}><GridExample content="7" /></Grid>
    <Grid colxs={8}><GridExample content="8" /></Grid>
    <Grid colxs={9}><GridExample content="9" /></Grid>
    <Grid colxs={10}><GridExample content="10" /></Grid>
    <Grid colxs={11}><GridExample content="11" /></Grid>
    <Grid colxs={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid colxs={1}></Grid>
<Grid colxs={2}></Grid>
<Grid colxs={3}></Grid>
<Grid colxs={4}></Grid>
<Grid colxs={5}></Grid>
<Grid colxs={6}></Grid>
<Grid colxs={7}></Grid>
<Grid colxs={8}></Grid>
<Grid colxs={9}></Grid>
<Grid colxs={10}></Grid>
<Grid colxs={11}></Grid>
<Grid colxs={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex col-xs-1"></div>
<div class="flex col-xs-2"></div>
<div class="flex col-xs-3"></div>
<div class="flex col-xs-4"></div>
<div class="flex col-xs-5"></div>
<div class="flex col-xs-6"></div>
<div class="flex col-xs-7"></div>
<div class="flex col-xs-8"></div>
<div class="flex col-xs-9"></div>
<div class="flex col-xs-10"></div>
<div class="flex col-xs-11"></div>
<div class="flex col-xs-12"></div>
```
  </TabItem>
</Tabs>

### Colsm

<div class="docs_block">
  <Grid gap={2}>
    <Grid colsm={1}><GridExample content="1" /></Grid>
    <Grid colsm={2}><GridExample content="2" /></Grid>
    <Grid colsm={3}><GridExample content="3" /></Grid>
    <Grid colsm={4}><GridExample content="4" /></Grid>
    <Grid colsm={5}><GridExample content="5" /></Grid>
    <Grid colsm={6}><GridExample content="6" /></Grid>
    <Grid colsm={7}><GridExample content="7" /></Grid>
    <Grid colsm={8}><GridExample content="8" /></Grid>
    <Grid colsm={9}><GridExample content="9" /></Grid>
    <Grid colsm={10}><GridExample content="10" /></Grid>
    <Grid colsm={11}><GridExample content="11" /></Grid>
    <Grid colsm={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid colsm={1}></Grid>
<Grid colsm={2}></Grid>
<Grid colsm={3}></Grid>
<Grid colsm={4}></Grid>
<Grid colsm={5}></Grid>
<Grid colsm={6}></Grid>
<Grid colsm={7}></Grid>
<Grid colsm={8}></Grid>
<Grid colsm={9}></Grid>
<Grid colsm={10}></Grid>
<Grid colsm={11}></Grid>
<Grid colsm={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex col-sm-1"></div>
<div class="flex col-sm-2"></div>
<div class="flex col-sm-3"></div>
<div class="flex col-sm-4"></div>
<div class="flex col-sm-5"></div>
<div class="flex col-sm-6"></div>
<div class="flex col-sm-7"></div>
<div class="flex col-sm-8"></div>
<div class="flex col-sm-9"></div>
<div class="flex col-sm-10"></div>
<div class="flex col-sm-11"></div>
<div class="flex col-sm-12"></div>
```
  </TabItem>
</Tabs>

### Colmd

<div class="docs_block">
  <Grid gap={2}>
    <Grid colmd={1}><GridExample content="1" /></Grid>
    <Grid colmd={2}><GridExample content="2" /></Grid>
    <Grid colmd={3}><GridExample content="3" /></Grid>
    <Grid colmd={4}><GridExample content="4" /></Grid>
    <Grid colmd={5}><GridExample content="5" /></Grid>
    <Grid colmd={6}><GridExample content="6" /></Grid>
    <Grid colmd={7}><GridExample content="7" /></Grid>
    <Grid colmd={8}><GridExample content="8" /></Grid>
    <Grid colmd={9}><GridExample content="9" /></Grid>
    <Grid colmd={10}><GridExample content="10" /></Grid>
    <Grid colmd={11}><GridExample content="11" /></Grid>
    <Grid colmd={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid colmd={1}></Grid>
<Grid colmd={2}></Grid>
<Grid colmd={3}></Grid>
<Grid colmd={4}></Grid>
<Grid colmd={5}></Grid>
<Grid colmd={6}></Grid>
<Grid colmd={7}></Grid>
<Grid colmd={8}></Grid>
<Grid colmd={9}></Grid>
<Grid colmd={10}></Grid>
<Grid colmd={11}></Grid>
<Grid colmd={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<<div class="flex col-md-1"></div>
<<div class="flex col-md-2"></div>
<<div class="flex col-md-3"></div>
<<div class="flex col-md-4"></div>
<<div class="flex col-md-5"></div>
<<div class="flex col-md-6"></div>
<<div class="flex col-md-7"></div>
<<div class="flex col-md-8"></div>
<<div class="flex col-md-9"></div>
<<div class="flex col-md-10"></div>
<<div class="flex col-md-11"></div>
<<div class="flex col-md-12"></div>
```
  </TabItem>
</Tabs>

### Collg

<div class="docs_block">
  <Grid gap={2}>
    <Grid collg={1}><GridExample content="1" /></Grid>
    <Grid collg={2}><GridExample content="2" /></Grid>
    <Grid collg={3}><GridExample content="3" /></Grid>
    <Grid collg={4}><GridExample content="4" /></Grid>
    <Grid collg={5}><GridExample content="5" /></Grid>
    <Grid collg={6}><GridExample content="6" /></Grid>
    <Grid collg={7}><GridExample content="7" /></Grid>
    <Grid collg={8}><GridExample content="8" /></Grid>
    <Grid collg={9}><GridExample content="9" /></Grid>
    <Grid collg={10}><GridExample content="10" /></Grid>
    <Grid collg={11}><GridExample content="11" /></Grid>
    <Grid collg={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid collg={1}></Grid>
<Grid collg={2}></Grid>
<Grid collg={3}></Grid>
<Grid collg={4}></Grid>
<Grid collg={5}></Grid>
<Grid collg={6}></Grid>
<Grid collg={7}></Grid>
<Grid collg={8}></Grid>
<Grid collg={9}></Grid>
<Grid collg={10}></Grid>
<Grid collg={11}></Grid>
<Grid collg={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex col-lg-1"></div>
<div class="flex col-lg-2"></div>
<div class="flex col-lg-3"></div>
<div class="flex col-lg-4"></div>
<div class="flex col-lg-5"></div>
<div class="flex col-lg-6"></div>
<div class="flex col-lg-7"></div>
<div class="flex col-lg-8"></div>
<div class="flex col-lg-9"></div>
<div class="flex col-lg-10"></div>
<div class="flex col-lg-11"></div>
<div class="flex col-lg-12"></div>
```
  </TabItem>
</Tabs>

### Colxl

<div class="docs_block">
  <Grid gap={2}>
    <Grid colxl={1}><GridExample content="1" /></Grid>
    <Grid colxl={2}><GridExample content="2" /></Grid>
    <Grid colxl={3}><GridExample content="3" /></Grid>
    <Grid colxl={4}><GridExample content="4" /></Grid>
    <Grid colxl={5}><GridExample content="5" /></Grid>
    <Grid colxl={6}><GridExample content="6" /></Grid>
    <Grid colxl={7}><GridExample content="7" /></Grid>
    <Grid colxl={8}><GridExample content="8" /></Grid>
    <Grid colxl={9}><GridExample content="9" /></Grid>
    <Grid colxl={10}><GridExample content="10" /></Grid>
    <Grid colxl={11}><GridExample content="11" /></Grid>
    <Grid colxl={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid colxl={1}></Grid>
<Grid colxl={2}></Grid>
<Grid colxl={3}></Grid>
<Grid colxl={4}></Grid>
<Grid colxl={5}></Grid>
<Grid colxl={6}></Grid>
<Grid colxl={7}></Grid>
<Grid colxl={8}></Grid>
<Grid colxl={9}></Grid>
<Grid colxl={10}></Grid>
<Grid colxl={11}></Grid>
<Grid colxl={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="flex col-xl-1"></div>
<div class="flex col-xl-2"></div>
<div class="flex col-xl-3"></div>
<div class="flex col-xl-4"></div>
<div class="flex col-xl-5"></div>
<div class="flex col-xl-6"></div>
<div class="flex col-xl-7"></div>
<div class="flex col-xl-8"></div>
<div class="flex col-xl-9"></div>
<div class="flex col-xl-10"></div>
<div class="flex col-xl-11"></div>
<div class="flex col-xl-12"></div>
```
  </TabItem>
</Tabs>
