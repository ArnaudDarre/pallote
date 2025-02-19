---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Text } from "pallote-react"

# Text

Use these utility props and classes to override the text style of an element.

## Props

### Variant

<div class="docs_block docs_block-portrait">
  <div class="docs_row grid--ai-baseline">
    <Text variant="h1">Heading 1</Text>
    <Text variant="h2">Heading 2</Text>
    <Text variant="h3">Heading 3</Text>
    <Text variant="h4">Heading 4</Text>
    <Text variant="h5">Heading 5</Text>
    <Text variant="h6">Heading 6</Text>
  </div>
  <div class="docs_row grid--ai-baseline">
    <Text variant="subtitle">Subtitle</Text>
    <Text variant="body">Body</Text>
    <Text variant="caption">Caption</Text>
    <Text variant="overline">Overline</Text>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text variant="h1">Heading 1</Text>
<Text variant="h2">Heading 2</Text>
<Text variant="h3">Heading 3</Text>
<Text variant="h4">Heading 4</Text>
<Text variant="h5">Heading 5</Text>
<Text variant="h6">Heading 6</Text>

<Text variant="subtitle">Subtitle</Text>
<Text variant="body">Body</Text>
<Text variant="caption">Caption</Text>
<Text variant="overline">Overline</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<h1 class="h1">Heading 1</h1>
<h2 class="h2">Heading 2</h2>
<h3 class="h3">Heading 3</h3>
<h4 class="h4">Heading 4</h4>
<h5 class="h5">Heading 5</h5>
<h6 class="h6">Heading 6</h6>

<p class="subtitle">Subtitle</p>
<p class="body">Body</p>
<p class="caption">Caption</p>
<p class="overline">Overline</p>
```
  </TabItem>
</Tabs>

:::warning This prop is only related to styling
In order to use the correct semantic component, you need to combine it with the `component` prop (for `pallote-react`) or use the correct HTML tag (for `pallote-css`).
:::

### Component

<div class="docs_block docs_block-portrait">
  <div class="docs_row grid--ai-baseline">
    <Text component="h1" variant="body">h1</Text>
    <Text component="h2" variant="body">h2</Text>
    <Text component="h3" variant="body">h3</Text>
    <Text component="h4" variant="body">h4</Text>
    <Text component="h5" variant="body">h5</Text>
    <Text component="h6" variant="body">h6</Text>
  </div>
  <div class="docs_row grid--ai-baseline">
    <Text component="p">p (default)</Text>
    <Text component="span">span</Text>
    <Text component="label">label</Text>
    <Text component="legend">legend</Text>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text component="h1">h1</Text>
<Text component="h2">h2</Text>
<Text component="h3">h3</Text>
<Text component="h4">h4</Text>
<Text component="h5">h5</Text>
<Text component="h6">h6</Text>

<Text component="p">p (default)</Text>
<Text component="span">span</Text>
<Text component="label">label</Text>
<Text component="legend">legend</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>

<p>Subtitle</p>
<span>Body</span>
<label>Caption</label>
<legend>Overline</legend>
```
  </TabItem>
</Tabs>

### Align

<div class="docs_block docs_block-portrait">
  <Text align="left" className="w-100">Align left and rub whiskers on bare skin act innocent. Catto munch salmono while happily ignoring when being called terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry eat from dog's food.</Text>
  <Text align="center" className="w-100">Align center and stare at ceiling cough hairball on conveniently placed pants and break lamps and curl up into a ball, so get scared by sudden appearance of cucumber hack step on your keyboard while you're gaming and then turn in a circle.</Text>
  <Text align="right" className="w-100">Align right lick master's hand at first then bite because im moody chew the plant scratch my tummy actually i hate you now fight me. Sun bathe steal the warm chair right after you get up.</Text>
  <Text align="justify" className="w-100">Align justify meow in empty rooms mew mew. I love cats i am one wake up scratch humans leg for food then purr then i have a and relax lick master's hand at first then bite because im moody dismember a mouse and then regurgitate parts of it on the family room floor.</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text align="left">Left{/* content */}</Text>
<Text align="center">Center{/* content */}</Text>
<Text align="right">Right{/* content */}</Text>
<Text align="justify">Justify{/* content */}</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-left"><!-- content --></p>
<p class="text-center"><!-- content --></p>
<p class="text-right"><!-- content --></p>
<p class="text-justify"><!-- content --></p>
```
  </TabItem>
</Tabs>

### Weight

<div class="docs_block">
  <Text weight="regular">Regular</Text>
  <Text weight="bold">Bold</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text weight="regular">Regular</Text>
<Text weight="bold">Bold</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-regular">Regular</p>
<p class="text-bold">Bold</p>
```
  </TabItem>
</Tabs>

### Transform

