import React from 'react'

import { Textarea } from '../components/Textarea'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Allow users to enter text on multiple lines. This component uses the base structure of the Input component.'
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

const Template = (args) => <Textarea {...args} />

export const Playground = Template.bind({})

export const IsFocused = () => (
  <Textarea id="isFocused" label="IsFocused" isFocused />
)

export const Error = () => (
  <Textarea id="error" label="Error" error />
)

export const Disabled = () => (
  <Textarea id="disabled" label="Disabled" disabled />
)

export const Optional = () => (
  <Textarea id="optional" label="Optional" optional />
)

export const Hint = () => (
  <Textarea id="hint" label="Hint" hint="This is a hint to give more details" />
)
