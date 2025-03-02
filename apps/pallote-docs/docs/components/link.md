---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { ArrowRight } from '@phosphor-icons/react'
import { Grid, Link } from "pallote-react"

# Link

Reference to a resource, either external (a link to a different website) or internal (a link to another page or document).

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

Use another React component, usually an internal routing Link component.

<div class="docs_block">
  <Link>Anchor</Link>
  <Link component={Link}>React component</Link>
</div>

<Tabs groupId="package" queryString>
   <TabItem value="react" label="React">
  
```jsx
<Link>Anchor</Link>
<Link component={Link}>React component</Link>
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
