import React from 'react'

import { Checkbox } from '../components/Checkbox'
import { Checkboxes } from '../components/Checkboxes'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/Checkboxes',
  component: Checkboxes,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Allow users to select multiple options from a list. This component uses the base structure of the Input component.'
      }
    }
  },
  argTypes: {
    onChange: { control: false },
    onFocus:{ control: false },
    onBlur:{ control: false },
    children:{ control: false },
    className: { control: false }
  }
}

const Template = (args) => <Checkboxes {...args} />

export const Playground = Template.bind({})

Playground.args = {
  id: "checkboxes",
  children: (
    <>
      <Checkbox id="checkbox_1" value="1" label="Option 1" />
      <Checkbox id="checkbox_2" value="2" label="Option 2" />
    </>
  )
}

export const Direction = () => (
  <Grid direction="column" gap={2}>
    <Grid>
      <Checkboxes id="portrait" label="Portrait">
        <Checkbox id="portrait_1" value="1" label="Option 1" />
        <Checkbox id="portrait_2" value="2" label="Option 2" />
      </Checkboxes>
    </Grid>
    <Grid>
      <Checkboxes direction="landscape" id="landscape" label="Landscape">
        <Checkbox id="landscape_1" value="1" label="Option 1" />
        <Checkbox id="landscape_2" value="2" label="Option 2" />
      </Checkboxes>
    </Grid>
  </Grid>
)

export const Error = () => (
  <Checkboxes id="error" label="Error" error="This is the error message">
    <Checkbox id="error_1" value="1" label="Option 1" />
    <Checkbox id="error_2" value="2" label="Option 2" />
  </Checkboxes>
)

export const Disabled = () => (
  <Checkboxes id="disabled" label="Disabled" disabled>
    <Checkbox id="disabled_1" value="1" label="Option 1" />
    <Checkbox id="disabled_2" value="2" label="Option 2" />
  </Checkboxes>
)

export const Optional = () => (
  <Checkboxes id="optional" label="Optional" optional>
    <Checkbox id="optional_1" value="1" label="Option 1" />
    <Checkbox id="optional_2" value="2" label="Option 2" />
  </Checkboxes>
)

export const Hint = () => (
  <Checkboxes id="hint" label="Hint" hint="This is a hint to give more details">
    <Checkbox id="hint_1" value="1" label="Option 1" />
    <Checkbox id="hint_2" value="2" label="Option 2" />
  </Checkboxes>
)

export const Dense = () => (
  <Checkboxes id="dense" label="Dense" dense>
    <Checkbox id="dense_1" value="1" label="Option 1" />
    <Checkbox id="dense_2" value="2" label="Option 2" />
  </Checkboxes>
)

export const HideLabel = () => (
  <Checkboxes id="hideLabel" label="Hidden Label" hideLabel>
    <Checkbox id="hideLabel_1" value="1" label="Option 1" />
    <Checkbox id="hideLabel_2" value="2" label="Option 2" />
  </Checkboxes>
)
