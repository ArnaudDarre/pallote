import React from 'react'

import { Divider } from '../components/Divider'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Line to separate content.'
      }
    }
  },
  argTypes: {
    className: { control: false }
  }
}

const Template = (args) => <Divider {...args} />

export const Playground = Template.bind({})

export const Direction = () => (
  <Grid direction="column" gap={2}>
    <Grid item className="fg-1"><Divider /></Grid>
    <Grid item><Divider direction="portrait" className="h-4" /></Grid>
  </Grid>
)

export const Padding = () => (
  <Grid gap={4} direction="column">
    <Grid item><Divider padding="none" /></Grid>
    <Grid item><Divider padding="sm" /></Grid>
    <Grid item><Divider padding="md" /></Grid>
    <Grid item><Divider padding="lg" /></Grid>
  </Grid>
)
