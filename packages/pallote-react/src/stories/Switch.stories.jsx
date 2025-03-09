import React from 'react'

import { Switch } from '../components/Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Allow user to toggle between two states.'
      }
    }
  },
  argTypes: {
    id: { control: false },
    startLabel: { defaultValue: '' },
    endLabel: { defaultValue: 'Switch' },
    disabled: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <Switch {...args} />

export const Playground = Template.bind({})

Playground.args = {
  id: 'Switch',
  name: 'Switch',
  value: 'Switch',
  label: 'Switch'
}

export const StartLabel = () => (
  <Switch startLabel="Start label" id="startLabel"></Switch>
)

export const EndLabel = () => (
  <Switch endLabel="End label" id="endLabel"></Switch>
)

export const Checked = () => (
  <Switch id="checked" checked></Switch>
)

export const Disabled = () => (
  <Switch id="disabled" disabled></Switch>
)
