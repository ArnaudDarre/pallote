---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Button, Buttons, Card, CardActions, CardContent, CardHeader, CardMedia } from "pallote-react"

import { DocLinks } from './partials/DocLinks'

# Card

Wrapper for all card elements, one of the most common component in a UI.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2813-6710&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-card--docs"
/>

<div class="docs_block">
  <Card>
    <CardMedia image='https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg' />
    <CardHeader
      title="Mushrooms"
      subtitle="Edible mushrooms"
    />
    <CardContent>Edible mushrooms include many fungal species that are either harvested wild or cultivated.</CardContent>
    <CardActions>
      <Button color="grey">Back</Button>
      <Buttons>
        <Button color="error">Cancel</Button>
        <Button color="primary">Save</Button>
      </Buttons>
    </CardActions>
  </Card>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Card>
  <CardMedia image='https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg' />
  <CardHeader
    title="Mushrooms"
    subtitle="Edible mushrooms"
  />
  <CardContent>
    {/* insert content */}
  </CardContent>
  <CardActions>
    <Button color="grey">Back</Button>
    <Buttons>
      <Button color="error">Cancel</Button>
      <Button color="primary">Save</Button>
    </Buttons>
  </CardActions>
</Card>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card">
  <div class="card_media">
    <div class="card_mediaInner" style="background-image: url("");"></div>
  </div>  
  <div class="card_header">
    <h1 class="card_title">Card title</h1>
    <p class="card_subtitle">Card subtitle</p>
  </div>
  <div class="card_content">
    <!-- insert content -->
  </div>
  <div class="card_actions">
    <div class="buttons">
      <button type="button" class="button button-grey">Back</button>
      <button type="button" class="button button-error">Cancel</button>
    </div>
    <button type="button" class="button">Save</button>
  </div>
</div>
```
  </TabItem>
</Tabs>

## Props

### Size

<div class="docs_block">
  <Card size="xs"><CardHeader title="XSmall" /></Card>
  <Card size="sm"><CardHeader title="Small" /></Card>
  <Card><CardHeader title="Medium" /></Card>
  <Card size="lg"><CardHeader title="Large" /></Card>
  <Card size="xl"><CardHeader title="XLarge" /></Card>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Card size="xs">{/* insert content */}</Card>
<Card size="sm">{/* insert content */}</Card>
<Card>{/* insert content */}</Card>
<Card size="lg">{/* insert content */}</Card>
<Card size="xl">{/* insert content */}</Card>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card card-xs"><!-- insert content --></div>
<div class="card card-sm"><!-- insert content --></div>
<div class="card"><!-- insert content --></div>
<div class="card card-lg"><!-- insert content --></div>
<div class="card card-xl"><!-- insert content --></div>
```
  </TabItem>
</Tabs>

### Fill

Change the baackground and text color of the card.

:::info Classes for pallote-css
If you are using pallote-css, use the `fill` modifier.
:::

<div class="docs_block">
  <Card fill="default"><CardHeader title="Default" /></Card>
  <Card><CardHeader title="Paper" /></Card>
  <Card fill="primary"><CardHeader title="Primary" /></Card>
  <Card fill="secondary"><CardHeader title="Secondary" /></Card>
  <Card fill="success"><CardHeader title="Success" /></Card>
  <Card fill="info"><CardHeader title="Info" /></Card>
  <Card fill="warning"><CardHeader title="Warning" /></Card>
  <Card fill="error"><CardHeader title="Error" /></Card>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Card fill="default">{/* insert content */}</Card>
<Card>{/* insert content */}</Card>
<Card fill="primary">{/* insert content */}</Card>
<Card fill="secondary">{/* insert content */}</Card>
<Card fill="success">{/* insert content */}</Card>
<Card fill="info">{/* insert content */}</Card>
<Card fill="warning">{/* insert content */}</Card>
<Card fill="error">{/* insert content */}</Card>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card fill-default"><!-- insert content --></div>
<div class="card"><!-- insert content --></div>
<div class="card fill-primary"><!-- insert content --></div>
<div class="card fill-secondary"><!-- insert content --></div>
<div class="card fill-success"><!-- insert content --></div>
<div class="card fill-info"><!-- insert content --></div>
<div class="card fill-warning"><!-- insert content --></div>
<div class="card fill-error"><!-- insert content --></div>
```
  </TabItem>
</Tabs>

### Direction

<div class="docs_block">
  <Card>
    <CardMedia image='https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg' />
    <CardHeader title="Portrait" />
  </Card>
  <Card direction="landscape">
    <CardMedia width={100} height={100} image='https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg' />
    <CardHeader title="Landscape" />
  </Card>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Card>{/* insert content */}</Card>
<Card direction="landscape">{/* insert content */}</Card>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card"><!-- insert content --></div>
<div class="card card-landscape"><!-- insert content --></div>
```
  </TabItem>
</Tabs>

### Align

<div class="docs_block">
  <Card><CardHeader title="Left" /></Card>
  <Card align="center"><CardHeader title="Center" /></Card>
  <Card align="right"><CardHeader title="Right" /></Card>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Card>{/* insert content */}</Card>
<Card align="center">{/* insert content */}</Card>
<Card align="right">{/* insert content */}</Card>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card"><!-- insert content --></div>
<div class="card card-center"><!-- insert content --></div>
<div class="card card-right"><!-- insert content --></div>
```
  </TabItem>
</Tabs>

### HasShadow

<div class="docs_block">
  <Card hasShadow><CardHeader title="HasShadow" /></Card>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Card hasShadow>{/* insert content */}</Card>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card card-hasShadow"><!-- insert content --></div>
```
  </TabItem>
</Tabs>

### Transparent

Remove background color and padding around the edges.

<div class="docs_block">
  <Card transparent><CardHeader title="Transparent" /></Card>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Card transparent>{/* insert content */}</Card>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card card-transparent"><!-- insert content --></div>
```
  </TabItem>
</Tabs>
