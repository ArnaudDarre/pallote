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
  <Grid gap={4}>
    <Grid gap={2}>
      <Grid><Tag>Primary</Tag></Grid>
      <Grid><Tag color="secondary">Secondary</Tag></Grid>
      <Grid><Tag color="grey">Grey</Tag></Grid>
    </Grid>
    <Grid gap={2}>
      <Grid><Tag color="success">Success</Tag></Grid>
      <Grid><Tag color="info">Info</Tag></Grid>
      <Grid><Tag color="warning">Warning</Tag></Grid>
      <Grid><Tag color="error">Error</Tag></Grid>
    </Grid>
  </Grid>
)

export const Dense = () => (
  <Tag dense>Dense</Tag>
)
