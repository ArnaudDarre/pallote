---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Color, Text, Grid, Snippet } from "pallote-react"

import { GridExample } from "./partials/grid"

# Grid

Container element to arrange items on a page and create a responsive layout.

<div class="docs_block">
  <Grid spacing={2}>
    <Grid item><GridExample fill="grey5" content="1" /></Grid>
    <Grid item><GridExample fill="grey10" content="2" /></Grid>
    <Grid item><GridExample fill="grey20" content="3" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid spacing={2}>
  <Grid item></Grid>
  <Grid item></Grid>
  <Grid item></Grid>
</Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid grid-spacing-2">
  <div class="grid_item"></div>
  <div class="grid_item"></div>
  <div class="grid_item"></div>
</div>
```
  </TabItem>
</Tabs>

## Props

### Wrap

Make all child elements automatically the same width.

<div class="docs_block">
  <Grid spacing={2} wrap className="w-full">
    <Grid item><GridExample fill="grey5" content="1" /></Grid>
    <Grid item><GridExample fill="grey10" content="2" /></Grid>
    <Grid item><GridExample fill="grey20" content="3" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid wrap>{/* insert grid items */}</Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid grid-wrap"><!-- insert grid item --></div>
```
  </TabItem>
</Tabs>

### Direction

<div class="docs_block">
  <Grid spacing={4}>
    <Grid item sm={6} spacing={2} direction="column">
      <Grid item><Snippet content="direction='column'" dense /></Grid>
      <Grid item spacing={2} direction="column">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={6} spacing={2} direction="column">
      <Grid item><Snippet content="direction='columnReverse'" dense /></Grid>
      <Grid item spacing={2} direction="columnReverse">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={6} spacing={2} direction="column">
      <Grid item><Snippet content="direction='row'" dense /></Grid>
      <Grid item spacing={2} direction="row">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={6} spacing={2} direction="column">
      <Grid item><Snippet content="direction='rowReverse'" dense /></Grid>
      <Grid item spacing={2} direction="rowReverse">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid spacing={2} direction="column">{/* insert grid items */}</Grid>
<Grid spacing={2} direction="columnReverse">{/* insert grid items */}</Grid>
<Grid spacing={2} direction="row">{/* insert grid items */}</Grid>
<Grid spacing={2} direction="rowReverse">{/* insert grid items */}</Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid grid-spacing-2 grid-column"><!-- insert grid item --></div>
<div class="grid grid-spacing-2 grid-columnReverse"><!-- insert grid item --></div>
<div class="grid grid-spacing-2 grid-row"><!-- insert grid item --></div>
<div class="grid grid-spacing-2 grid-rowReverse"><!-- insert grid item --></div>
```
  </TabItem>
</Tabs>

### JustifyContent

<div class="docs_block">
  <Grid spacing={4}>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='center'" dense /></Grid>
      <Grid item spacing={2} justifyContent="center">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='end'" dense /></Grid>
      <Grid item spacing={2} justifyContent="end">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='start'" dense /></Grid>
      <Grid item spacing={2} justifyContent="start">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='spaceAround'" dense /></Grid>
      <Grid item spacing={2} justifyContent="spaceAround">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='spaceBetween'" dense /></Grid>
      <Grid item spacing={2} justifyContent="spaceBetween">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='spaceEvenly'" dense /></Grid>
      <Grid item spacing={2} justifyContent="spaceEvenly">
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid spacing={2}>
  <Grid item></Grid>
  <Grid item></Grid>
  <Grid item></Grid>
</Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid grid-spacing-2">
  <div class="grid_item"></div>
  <div class="grid_item"></div>
  <div class="grid_item"></div>
</div>
```
  </TabItem>
</Tabs>

### AlignItems

