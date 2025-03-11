import React from 'react'

import { Tab } from '../components/Tab'
import { Tabs } from '../components/Tabs'

export default {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Single tab item.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => (
  <Tabs>
    <Tab {...args} />
  </Tabs>
)

export const Playground = Template.bind({})

Playground.args = {
  label: "Tab",
  index: 0
}
