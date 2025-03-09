import React from 'react'

import { Grid } from '../utilities/Grid'
import { Status } from '../components/Status'

export default {
  title: 'Components/Status',
  component: Status,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Indicate the status of an object.'
      }
    }
  },
  argTypes: {
    dense: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <Status {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Status'
}

export const Color = () => (
  <Grid gap={4}>
    <Grid><Status>Inactive</Status></Grid>
    <Grid><Status color="success">Success</Status></Grid>
    <Grid><Status color="info">Info</Status></Grid>
    <Grid><Status color="warning">Warning</Status></Grid>
    <Grid><Status color="error">Error</Status></Grid>
  </Grid>
)

export const Dense = () => (
  <Status dense>Dense</Status>
)
