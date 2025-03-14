import React from 'react'

import { Tab } from '../components/Tab'
import { Tabs } from '../components/Tabs'
import { TabsControl } from '../components/TabsControl'

export default {
  title: 'Components/TabsControl',
  component: TabsControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Container for the list of tab elements.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) =>(
  <Tabs>
    <TabsControl {...args} />
  </Tabs>
)

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Tab label="Tab 1" index={0} />
      <Tab label="Tab 2" index={1} />
      <Tab label="Tab 3" index={2} />
    </>
  )
}
