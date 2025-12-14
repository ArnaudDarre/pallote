import React from 'react'
import { Folder, Gear, User, Star } from '@phosphor-icons/react'

import { Accordion } from '../components/Accordion'
import { AccordionItem } from '../components/AccordionItem'
import { Text } from '../utilities/Text'

export default {
  title: 'Components/AccordionItem',
  component: AccordionItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Individual expandable section within an Accordion. Must be used as a child of Accordion.'
      }
    }
  },
  argTypes: {
    icon: { control: false },
    className: { control: false },
    children: { control: false },
    isOpen: { control: false },
    onToggle: { control: false },
    index: { control: false }
  },
  decorators: [
    (Story) => (
      <Accordion>
        <Story />
      </Accordion>
    )
  ]
}

const content = (
  <Text variant="body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Text>
)

const Template = (args) => <AccordionItem {...args} />

export const Playground = Template.bind({})
Playground.args = {
  label: 'Accordion Item',
  children: content
}

export const Label = () => (
  <Accordion>
    <AccordionItem label="Custom header text">
      {content}
    </AccordionItem>
  </Accordion>
)

Label.parameters = {
  docs: {
    description: {
      story: 'The `label` prop sets the header text displayed in the accordion control.'
    }
  }
}

export const WithIcon = () => (
  <Accordion>
    <AccordionItem label="Profile" icon={<User />}>
      {content}
    </AccordionItem>
  </Accordion>
)

WithIcon.parameters = {
  docs: {
    description: {
      story: 'Accordion item with a leading icon.'
    }
  }
}

export const Disabled = () => (
  <Accordion>
    <AccordionItem label="Enabled item">
      {content}
    </AccordionItem>
    <AccordionItem label="Disabled item" disabled>
      {content}
    </AccordionItem>
  </Accordion>
)

Disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled accordion item cannot be expanded.'
    }
  }
}
