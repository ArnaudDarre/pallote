import React from 'react'
import { Folder, Gear, User } from '@phosphor-icons/react'

import { Accordion } from '../components/Accordion'
import { AccordionItem } from '../components/AccordionItem'
import { Grid } from '../utilities/Grid'
import { Text } from '../utilities/Text'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Expandable sections for organizing content. Only one section is open at a time by default.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const content = (
  <Text variant="body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Text>
)

export const Default = () => (
  <Accordion>
    <AccordionItem label="Section 1">
      {content}
    </AccordionItem>
    <AccordionItem label="Section 2">
      {content}
    </AccordionItem>
    <AccordionItem label="Section 3">
      {content}
    </AccordionItem>
  </Accordion>
)

Default.parameters = {
  docs: {
    description: {
      story: 'Default accordion with single selection mode.'
    }
  }
}

export const AllowMultiple = () => (
  <Accordion allowMultiple>
    <AccordionItem label="Section 1">
      {content}
    </AccordionItem>
    <AccordionItem label="Section 2">
      {content}
    </AccordionItem>
    <AccordionItem label="Section 3">
      {content}
    </AccordionItem>
  </Accordion>
)

AllowMultiple.parameters = {
  docs: {
    description: {
      story: 'Allow multiple sections to be open at once.'
    }
  }
}

export const Size = () => (
  <Grid gap={4}>
    <Accordion size="sm">
      <AccordionItem label="Small accordion">
        {content}
      </AccordionItem>
      <AccordionItem label="Small accordion">
        {content}
      </AccordionItem>
    </Accordion>
    <Accordion size="md">
      <AccordionItem label="Medium accordion">
        {content}
      </AccordionItem>
      <AccordionItem label="Medium accordion">
        {content}
      </AccordionItem>
    </Accordion>
    <Accordion size="lg">
      <AccordionItem label="Large accordion">
        {content}
      </AccordionItem>
      <AccordionItem label="Large accordion">
        {content}
      </AccordionItem>
    </Accordion>
  </Grid>
)

Size.parameters = {
  docs: {
    description: {
      story: 'Different sizes for the accordion.'
    }
  }
}

export const Transparent = () => (
  <Accordion transparent>
    <AccordionItem label="Section 1">
      {content}
    </AccordionItem>
    <AccordionItem label="Section 2">
      {content}
    </AccordionItem>
    <AccordionItem label="Section 3">
      {content}
    </AccordionItem>
  </Accordion>
)

Transparent.parameters = {
  docs: {
    description: {
      story: 'Transparent background variant. Background appears on hover and when active.'
    }
  }
}

export const WithIcons = () => (
  <Accordion>
    <AccordionItem label="Profile" icon={<User />}>
      {content}
    </AccordionItem>
    <AccordionItem label="Files" icon={<Folder />}>
      {content}
    </AccordionItem>
    <AccordionItem label="Settings" icon={<Gear />}>
      {content}
    </AccordionItem>
  </Accordion>
)

WithIcons.parameters = {
  docs: {
    description: {
      story: 'Accordion items with icons.'
    }
  }
}

export const Disabled = () => (
  <Accordion>
    <AccordionItem label="Enabled section">
      {content}
    </AccordionItem>
    <AccordionItem label="Disabled section" disabled>
      {content}
    </AccordionItem>
    <AccordionItem label="Another enabled section">
      {content}
    </AccordionItem>
  </Accordion>
)

Disabled.parameters = {
  docs: {
    description: {
      story: 'Individual accordion items can be disabled.'
    }
  }
}
