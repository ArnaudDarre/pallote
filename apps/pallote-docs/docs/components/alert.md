---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Alert } from "pallote-react"

# Alert

List of links to allow users to navigate the page tree.

<div class="docs_block">
  <Alert title="Alert" variant="notice" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Alert title="Alert" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="alert alert-success">
  <p class="alert_title">Alert</p>
</div>
```
  </TabItem>
</Tabs>

## Props

### Color

Convey the severity of the alert.

<div class="docs_block">
  <Alert title="Success" variant="notice" />
  <Alert title="Info" color="info" variant="notice" />
  <Alert title="Warning" color="warning" variant="notice" />
  <Alert title="Error" color="error" variant="notice" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Alert title="Success" />
<Alert title="Info" color="info" />
<Alert title="Warning" color="warning" />
<Alert title="Error" color="error" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="alert alert-success">
  <p class="alert_title">Success</p>
</div>
<div class="alert alert-info">
  <p class="alert_title">Info</p>
</div>
<div class="alert alert-warning">
  <p class="alert_title">Warning</p>
</div>
<div class="alert alert-error">
  <p class="alert_title">Error</p>
</div>
```
  </TabItem>
</Tabs>

<!-- ### Variant

<div class="docs_block">
  <Alert title="Toast" />
  <Alert title="Notice" variant="notice" />
  <Alert title="Bar" variant="bar" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Alert title="Toast" />
<Alert title="Notice" variant="notice" />
<Alert title="Bar" variant="bar" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="alert alert-success alert-toast">
  <p class="alert_title">Toast</p>
</div>
<div class="alert alert-success alert-notice">
  <p class="alert_title">Notice</p>
</div>
<div class="alert alert-success alert-bar">
  <p class="alert_title">Bar</p>
</div>
```
  </TabItem>
</Tabs> -->

### Subtitle

<div class="docs_block">
  <Alert title="Alert with subtitle" subtitle="This is the subtitle" variant="notice" />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Alert title="Alert with subtitle" subtitle="This is the subtitle" />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="alert alert-success">
  <p class="alert_title">Alert with title</p>
  <p class="alert_subtitle">This is the subtitle</p>
</div>
```
  </TabItem>
</Tabs>

### Dense

<div class="docs_block">
  <Alert title="Dense" variant="notice" dense />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Alert title="Dense" dense />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="alert alert-success alert-dense">
  <p class="alert_title">Dense</p>
</div>
```
  </TabItem>
</Tabs>

### NoIcon

<div class="docs_block">
  <Alert title="No icon" variant="notice" noIcon />
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<Alert title="No icon" noIcon />
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div class="alert alert-success alert-noIcon">
  <p class="alert_title">No icon</p>
</div>
```
  </TabItem>
</Tabs>
