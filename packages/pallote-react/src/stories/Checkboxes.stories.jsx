import React from 'react'

import { Checkbox } from '../components/Checkbox'
import { Checkboxes } from '../components/Checkboxes'
import { Grid } from '../components/Grid'

export default {
  title: 'Components/Checkboxes',
  component: Checkboxes,
  tags: ['autodocs'],
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
  children: (
    <>
      <Checkbox id="checkbox_1" value="1" label="Option 1" />
      <Checkbox id="checkbox_2" value="2" label="Option 2" />
    </>
  )
}

export const Direction = () => (
  <Grid wrapper direction="column" spacing={2}>
    <Grid item>
      <Checkboxes id="portrait" label="Portrait">
        <Checkbox id="portrait_1" value="1" label="Option 1" />
        <Checkbox id="portrait_2" value="2" label="Option 2" />
      </Checkboxes>
    </Grid>
    <Grid item>
      <Checkboxes direction="landscape" id="landscape" label="Landscape">
        <Checkbox id="landscape_1" value="1" label="Option 1" />
        <Checkbox id="landscape_2" value="2" label="Option 2" />
      </Checkboxes>
    </Grid>
  </Grid>
)

export const Error = () => (
  <Checkboxes id="error" label="Error" error>
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