<div class="docs_block">
  <Grid spacing={4}>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='stretch'" dense /></Grid>
      <Grid item spacing={2} alignItems="stretch">
        <Grid item><Text variant="h6" code>1</Text></Grid>
        <Grid item><Text variant="h2" code>2</Text></Grid>
        <Grid item><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='center'" dense /></Grid>
      <Grid item spacing={2} alignItems="center">
        <Grid item><Text variant="h6" code>1</Text></Grid>
        <Grid item><Text variant="h2" code>2</Text></Grid>
        <Grid item><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='end'" dense /></Grid>
      <Grid item spacing={2} alignItems="end">
        <Grid item><Text variant="h6" code>1</Text></Grid>
        <Grid item><Text variant="h2" code>2</Text></Grid>
        <Grid item><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='start'" dense /></Grid>
      <Grid item spacing={2} alignItems="start">
        <Grid item><Text variant="h6" code>1</Text></Grid>
        <Grid item><Text variant="h2" code>2</Text></Grid>
        <Grid item><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='baseline'" dense /></Grid>
      <Grid item spacing={2} alignItems="baseline">
        <Grid item><Text variant="h6" code>1</Text></Grid>
        <Grid item><Text variant="h2" code>2</Text></Grid>
        <Grid item><Text variant="overline" code>3</Text></Grid>
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid spacing={2}>
  <Grid item></Grid>
  <Grid item></Grid>
  <Grid item></Grid>
</Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid grid-spacing-2">
  <div class="grid_item"></div>
  <div class="grid_item"></div>
  <div class="grid_item"></div>
</div>
```
  </TabItem>
</Tabs>

### AlignSelf

<div class="docs_block">
  <Grid spacing={4}>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='stretch'" dense /></Grid>
      <Grid item alignSelf="stretch">
        <GridExample content="Stretch" />
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='center'" dense /></Grid>
      <Grid item alignSelf="center">
        <GridExample content="Center" />
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='end'" dense /></Grid>
      <Grid item alignSelf="end">
        <GridExample content="End" />
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='start'" dense /></Grid>
      <Grid item alignSelf="start">
        <GridExample content="Start" />
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='baseline'" dense /></Grid>
      <Grid item alignSelf="baseline">
        <GridExample content="Baseline" />
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid spacing={2}>
  <Grid item></Grid>
  <Grid item></Grid>
  <Grid item></Grid>
</Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid grid-spacing-2">
  <div class="grid_item"></div>
  <div class="grid_item"></div>
  <div class="grid_item"></div>
</div>
```
  </TabItem>
</Tabs>

### Spacing

<div class="docs_block">
  <Grid spacing={4}>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={1}" dense /></Grid>
      <Grid item spacing={1}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={2}" dense /></Grid>
      <Grid item spacing={2}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={3}" dense /></Grid>
      <Grid item spacing={3}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={4}" dense /></Grid>
      <Grid item spacing={4}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={5}" dense /></Grid>
      <Grid item spacing={5}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={6}" dense /></Grid>
      <Grid item spacing={6}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={7}" dense /></Grid>
      <Grid item spacing={7}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={8}" dense /></Grid>
      <Grid item spacing={8}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={9}" dense /></Grid>
      <Grid item spacing={9}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={10}" dense /></Grid>
      <Grid item spacing={10}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={11}" dense /></Grid>
      <Grid item spacing={11}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={12}" dense /></Grid>
      <Grid item spacing={12}>
        <Grid item><GridExample fill="grey5" content="1" /></Grid>
        <Grid item><GridExample fill="grey10" content="2" /></Grid>
        <Grid item><GridExample fill="grey20" content="3" /></Grid>
      </Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid spacing={2}>
  <Grid item></Grid>
  <Grid item></Grid>
  <Grid item></Grid>
</Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid grid-spacing-2">
  <div class="grid_item"></div>
  <div class="grid_item"></div>
  <div class="grid_item"></div>
