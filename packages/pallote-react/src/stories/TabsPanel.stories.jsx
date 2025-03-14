import React from 'react'

import { Tabs } from '../components/Tabs'
import { TabsPanel } from '../components/TabsPanel'

export default {
  title: 'Components/TabsPanel',
  component: TabsPanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Individual block of content displayed or hidden by navigating between tab items.'
      }
    }
  },
  argTypes: {
    index: { control: false },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => (
  <Tabs>
    <TabsPanel {...args} />
  </Tabs>
)

export const Playground = Template.bind({})

Playground.args = {
  children: "Tab content",
  index: 0
}
