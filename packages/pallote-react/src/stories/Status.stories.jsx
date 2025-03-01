import React from 'react'

import { Grid } from '../components/Grid'
import { Status } from '../components/Status'

export default {
  title: 'Components/Status',
  component: Status,
  tags: ['autodocs'],
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
  <Grid spacing={4}>
    <Grid item><Status>Inactive</Status></Grid>
    <Grid item><Status color="success">Success</Status></Grid>
    <Grid item><Status color="info">Info</Status></Grid>
    <Grid item><Status color="warning">Warning</Status></Grid>
    <Grid item><Status color="error">Error</Status></Grid>
  </Grid>
)

export const Dense = () => (
  <Status dense>Dense</Status>
)
