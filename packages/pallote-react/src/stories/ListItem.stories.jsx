import React from 'react'
import { Coffee } from '@phosphor-icons/react'

import { ListItem } from '../components/ListItem'

export default {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false },
    bold: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <ListItem {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'ListItem'
}

export const Icon = () => (
  <>
    <ListItem icon={<Coffee />}>With icon</ListItem>
    <ListItem icon={<Coffee />} bold>Bold with icon</ListItem>
  </>
)

export const Bold = () => (
  <ListItem bold>Bold</ListItem>
)