<div class="docs_block">
  <Text transform="none">None</Text>
  <Text transform="capitalize">Capitalize</Text>
  <Text transform="uppercase">Uppercase</Text>
  <Text transform="lowercase">Lowercase</Text>
  <Text transform="initial">Initial</Text>
  <Text transform="inherit">Inherit</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text transform="none">None</Text>
<Text transform="capitalize">Capitalize</Text>
<Text transform="uppercase">Uppercase</Text>
<Text transform="lowercase">Lowercase</Text>
<Text transform="initial">Initial</Text>
<Text transform="inherit">Inherit</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-none">None</p>
<p class="text-capitalize">Capitalize</p>
<p class="text-uppercase">Uppercase</p>
<p class="text-lowercase">Lowercase</p>
<p class="text-initial">Initial</p>
<p class="text-inherit">Inherit</p>
```
  </TabItem>
</Tabs>

### Italic

<div class="docs_block">
  <Text italic>Italic</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text italic>Italic</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-italic">Italic</p>
```
  </TabItem>
</Tabs>

### Underline

<div class="docs_block">
  <Text underline>Underline</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text underline>Underline</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-underline">Underline</p>
```
  </TabItem>
</Tabs>

### StrikeThrough

<div class="docs_block">
  <Text strikeThrough>StrikeThrough</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text strikeThrough>StrikeThrough</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-strikeThrough">StrikeThrough</p>
```
  </TabItem>
</Tabs>

### Code

<div class="docs_block">
  <Text code>Code</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text code>Code</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-code">Code</p>
```
  </TabItem>
</Tabs>

### Color

<div class="docs_block docs_block-portrait">
  <div class="docs_row">
    <Text color="default">Default</Text>
    <Text color="alt">Alt</Text>
    <Text color="disabled">Disabled</Text>
  </div>
  <div class="docs_row">
    <div class="fill-contrast"><Text color="contrast">Contrast</Text></div>
    <div class="fill-contrast"><Text color="contrastAlt">Contrast alt</Text></div>
    <div class="fill-contrast"><Text color="contrastDisabled">Contrast disabled</Text></div>
  </div>
  <div class="docs_row">
    <Text color="primary">Primary</Text>
    <Text color="secondary">Secondary</Text>
  </div>
  <div class="docs_row">
    <Text color="success">Success</Text>
    <Text color="info">Info</Text>
    <Text color="warning">Warning</Text>
    <Text color="error">Error</Text>
  </div>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text color="default">Default</Text>
<Text color="alt">Alt</Text>
<Text color="disabled">Disabled</Text>

<Text color="contrast">Contrast</Text>
<Text color="contrastAlt">Contrast alt</Text>
<Text color="contrastDisabled">Contrast disabled</Text>

<Text color="primary">Primary</Text>
<Text color="secondary">Secondary</Text>

<Text color="success">Success</Text>
<Text color="info">Info</Text>
<Text color="warning">Warning</Text>
<Text color="error">Error</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<p class="text-default">Default</p>
<p class="text-alt">Alt</p>
<p class="text-disabled">Disabled</p>

<p class="text-contrast">Contrast</p>
<p class="text-contrastAlt">Contrast alt</p>
<p class="text-contrastDisabled">Contrast disabled</p>

<p class="text-primary">Primary</p>
<p class="text-secondary">Secondary</p>

<p class="text-success">Success</p>
<p class="text-info">Info</p>
<p class="text-warning">Warning</p>
<p class="text-error">Error</p>
```
  </TabItem>
</Tabs>

## Props details

| Prop | Values | Default |
| - | - | - |
| variant | `h1` `h2` `h3` `h4` `h5` `h6` <br></br> `subtitle` `body` `caption` `overline` | `body` |
| component | `h1` `h2` `h3` `h4` `h5` `h6`<br></br>  `p` `span` `label` `legend` | `p` |
| align | `left` `center` `right` `justify` | `left` |
| weight | `regular` `bold` | `regular` |
| transform | `none` `capitalize` `uppercase` `lowercase` `initial` `inherit` | |
| underline | `bool` | `false` |
| italic | `bool` | `false` |
| code | `bool` | `false` |
| color | `default` `alt` `disabled` <br></br> `contrast` `contrastAlt` `contrastDisabled` <br></br> `primary` `secondary` <br></br> `success` `info` `warning` `error` | `default` |

## Examples

<div class="docs_block docs_block-portrait">
  <Text variant="h4" component="h3" underline>Be mindful of text sizes</Text>
  <Text variant="caption" italic color="success">And colour contrast</Text>
  <Text variant="body" component="span" weight="bold">When writing content</Text>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Text variant="h4" component="h3" underline>Be mindful of text sizes</Text>
<Text variant="caption" italic color="success">And colour contrast</Text>
<Text variant="body" component="span" weight="bold">When writing content</Text>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<h3 class="h4 text-underline">Be mindful of text sizes</h3>
<p class="caption text-italic text-success">And colour contrast</p>
<span class="body text-bold">When writing content</span>
```
  </TabItem>
</Tabs>
