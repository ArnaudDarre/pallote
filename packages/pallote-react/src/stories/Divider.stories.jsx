import React from 'react'

import { Divider } from '../components/Divider'
import { Grid } from '../components/Grid'

export default {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    className: { control: false }
  }
}

const Template = (args) => <Divider {...args} />

export const Playground = Template.bind({})

export const Direction = () => (
  <Grid wrapper direction="column" spacing={2}>
    <Grid item className="fg-1"><Divider /></Grid>
    <Grid item><Divider direction="portrait" className="h-4" /></Grid>
  </Grid>
)

export const Size = () => (
  <Grid wrapper spacing={2} direction="column">
    <Grid item><Divider size="sm" /></Grid>
    <Grid item><Divider size="md" /></Grid>
    <Grid item><Divider size="lg" /></Grid>
  </Grid>
)
