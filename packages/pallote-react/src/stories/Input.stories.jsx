import React from 'react'
import { Phone } from '@phosphor-icons/react'

import { Grid } from '../utilities/Grid'
import { Input } from '../components/Input'

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Allow users to enter text that will fit on a single line. This is the most basic form field.'
      }
    }
  },
  argTypes: {
    onChange: { control: false },
    icon:{ control: false },
    onFocus:{ control: false },
    onBlur:{ control: false },
    children:{ control: false },
    className: { control: false }
  }
}

const Template = (args) => <Input {...args} />

export const Playground = Template.bind({})

Playground.args = {
  id: "input",
}

export const Type = () => (
  <Grid gap={4}>
    <Grid colmd={4}><Input type="date" id="date" label="Date" /></Grid>
    <Grid colmd={4}><Input type="email" id="email" label="Email" /></Grid>
    <Grid colmd={4}><Input type="number" id="number" label="Number" /></Grid>
    <Grid colmd={4}><Input type="tel" id="tel" label="Telephone" /></Grid>
    <Grid colmd={4}><Input type="text" id="text" label="Text" /></Grid>
    <Grid colmd={4}><Input type="time" id="time" label="Time" /></Grid>
  </Grid>
)

export const Icon = () => (
  <Input id="icon" label="Icon" icon={<Phone />} />
)

export const IsFocused = () => (
  <Input id="isFocused" label="IsFocused" isFocused />
)

export const Error = () => (
  <Input id="error" label="Error" error="This is the error message" />
)

export const Disabled = () => (
  <>
    <Input id="disabled" label="Disabled" disabled />
  </>
)

export const Optional = () => (
  <Input id="optional" label="Optional" optional />
)

export const Hint = () => (
  <Input id="hint" label="Hint" hint="This is a hint to give more details" />
)

export const Dense = () => (
  <Input id="dense" label="Dense" dense />
)

export const HideLabel = () => (
  <Input id="hideLabel" label="Hidden Label" hideLabel placeholder="Label is hidden but accessible to screen readers" />
)
