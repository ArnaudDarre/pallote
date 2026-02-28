import React from 'react'

import { Button } from '../components/Button'
import { Section } from '../components/Section'
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

export const TitleLevel = () => (
  <>
    <Section>
      <SectionHeader
        title="Title level 1"
        titleLevel={1}
      />
    </Section>
    <Section>
      <SectionHeader
        title="Title level 2"
        titleLevel={2}
      />
    </Section>
    <Section>
      <SectionHeader
        title="Title level 3"
        titleLevel={3}
      />
    </Section>
  </>
)


TitleLevel.parameters = {
  docs: {
    description: {
      story: 'Controls semantic heading level and visual variant (1 => h1/h2 style, 2 => h2/h3 style, 3 => h3/h4 style).'
    }
  }
}

export const ActionsPosition = () => (
  <>
    <Section>
      <SectionHeader
        title="Actions on the right"
        subtitle="Actions appear at the right of the title on desktop, below the title on mobile"
        actions={<Button>Action</Button>}
        actionsPosition="right"
      />
    </Section>
    <Section>
      <SectionHeader
        title="Actions on the bottom"
        subtitle="Actions appear below the subtitle"
        actions={<Button>Action</Button>}
        actionsPosition="bottom"
      />
    </Section>
  </>
)

ActionsPosition.parameters = {
  docs: {
    description: {
      story: 'Controls where actions are placed. `right` places them inline with the title (stacks on mobile), `bottom` places them below the subtitle.'
    }
  }
}
