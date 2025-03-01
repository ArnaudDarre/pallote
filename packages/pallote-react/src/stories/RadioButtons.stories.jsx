import React from 'react'

import { Radio } from '../components/Radio'
import { RadioButtons } from '../components/RadioButtons'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/RadioButtons',
  component: RadioButtons,
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: false },
    onFocus:{ control: false },
    onBlur:{ control: false },
    children:{ control: false },
    className: { control: false }
  }
}

const Template = (args) => <RadioButtons {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Radio name="checkbox" id="checkbox_1" value="1" label="Option 1" />
      <Radio name="checkbox" id="checkbox_2" value="2" label="Option 2" />
    </>
  )
}

export const Direction = () => (
  <Grid gap={4} direction="column">
    <Grid item>
      <RadioButtons direction="portrait" id="portrait" label="Portrait">
        <Radio name="portrait" id="portrait_1" value="1" label="Option 1" />
        <Radio name="portrait" id="portrait_2" value="2" label="Option 2" />
      </RadioButtons>
    </Grid>
    <Grid item>
      <RadioButtons direction="landscape" id="landscape" label="Landscape">
        <Radio name="landscape" id="landscape_1" value="1" label="Option 1" />
        <Radio name="landscape" id="landscape_2" value="2" label="Option 2" />
      </RadioButtons>
    </Grid>
  </Grid>
)

export const Error = () => (
  <RadioButtons id="error" label="Error" error>
    <Radio name="error" id="error_1" value="1" label="Option 1" />
    <Radio name="error" id="error_2" value="2" label="Option 2" />
  </RadioButtons>
)

export const Disabled = () => (
  <RadioButtons id="disabled" label="Disabled" disabled>
    <Radio name="disabled" id="disabled_1" value="1" label="Option 1" />
    <Radio name="disabled" id="disabled_2" value="2" label="Option 2" />
  </RadioButtons>
)

export const Optional = () => (
  <RadioButtons id="optional" label="Optional" optional>
    <Radio name="optional" id="optional_1" value="1" label="Option 1" />
    <Radio name="optional" id="optional_2" value="2" label="Option 2" />
  </RadioButtons>
)

export const Hint = () => (
  <RadioButtons id="hint" label="Hint" hint="This is a hint to give more details">
    <Radio name="hint" id="hint_1" value="1" label="Option 1" />
    <Radio name="hint" id="hint_2" value="2" label="Option 2" />
  </RadioButtons>
)
