import React from 'react'

import { Grid } from '../utilities/Grid'
import { Radio } from '../components/Radio'

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
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
    <Grid item><Radio label="Disabled" id="disabled" name="disabled" value="disabled" disabled></Radio></Grid>
    <Grid item><Radio label="Disabled" id="disabled" name="disabled" value="disabled" checked disabled></Radio></Grid>
  </Grid>
)

export const Optional = () => (
  <Radio label="Optional" id="optional" name="optional" value="optional" optional></Radio>
)
