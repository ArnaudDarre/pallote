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
    <Grid className="fg-1"><Divider /></Grid>
    <Grid><Divider direction="portrait" className="h-4" /></Grid>
  </Grid>
)

export const Padding = () => (
  <Grid gap={4} direction="column">
    <Grid><Divider padding="none" /></Grid>
    <Grid><Divider padding="sm" /></Grid>
    <Grid><Divider padding="md" /></Grid>
    <Grid><Divider padding="lg" /></Grid>
  </Grid>
)
