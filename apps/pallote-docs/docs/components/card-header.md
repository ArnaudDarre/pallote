---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Button, Card, CardHeader } from "pallote-react"

import { DocLinks } from './partials/DocLinks'

# CardHeader

Contains the card title. You can add an optional label or subtitle. The font sizes are automatically set by the Card size prop.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2813-7079&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-cardheader--docs"
/>

<div class="docs_block">
  <Card transparent>
    <CardHeader
      label="Card label"
      title="Card title"
      subtitle="This is a card subtitle"
    />
  </Card>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<CardHeader
  label="Card label"
  title="Card title"
  subtitle="This is a card subtitle"
/>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card_header">
  <p class="card_label">Card label</p>
  <p class="card_title">Card title</p>
  <p class="card_subtitle">Card subtitle</p>
</div>
```
  </TabItem>
</Tabs>

## Props

### Actions

<div class="docs_block">
  <Card>
    <CardHeader
      title="Card header with actions"
      actions={
        <>
          <Button color="error">Cancel</Button>
          <Button color="primary">Save</Button>
        </>
      }
    />
  </Card>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<CardHeader
  title="Card title"
  actions={
    <>
      <Button color="error">Cancel</Button>
      <Button color="primary">Save</Button>
    </>
  }
/>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="card_header">
  <p class="card_title">Card header with actions</p>
  <div class="card_headerActions">
    <button class="button button-error">Cancel</button>
    <button class="button button-primary">Save</button>
  </div>
</div>
```
  </TabItem>
</Tabs>