</div>
```
  </TabItem>
</Tabs>

### Col

Define the default width, based on a 12 column grid.

<div class="docs_block">
  <Grid spacing={2}>
    <Grid item col={1}><GridExample content="1" /></Grid>
    <Grid item col={2}><GridExample content="2" /></Grid>
    <Grid item col={3}><GridExample content="3" /></Grid>
    <Grid item col={4}><GridExample content="4" /></Grid>
    <Grid item col={5}><GridExample content="5" /></Grid>
    <Grid item col={6}><GridExample content="6" /></Grid>
    <Grid item col={7}><GridExample content="7" /></Grid>
    <Grid item col={8}><GridExample content="8" /></Grid>
    <Grid item col={9}><GridExample content="9" /></Grid>
    <Grid item col={10}><GridExample content="10" /></Grid>
    <Grid item col={11}><GridExample content="11" /></Grid>
    <Grid item col={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid item col={1}></Grid>
<Grid item col={2}></Grid>
<Grid item col={3}></Grid>
<Grid item col={4}></Grid>
<Grid item col={5}></Grid>
<Grid item col={6}></Grid>
<Grid item col={7}></Grid>
<Grid item col={8}></Grid>
<Grid item col={9}></Grid>
<Grid item col={10}></Grid>
<Grid item col={11}></Grid>
<Grid item col={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid_item grid_item-1"></div>
<div class="grid_item grid_item-2"></div>
<div class="grid_item grid_item-3"></div>
<div class="grid_item grid_item-4"></div>
<div class="grid_item grid_item-5"></div>
<div class="grid_item grid_item-6"></div>
<div class="grid_item grid_item-7"></div>
<div class="grid_item grid_item-8"></div>
<div class="grid_item grid_item-9"></div>
<div class="grid_item grid_item-10"></div>
<div class="grid_item grid_item-11"></div>
<div class="grid_item grid_item-12"></div>
```
  </TabItem>
</Tabs>

### XS

