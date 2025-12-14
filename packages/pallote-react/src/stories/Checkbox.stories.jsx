import React from 'react'

import { Checkbox } from '../components/Checkbox'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Single checkbox component.'
      }
    }
  },
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
  <Grid gap={4} direction="column">
    <Checkbox label="Disabled" id="disabled" value="disabled" disabled></Checkbox>
    <Checkbox label="Disabled Checked" id="disabled" value="disabled" checked disabled></Checkbox>
  </Grid>
)

export const Dense = () => (
  <Grid gap={4} direction="column">
    <Checkbox label="Dense" id="dense" value="dense" dense></Checkbox>
    <Checkbox label="Dense Checked" id="denseChecked" value="denseChecked" checked dense></Checkbox>
  </Grid>
)
