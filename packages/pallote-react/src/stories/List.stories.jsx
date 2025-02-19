import React from 'react'
import { Coffee } from '@phosphor-icons/react'

import { List } from '../components/List'
import { ListItem } from '../components/ListItem'

export default {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    className: { control: false }
  }
}

const Template = (args) => <List {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <ListItem icon={<Coffee />}>This is a list of items</ListItem>
      <ListItem>Use this component for consistent</ListItem>
      <ListItem>Spacing and styling</ListItem>
    </>
  )
}

export const Dense = () => (
  <List dense>
    <ListItem>This is a dense list</ListItem>
    <ListItem>The space between items</ListItem>
    <ListItem>And font size are smaller</ListItem>
  </List>
)