<div class="docs_block">
  <Grid spacing={2}>
    <Grid item xs={1}><GridExample content="1" /></Grid>
    <Grid item xs={2}><GridExample content="2" /></Grid>
    <Grid item xs={3}><GridExample content="3" /></Grid>
    <Grid item xs={4}><GridExample content="4" /></Grid>
    <Grid item xs={5}><GridExample content="5" /></Grid>
    <Grid item xs={6}><GridExample content="6" /></Grid>
    <Grid item xs={7}><GridExample content="7" /></Grid>
    <Grid item xs={8}><GridExample content="8" /></Grid>
    <Grid item xs={9}><GridExample content="9" /></Grid>
    <Grid item xs={10}><GridExample content="10" /></Grid>
    <Grid item xs={11}><GridExample content="11" /></Grid>
    <Grid item xs={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid item xs={1}></Grid>
<Grid item xs={2}></Grid>
<Grid item xs={3}></Grid>
<Grid item xs={4}></Grid>
<Grid item xs={5}></Grid>
<Grid item xs={6}></Grid>
<Grid item xs={7}></Grid>
<Grid item xs={8}></Grid>
<Grid item xs={9}></Grid>
<Grid item xs={10}></Grid>
<Grid item xs={11}></Grid>
<Grid item xs={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid_item grid_item-xs-1"></div>
<div class="grid_item grid_item-xs-2"></div>
<div class="grid_item grid_item-xs-3"></div>
<div class="grid_item grid_item-xs-4"></div>
<div class="grid_item grid_item-xs-5"></div>
<div class="grid_item grid_item-xs-6"></div>
<div class="grid_item grid_item-xs-7"></div>
<div class="grid_item grid_item-xs-8"></div>
<div class="grid_item grid_item-xs-9"></div>
<div class="grid_item grid_item-xs-10"></div>
<div class="grid_item grid_item-xs-11"></div>
<div class="grid_item grid_item-xs-12"></div>
```
  </TabItem>
</Tabs>

### SM

<div class="docs_block">
  <Grid spacing={2}>
    <Grid item sm={1}><GridExample content="1" /></Grid>
    <Grid item sm={2}><GridExample content="2" /></Grid>
    <Grid item sm={3}><GridExample content="3" /></Grid>
    <Grid item sm={4}><GridExample content="4" /></Grid>
    <Grid item sm={5}><GridExample content="5" /></Grid>
    <Grid item sm={6}><GridExample content="6" /></Grid>
    <Grid item sm={7}><GridExample content="7" /></Grid>
    <Grid item sm={8}><GridExample content="8" /></Grid>
    <Grid item sm={9}><GridExample content="9" /></Grid>
    <Grid item sm={10}><GridExample content="10" /></Grid>
    <Grid item sm={11}><GridExample content="11" /></Grid>
    <Grid item sm={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid item sm={1}></Grid>
<Grid item sm={2}></Grid>
<Grid item sm={3}></Grid>
<Grid item sm={4}></Grid>
<Grid item sm={5}></Grid>
<Grid item sm={6}></Grid>
<Grid item sm={7}></Grid>
<Grid item sm={8}></Grid>
<Grid item sm={9}></Grid>
<Grid item sm={10}></Grid>
<Grid item sm={11}></Grid>
<Grid item sm={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid_item grid_item-sm-1"></div>
<div class="grid_item grid_item-sm-2"></div>
<div class="grid_item grid_item-sm-3"></div>
<div class="grid_item grid_item-sm-4"></div>
<div class="grid_item grid_item-sm-5"></div>
<div class="grid_item grid_item-sm-6"></div>
<div class="grid_item grid_item-sm-7"></div>
<div class="grid_item grid_item-sm-8"></div>
<div class="grid_item grid_item-sm-9"></div>
<div class="grid_item grid_item-sm-10"></div>
<div class="grid_item grid_item-sm-11"></div>
<div class="grid_item grid_item-sm-12"></div>
```
  </TabItem>
</Tabs>

### MD

<div class="docs_block">
  <Grid spacing={2}>
    <Grid item md={1}><GridExample content="1" /></Grid>
    <Grid item md={2}><GridExample content="2" /></Grid>
    <Grid item md={3}><GridExample content="3" /></Grid>
    <Grid item md={4}><GridExample content="4" /></Grid>
    <Grid item md={5}><GridExample content="5" /></Grid>
    <Grid item md={6}><GridExample content="6" /></Grid>
    <Grid item md={7}><GridExample content="7" /></Grid>
    <Grid item md={8}><GridExample content="8" /></Grid>
    <Grid item md={9}><GridExample content="9" /></Grid>
    <Grid item md={10}><GridExample content="10" /></Grid>
    <Grid item md={11}><GridExample content="11" /></Grid>
    <Grid item md={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid item md={1}></Grid>
<Grid item md={2}></Grid>
<Grid item md={3}></Grid>
<Grid item md={4}></Grid>
<Grid item md={5}></Grid>
<Grid item md={6}></Grid>
<Grid item md={7}></Grid>
<Grid item md={8}></Grid>
<Grid item md={9}></Grid>
<Grid item md={10}></Grid>
<Grid item md={11}></Grid>
<Grid item md={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<<div class="grid_item grid_item-md-1"></div>
<<div class="grid_item grid_item-md-2"></div>
<<div class="grid_item grid_item-md-3"></div>
<<div class="grid_item grid_item-md-4"></div>
<<div class="grid_item grid_item-md-5"></div>
<<div class="grid_item grid_item-md-6"></div>
<<div class="grid_item grid_item-md-7"></div>
<<div class="grid_item grid_item-md-8"></div>
<<div class="grid_item grid_item-md-9"></div>
<<div class="grid_item grid_item-md-10"></div>
<<div class="grid_item grid_item-md-11"></div>
<<div class="grid_item grid_item-md-12"></div>
```
  </TabItem>
</Tabs>

### LG

<div class="docs_block">
  <Grid spacing={2}>
    <Grid item lg={1}><GridExample content="1" /></Grid>
    <Grid item lg={2}><GridExample content="2" /></Grid>
    <Grid item lg={3}><GridExample content="3" /></Grid>
    <Grid item lg={4}><GridExample content="4" /></Grid>
    <Grid item lg={5}><GridExample content="5" /></Grid>
    <Grid item lg={6}><GridExample content="6" /></Grid>
    <Grid item lg={7}><GridExample content="7" /></Grid>
    <Grid item lg={8}><GridExample content="8" /></Grid>
    <Grid item lg={9}><GridExample content="9" /></Grid>
    <Grid item lg={10}><GridExample content="10" /></Grid>
    <Grid item lg={11}><GridExample content="11" /></Grid>
    <Grid item lg={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid item lg={1}></Grid>
<Grid item lg={2}></Grid>
<Grid item lg={3}></Grid>
<Grid item lg={4}></Grid>
<Grid item lg={5}></Grid>
<Grid item lg={6}></Grid>
<Grid item lg={7}></Grid>
<Grid item lg={8}></Grid>
<Grid item lg={9}></Grid>
<Grid item lg={10}></Grid>
<Grid item lg={11}></Grid>
<Grid item lg={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid_item grid_item-lg-1"></div>
<div class="grid_item grid_item-lg-2"></div>
<div class="grid_item grid_item-lg-3"></div>
<div class="grid_item grid_item-lg-4"></div>
<div class="grid_item grid_item-lg-5"></div>
<div class="grid_item grid_item-lg-6"></div>
<div class="grid_item grid_item-lg-7"></div>
<div class="grid_item grid_item-lg-8"></div>
<div class="grid_item grid_item-lg-9"></div>
<div class="grid_item grid_item-lg-10"></div>
<div class="grid_item grid_item-lg-11"></div>
<div class="grid_item grid_item-lg-12"></div>
```
  </TabItem>
</Tabs>

### XL

<div class="docs_block">
  <Grid spacing={2}>
    <Grid item xl={1}><GridExample content="1" /></Grid>
    <Grid item xl={2}><GridExample content="2" /></Grid>
    <Grid item xl={3}><GridExample content="3" /></Grid>
    <Grid item xl={4}><GridExample content="4" /></Grid>
    <Grid item xl={5}><GridExample content="5" /></Grid>
    <Grid item xl={6}><GridExample content="6" /></Grid>
    <Grid item xl={7}><GridExample content="7" /></Grid>
    <Grid item xl={8}><GridExample content="8" /></Grid>
    <Grid item xl={9}><GridExample content="9" /></Grid>
    <Grid item xl={10}><GridExample content="10" /></Grid>
    <Grid item xl={11}><GridExample content="11" /></Grid>
    <Grid item xl={12}><GridExample content="12" /></Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Grid item xl={1}></Grid>
<Grid item xl={2}></Grid>
<Grid item xl={3}></Grid>
<Grid item xl={4}></Grid>
<Grid item xl={5}></Grid>
<Grid item xl={6}></Grid>
<Grid item xl={7}></Grid>
<Grid item xl={8}></Grid>
<Grid item xl={9}></Grid>
<Grid item xl={10}></Grid>
<Grid item xl={11}></Grid>
<Grid item xl={12}></Grid>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="grid_item grid_item-xl-1"></div>
<div class="grid_item grid_item-xl-2"></div>
<div class="grid_item grid_item-xl-3"></div>
<div class="grid_item grid_item-xl-4"></div>
<div class="grid_item grid_item-xl-5"></div>
<div class="grid_item grid_item-xl-6"></div>
<div class="grid_item grid_item-xl-7"></div>
<div class="grid_item grid_item-xl-8"></div>
<div class="grid_item grid_item-xl-9"></div>
<div class="grid_item grid_item-xl-10"></div>
<div class="grid_item grid_item-xl-11"></div>
<div class="grid_item grid_item-xl-12"></div>
```
  </TabItem>
</Tabs>




By default the chil elements takes up 100% of the height. If you want children to fit their content, add the `alignItems="start` property to the parent `<Grid />` element.

