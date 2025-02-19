---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Button, Section, SectionContent, SectionHeader, Text } from "pallote-react"

# Section

Defines a section on a page.

A section will always have one [SectionHeader](/docs/components/section-header.md) and at least one [SectionContent](/docs/components/section-content.md) child component.

<div class="docs_block">
  <Section>
    <SectionHeader
      label="Section label"
      title="Section title"
      subtitle="Optional section subtitle"
      actions={
        <Button>Action</Button>
      }
    />
    <SectionContent>
      <Text>Here you can add whatever you want, and add as many section content has you want.</Text>
    </SectionContent>
  </Section>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Section>
  <SectionHeader
    label="Section label"
    title="Section title"
    subtitle="Optional section subtitle"
    actions={
      <Button>Action</Button>
    }
  />
  <SectionContent>
    {/* insert content */}
  </SectionContent>
</Section>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="section">
  <div class="section_container">
    <div class="section_header">
      <p class="section_label">Section label</p>
      <h1 class="section_title">Section title</h1>
      <p class="section_subtitle">Optional section subtitle</p>
      <div class="section_actions">
        <button class="button">Action</button>
      </div>
    </div>
    <div class="section_content">
      <!-- insert content -->
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

## Props

### Align

Change the elements and texts alignement inside the component. You can override that setup for individual [SectionContent](/docs/components/section-content.md) components.

<div class="docs_block">
  <Section>
    <SectionHeader
      title="Left"
      subtitle="Align all content and text to the left"
    />
  </Section>
  <Section align="center">
    <SectionHeader
      title="Center"
      subtitle="Align all content and text to the center"
    />
  </Section>
  <Section align="right">
    <SectionHeader
      title="Right"
      subtitle="Align all content and text to the right"
    />
  </Section>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Section>
  <SectionHeader
    title="Left"
    subtitle="Align all content and text to the left"
  />
</Section>
<Section align="center">
  <SectionHeader
    title="Center"
    subtitle="Align all content and text to the center"
  />
</Section>
<Section align="right">
  <SectionHeader
    title="Right"
    subtitle="Align all content and text to the right"
  />
</Section>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="section">
  <div class="section_container">
    <div class="section_header">
      <p class="section_title">Section left</p>
      <p class="section_subtitle">Align all content and text to the left</p>
    </div>
  </div>
</div>
<div class="section section-center">
  <div class="section_container">
    <div class="section_header">
      <p class="section_title">Section center</p>
      <p class="section_subtitle">Align all content and text to the center</p>
    </div>
  </div>
</div>
<div class="section section-right">
  <div class="section_container">
    <div class="section_header">
      <p class="section_title">Section right</p>
      <p class="section_subtitle">Align all content and text to the right</p>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Color

Change the background and text color.

<div class="docs_block">
  <Section>
    <SectionHeader
      title="Default"
      subtitle="Change the background colour to default"
    />
  </Section>
  <Section color="paper">
    <SectionHeader
      title="Paper"
      subtitle="Change the background colour to paper"
    />
  </Section>
  <Section color="primary">
    <SectionHeader
      title="Primary"
      subtitle="Change the background colour to primary"
    />
  </Section>
  <Section color="primaryLight">
    <SectionHeader
      title="Primary Light"
      subtitle="Change the background colour to primary light"
    />
  </Section>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Section>
  <SectionHeader
    title="Default"
    subtitle="Change the background colour to default"
  />
</Section>
<Section color="paper">
  <SectionHeader
    title="Paper"
    subtitle="Change the background colour to paper"
  />
</Section>
<Section color="primary">
  <SectionHeader
    title="Primary"
    subtitle="Change the background colour to primary"
  />
</Section>
<Section color="primaryLight">
  <SectionHeader
    title="Primary Light"
    subtitle="Change the background colour to primary light"
  />
</Section>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="section section-default">
  <div class="section_container">
    <div class="section_header">
      <p class="section_title">Background default</p>
      <p class="section_subtitle">Change the background colour to default</p>
    </div>
  </div>
</div>
<div class="section section-paper">
  <div class="section_container">
    <div class="section_header">
      <p class="section_title">Background paper</p>
      <p class="section_subtitle">Change the background colour to paper</p>
    </div>
  </div>
</div>
<div class="section section-primary">
  <div class="section_container">
    <div class="section_header">
      <p class="section_title">Background primary</p>
      <p class="section_subtitle">Change the background colour to primary</p>
    </div>
  </div>
</div>
<div class="section section-primaryLight">
  <div class="section_container">
    <div class="section_header">
      <p class="section_title">Background primary-light</p>
      <p class="section_subtitle">Change the background colour to primary light</p>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Landing

Prop to set the component as the landing section on the homepage. This changes the text font sizes and spacing between elements.

<div class="docs_block">
  <Section landing>
    <SectionHeader
      title="Landing"
      subtitle="Prop for the website homepage landing section."
    />
  </Section>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Section landing>
  <SectionHeader
    title="Landing"
    subtitle="Prop for the website homepage landing section."
  />
</Section>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="section section-landing">
  <div class="section_container">
    <div class="section_header">
      <p class="section_title">Landing</p>
      <p class="section_subtitle">Prop for the website homepage landing section.</p>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>

### Header

Prop to set the component as the first section on a page. This changes the text font sizes and spacing between elements.

<div class="docs_block">
  <Section header>
    <SectionHeader
      title="Header"
      subtitle="Prop for the first section of a page."
    />
  </Section>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Section header>
  <SectionHeader
    title="Header"
    subtitle="Prop for the first section of a page."
  />
</Section>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="section section-header">
  <div class="section_container">
    <div class="section_header">
      <p class="section_title">Header</p>
      <p class="section_subtitle">Prop for the first section of a page.</p>
    </div>
  </div>
</div>
```
  </TabItem>
</Tabs>
