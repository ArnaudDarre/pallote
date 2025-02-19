---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

Pallote is a design system that has two library:

- **Pallote CSS**, a CSS library
- **Pallote React**, a React component library, which uses Pallote CSS to style React UI components.

This documentation presents both packages, and each component has code examples both, depending on the technology you use. If you project is built with React, use Pallote React, and if you use pure HTML, use the code examples and CSS classes of Pallote CSS.

## Getting Started

### Install as an NPM package

Get started by installing the package in your project.

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```shell
npm install pallote-react
```
  </TabItem>
  <TabItem value="css" label="CSS">

```shell
npm install pallote-css
```
  </TabItem>
</Tabs>

:::info Package dependency
`pallote-css` is automatically added as a dependency when you install `pallote-react`.
:::

### Use a CDN (for Pallote CSS)

Alternatively, you can install Pallote CSS via a CDN. Simply copy and paste this code in between the head tag of your website. This is the latest version of Pallote CSS.

```html
<link rel="stylesheet" href="https://cdn.jsdeliver.net/npm/pallote-css@1.0.0/dist/pallote.min.css">
```

You also need to import the javascript for some components to work.

```html
<script src="https://cdn.jsdeliver.net/npm/pallote-css@1.0.0/dist/pallote.min.js"></script>
```

:::warning Custom variables with CDN
Please note that for now, it is not possible to customise the library when using the CDN.
:::
