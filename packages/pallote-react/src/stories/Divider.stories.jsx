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
    <Divider />
    <Divider direction="portrait" className="h-4" />
  </Grid>
)

export const Padding = () => (
  <Grid gap={4} direction="column">
    <Divider padding="none" />
    <Divider padding="sm" />
    <Divider padding="md" />
    <Divider padding="lg" />
  </Grid>
)
