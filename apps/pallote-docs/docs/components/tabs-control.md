---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { Tab, Tabs as PalloteTabs, TabsControl } from 'pallote-react'

import { DocLinks } from './partials/DocLinks'

# TabsControls

Container for the list of tab elements.

<DocLinks
  figma="https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2834-6260&t=VMTut2PgZWCIjJGZ-11"
  storybook="https://react.pallote.com/?path=/docs/components-tabscontrols--docs"
/>

<div class="docs_block">
  <PalloteTabs>
    <TabsControl>
      <Tab label="Tab 1" index={0} />
      <Tab label="Tab 2" index={1} />
      <Tab label="Tab 3" index={2} />
    </TabsControl>
  </PalloteTabs>
</div>

<Tabs groupId="package" queryString>
  <TabItem value="react" label="React">

```jsx
<TabsControl>
  <Tab label="Tab 1" index={0} />
  <Tab label="Tab 2" index={1} />
  <Tab label="Tab 3" index={2} />
</TabsControl>
```
  </TabItem>
  <TabItem value="css" label="CSS">

```html
<div role="tablist" class="tabs_controls">
  <button class="tab" role="tab" aria-selected="true" aria-controls="tabpanel-0" id="tab-0" tabindex="0">Label</button>
  <button class="tab" role="tab" aria-selected="false" aria-controls="tabpanel-1" id="tab-1" tabindex="-1">Label</button>
  <button class="tab tab-active" role="tab" aria-selected="false" aria-controls="tabpanel-2" id="tab-2" tabindex="-1">Label</button>
</div>
```
  </TabItem>
</Tabs>
