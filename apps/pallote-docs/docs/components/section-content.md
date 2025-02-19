---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { SectionContent, Text } from "pallote-react"

# SectionContent

Child of the [Section](/docs/components/section.md) component to display content. You can have multiple SectionContent per Section.

<div class="docs_block">
  <SectionContent>
    <Text>Here you can add whatever you want, and add as many section content has you want.</Text>
  </SectionContent>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<SectionContent>
  {/* insert content */}
</SectionContent>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="section_content">
  <!-- insert content -->
</div>
```
  </TabItem>
</Tabs>

## Props

### Align

Override, if necessary, the align prop of the parent Section component.

<div class="docs_block">
  <SectionContent>
    <Text>Align all content and text to the left.</Text>
  </SectionContent>
  <SectionContent align="center">
    <Text>Align all content and text to the center.</Text>
  </SectionContent>
  <SectionContent align="right">
    <Text>Align all content and text to the right.</Text>
  </SectionContent>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<SectionContent>
  Align all content and text to the left
</SectionContent>
<SectionContent align="center">
  Align all content and text to the center
</SectionContent>
<SectionContent align="right">
  Align all content and text to the right
</SectionContent>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="section_content">
  <p>Align all content and text to the left</p>
</div>
<div class="section_content section_content-center">
  <p>Align all content and text to the center</p>
</div>
<div class="section_content section_content-right">
  <p>Align all content and text to the right</p>
</div>
```
  </TabItem>
</Tabs>
