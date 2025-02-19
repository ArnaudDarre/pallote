---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Button, Section, SectionHeader } from "pallote-react"

# SectionHeader

Child of the [Section](/docs/components/section.md) component. Each Section should have one SectionHeader component.

<div class="docs_block">
  <SectionHeader
    label="Section label"
    title="Section title"
    subtitle="Optional section subtitle"
    actions={
      <Button>Action</Button>
    }
  />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<SectionHeader
  label="Section label"
  title="Section title"
  subtitle="Optional section subtitle"
  actions={
    <Button>Action</Button>
  }
/>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="section_header">
  <p class="section_label">Section label</p>
  <h1 class="section_title">Section title</h1>
  <p class="section_subtitle">Optional section subtitle</p>
  <div class="section_actions">
    <button class="button">Action</button>
  </div>
</div>
```
  </TabItem>
</Tabs>

## Props

### TitleComponent

Override the HTML tag of the section title.

<div class="docs_block">
  <SectionHeader
    title="You can use h1 to h6 and p"
    titleComponent="p"
  />
</div>

```jsx
<SectionHeader
  title="You can use h1 to h6 and p"
  titleComponent="p"
/>
```
