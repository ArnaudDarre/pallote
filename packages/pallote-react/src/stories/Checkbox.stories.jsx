import React from 'react'

import { Checkbox } from '../components/Checkbox'
import { Grid } from '../components/Grid'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    id: { control: false },
    value: { control: false },
    label: { defaultValue: 'Checkbox' },
    checked: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <Checkbox {...args} />

export const Playground = Template.bind({})

Playground.args = {
  id: 'checkbox',
  value: 'checkbox',
  label: 'Checkbox'
}

export const Checked = () => (
  <Checkbox label="Checked" id="checked" value="checked" checked></Checkbox>
)

Checked.parameters = {
  docs: {
    description: {
      story: 'Check the item by default.'
    }
  }
}

export const Disabled = () => (
  <Grid spacing={4} direction="column">
    <Grid item><Checkbox label="Disabled" id="disabled" value="disabled" disabled></Checkbox></Grid>
    <Grid item><Checkbox label="Disabled" id="disabled" value="disabled" checked disabled></Checkbox></Grid>
  </Grid>
)
