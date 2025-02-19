import React from 'react'

import { Text } from '../utilities/Text'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { SectionContent } from '../components/SectionContent'
import { SectionHeader } from '../components/SectionHeader'

export default {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => (
  <Section {...args}>
    <SectionHeader
      label="Section label"
      title="Section title"
      subtitle="Optional section subtitle"
      actions={
        <Button>Action</Button>
      }
    />
    <SectionContent>
      <Text>On the section content you can add whatever you want, and use as many of them as you want in a single section.</Text>
    </SectionContent>
  </Section>
)

export const Playground = Template.bind({})

Playground.args = {
  children: 'Section'
}

export const Align = () => (
  <>
    <Section>
      <SectionHeader
        title="Left"
        subtitle="Align all content and text to the left"
      />
    </Section>
    <Section align="center">
      <SectionHeader
        title="Center"
        subtitle="Align all content and text to the center"
      />
    </Section>
    <Section align="right">
      <SectionHeader
        title="Right"
        subtitle="Align all content and text to the right"
      />
    </Section>
  </>
)

export const Color = () => (
  <>
    <Section>
      <SectionHeader
        title="Default"
        subtitle="Change the background colour to default"
      />
    </Section>
    <Section color="paper">
      <SectionHeader
        title="Paper"
        subtitle="Change the background colour to paper"
      />
    </Section>
    <Section color="primary">
      <SectionHeader
        title="Primary"
        subtitle="Change the background colour to primary"
      />
    </Section>
    <Section color="primaryLight">
      <SectionHeader
        title="Primary Light"
        subtitle="Change the background colour to primary light"
      />
    </Section>
  </>
)

export const Landing = () => (
  <Section landing>
    <SectionHeader
      title="Landing"
      subtitle="Prop for the website homepage landing section."
    />
  </Section>
)

export const Header = () => (
  <Section header>
    <SectionHeader
      title="Header"
      subtitle="Prop for the first section of a page."
    />
  </Section>
)
