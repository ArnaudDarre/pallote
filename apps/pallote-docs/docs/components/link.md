---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { ArrowRight } from '@phosphor-icons/react'
import { Grid, Link } from "pallote-react"

import { DocLinks } from './partials/DocLinks'

# Link

Reference to a resource, either external (a link to a different website) or internal (a link to another page or document).

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2789-3311&t=ZYFabUeMuvoaOdby-11"
  storybook="https://react.pallote.com/?path=/docs/components-link--docs"
/>

<div class="docs_block">
  <Link>Link</Link>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Link>Link</Link>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<a class="link">Link</a>
```
  </TabItem>
</Tabs>

## Props

### Component

Use another React component, usually an internal routing Link component such as `Link` from `react-router-dom`.

<div class="docs_block">
  <Link>Anchor</Link>
  <Link component={Link}>React component</Link>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
import { ReactComponent } from 'package'

<Link href="">Anchor</Link>
<Link component={ReactComponent} to="">React component</Link>
```
  </TabItem>
  <TabItem value="css" label="CSS">

This prop does not apply to a pure HTML and CSS component.
  </TabItem>
</Tabs>

### Icon

<div class="docs_block">
  <Link icon={<ArrowRight />}>Link with icon</Link>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Link icon={<ArrowRight />}>Link with icon</Link>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<a class="link">
  Link with icon
  <span class="link_icon">
    <!-- insert icon -->
  </span>
</a>
```
  </TabItem>
</Tabs>

### Color

Overrides the link color. The inherit value means that the link will inherit the parent text colour.

<div class="docs_block">
  <Grid gap={2}>
    <Grid item gap={2}>
      <Grid item><Link color="default">Default</Link></Grid>
      <Grid item><Link color="alt">Alt</Link></Grid>
      <Grid item><Link color="disabled">Disabled</Link></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item className="fill-contrast"><Link color="contrast">Contrast</Link></Grid>
      <Grid item className="fill-contrast"><Link color="contrastAlt">Contrast alt</Link></Grid>
      <Grid item className="fill-contrast"><Link color="contrastDisabled">Contrast disabled</Link></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Link color="primary">Primary</Link></Grid>
      <Grid item><Link color="secondary">Secondary</Link></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Link color="inherit">Inherit</Link></Grid>
    </Grid>
  </Grid>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Link color="default">Default</Link>
<Link color="alt">Alt</Link>
<Link color="disabled">Disabled</Link>

<Link color="contrast">Contrast</Link>
<Link color="contrastAlt">Contrast alt</Link>
<Link color="contrastDisabled">Contrast disabled</Link>

<Link>Primary</Link>
<Link color="secondary">Secondary</Link>

<Link color="inherit">Inherit</Link>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<a class="link text-default">Default</Link>
<a class="link text-alt">Alt</Link>
<a class="link text-disabled">Disabled</Link>

<a class="link text-contrast">Contrast</Link>
<a class="link text-contrastAlt">Contrast alt</Link>
<a class="link text-contrastDisabled">Contrast disabled</Link>

<a class="link">Primary</Link>
<a class="link text-secondary">Secondary</Link>

<a class="link text-inherit">Inherit</Link>
```
  </TabItem>
</Tabs>

### IsExternal

<div class="docs_block">
  <Link isExternal href="https://pallote.com">External link</Link>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Link isExternal href="">External link</Link>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<a href="" target="_blank" rel="noopener noreferrer" class="link">External link</a>
```
  </TabItem>
</Tabs>

