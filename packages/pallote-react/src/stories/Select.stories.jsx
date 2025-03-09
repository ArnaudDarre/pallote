import React from 'react'

import { Select } from '../components/Select'

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Allow users to select an option from a long list. This component uses the base structure of the Input component.'
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

const Template = (args) => <Select {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </>
  )
}

export const IsFocused = () => (
  <Select id="isFocused" label="IsFocused" isFocused>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
)

export const Error = () => (
  <Select id="error" label="Error" error>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
)

export const Disabled = () => (
  <Select id="disabled" label="Disabled" disabled>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
)

export const Optional = () => (
  <Select id="optional" label="Optional" optional>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
)

export const Hint = () => (
  <Select id="hint" label="Hint" hint="This is a hint to give more details">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
)
