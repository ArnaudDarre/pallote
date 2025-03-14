import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Grid } from '../utilities/Grid'
import { Nav } from '../components/Nav'
import { NavItem } from '../components/NavItem'

export default {
  title: 'Components/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Wrapper for a group of navigation items.'
      }
    }
  },
  argTypes: {
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

const Template = (args) => <Nav {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <NavItem label='Nav item' />
      <NavItem label='Nav item' />
      <NavItem label='Nav item' />
    </>
  )
}

export const Direction = () => (
  <Grid gap={2} direction="column">
    <Nav aria-label='landscape-nav' direction='landscape'>
      <NavItem label='Landscape' />
      <NavItem label='Landscape' />
    </Nav>
    <Nav aria-label='portrait-nav' direction='portrait'>
      <NavItem label='Portait' />
      <NavItem label='Portait' />
    </Nav>
  </Grid>
)

export const Dense = () => (
  <Nav aria-label='dense-nav' dense>
    <NavItem label='Dense' />
    <NavItem label='Dense' />
  </Nav>
)
