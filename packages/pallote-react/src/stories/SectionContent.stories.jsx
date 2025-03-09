import React from 'react'

import { Text } from '../utilities/Text'
import { SectionContent } from '../components/SectionContent'

export default {
  title: 'Components/SectionContent',
  component: SectionContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Child of the Section component to display content. You can have multiple SectionContent per Section.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <SectionContent {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <Text>Here you can add whatever you want, and add as many section content has you want.</Text>
  )
}

export const Align = () => (
  <>
    <SectionContent>
      <Text>Align all content and text to the left.</Text>
    </SectionContent>
    <SectionContent align="center">
      <Text>Align all content and text to the center.</Text>
    </SectionContent>
    <SectionContent align="right">
      <Text>Align all content and text to the right.</Text>
    </SectionContent>
  </>
)
