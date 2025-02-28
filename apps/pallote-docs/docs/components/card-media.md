---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Card, CardHeader, CardMedia } from "pallote-react"

# CardMedia

Container for an image illustrating the card, for example on a list of blog posts.

<div class="docs_block">
  <CardMedia image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<CardMedia image="{/* insert content */}" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card_media">
  <div class="card_mediaInner" style="background-image: url("");"></div>
</div>  
```
  </TabItem>
</Tabs>

## Props

### Width

Override the default width of the image (when used on a Card with `direction="landscape"` prop).

<div class="docs_block" style={{gap: '2rem'}}>

  <CardMedia width={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" />
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<CardMedia width={200} image="{/* insert content */}" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card_media">
  <div class="card_mediaInner" style="background-image: url(""); width: 200px;"></div>
</div>  
```
  </TabItem>
</Tabs>

### Height

Override the default height of the image.

<div class="docs_block" style={{gap: '2rem'}}>

  <CardMedia height={200} image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" />
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<CardMedia height={200} image="{/* insert content */}" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card_media">
  <div class="card_mediaInner" style="background-image: url(""); height: 200px;"></div>
</div>  
```
  </TabItem>
</Tabs>

### FullWidth

Remove the gutter around the image.

<div class="docs_block" style={{gap: '2rem'}}>

  <Card>
    <CardMedia fullWidth image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg" />
    <CardHeader title="Full width" />
  </Card>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<CardMedia fullWidth image="{/* insert content */}" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card_media card_media-fullWidth">
  <div class="card_mediaInner" style="background-image: url("");"></div>
</div>  
```
  </TabItem>
</Tabs>
