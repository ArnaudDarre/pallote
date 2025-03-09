import React from 'react'

import { Button } from '../components/Button'
import { SectionHeader } from '../components/SectionHeader'

export default {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Child of the Section component. Each Section should have one SectionHeader component.'
      }
    }
  },
  argTypes: {
    actions: { control: false },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <SectionHeader {...args} />

export const Playground = Template.bind({})

Playground.args = {
  label: 'Section label',
  title: 'Section title',
  subtitle: 'Optional section subtitle',
  actions: (
    <Button>Action</Button>
  )
}

export const TitleComponent = () => (
  <SectionHeader
    title="You can use h1 to h6 and p"
    titleComponent="p"
  />
)

TitleComponent.parameters = {
  docs: {
    description: {
      story: 'Override the default HTML tag of the section title.'
    }
  }
}
