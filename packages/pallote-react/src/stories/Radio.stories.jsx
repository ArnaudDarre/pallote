import React from 'react'

import { Grid } from '../utilities/Grid'
import { Radio } from '../components/Radio'

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Single radio button component.'
      }
    }
  },
  argTypes: {
    id: { control: false },
    name: { control: false },
    value: { control: false },
    label: { defaultValue: 'Radio' },
    className: { control: false }
  }
}

const Template = (args) => <Radio {...args} />

export const Playground = Template.bind({})

Playground.args = {
  id: 'radio',
  name: 'radio',
  value: 'radio',
  label: 'Radio'
}

export const Checked = () => (
  <Radio label="Checked" id="checked" name="checked" value="checked" checked></Radio>
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
    <Radio label="Disabled" id="disabled" name="disabled" value="disabled" disabled></Radio>
    <Radio label="Disabled" id="disabled" name="disabled" value="disabled" checked disabled></Radio>
  </Grid>
)

export const Optional = () => (
  <Radio label="Optional" id="optional" name="optional" value="optional" optional></Radio>
)

export const Dense = () => (
  <Grid gap={4} direction="column">
    <Radio label="Dense" id="dense" name="dense" value="dense" dense></Radio>
    <Radio label="Dense Checked" id="denseChecked" name="dense" value="denseChecked" checked dense></Radio>
  </Grid>
)
