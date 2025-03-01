import React from 'react'

import { Grid } from '../components/Grid'
import { Tag } from '../components/Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
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
  <Grid spacing={4}>
    <Grid item spacing={2}>
      <Grid item><Tag>Primary</Tag></Grid>
      <Grid item><Tag color="secondary">Secondary</Tag></Grid>
      <Grid item><Tag color="grey">Grey</Tag></Grid>
    </Grid>
    <Grid item spacing={2}>
      <Grid item><Tag color="success">Success</Tag></Grid>
      <Grid item><Tag color="info">Info</Tag></Grid>
      <Grid item><Tag color="warning">Warning</Tag></Grid>
      <Grid item><Tag color="error">Error</Tag></Grid>
    </Grid>
  </Grid>
)

export const Dense = () => (
  <Tag dense>Dense</Tag>
)
