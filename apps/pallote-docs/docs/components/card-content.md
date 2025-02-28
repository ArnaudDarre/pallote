---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Card, CardHeader, CardContent, Text } from "pallote-react"

# CardContent

<div class="docs_block">
  <CardContent>
    <Text>Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi (fungi which bear fruiting structures that are large enough to be seen with the naked eye).</Text>
    <Text>They can appear either below ground (hypogeous) or above ground (epigeous) where they may be picked by hand. Edibility may be defined by criteria that include absence of poisonous effects on humans and desirable taste and aroma. Edible mushrooms are consumed for their nutritional and culinary value. Mushrooms, especially dried shiitake, are sources of umami flavor.</Text>
  </CardContent>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<CardContent>{/* insert content */}</CardContent>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card_content"><!-- insert content --></div>  
```
  </TabItem>
</Tabs>

## Props

### FullWidth

Remove left and right padding.

<div class="docs_block" style={{gap: '2rem'}}>

  <Card>
    <CardHeader
      title="Full width content (remove left and right padding)"
    />
    <CardContent fullWidth>
      Edible mushrooms are the fleshy and edible fruit bodies of several species of macrofungi (fungi which bear fruiting structures that are large enough to be seen with the naked eye).
    </CardContent>
  </Card>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<CardContent fullWidth>{/* insert content */}</CardContent>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card_content card_content-fullWidth"><!-- insert content --></div>  
```
  </TabItem>
</Tabs>
