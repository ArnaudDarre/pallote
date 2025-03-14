import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { House } from '@phosphor-icons/react'

import { NavItem } from '../components/NavItem'

export default {
  title: 'Components/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A single nav item, which can also include a dropdown list of `NavItem`.'
      }
    }
  },
  argTypes: {
    dropdown: { control: false },
    icon: { control: false },
    to: { control: false },
    end: { control: false },
    className: { control: false },
    children: { control: false }
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

const Template = (args) => (
  <NavItem {...args}  className="w-fit" />
)

export const Playground = Template.bind({})

export const Active = () => (
  <NavItem className="w-fit" label='Active' active />
)

export const Dropdown = () => (
  <NavItem
    className="w-fit"
    label='With dropdown'
    dropdown={
      <>
        <NavItem label='Nav item' />
        <NavItem label='Nav item' />
        <NavItem label='Nav item' />
      </>
    }
  />
)

export const Icon = () => (
  <NavItem className="w-fit" label='Icon' icon={<House />} />
)
