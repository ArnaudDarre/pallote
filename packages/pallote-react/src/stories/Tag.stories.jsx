import React from 'react'

import { Grid } from '../utilities/Grid'
import { Tag } from '../components/Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Small label representing data like a status or a property.'
      }
    }
  },
  argTypes: {
    className: { control: false }
  }
}

const Template = (args) => <Tag {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Tag'
}

export const Color = () => (
  <Grid gap={4} direction="column">
    <Grid gap={2}>
      <Tag>Primary</Tag>
      <Tag color="secondary">Secondary</Tag>
      <Tag color="grey">Grey</Tag>
    </Grid>
    <Grid gap={2}>
      <Tag color="success">Success</Tag>
      <Tag color="info">Info</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="error">Error</Tag>
    </Grid>
  </Grid>
)

export const Dense = () => (
  <Tag dense>Dense</Tag>
)
