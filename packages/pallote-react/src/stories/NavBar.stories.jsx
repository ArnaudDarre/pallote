import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Grid } from '../utilities/Grid'
import { NavBar } from '../components/NavBar'
import { NavItem } from '../components/NavItem'

export default {
  title: 'Components/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The header of the website, which includes the logo and navigation items.'
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

const Template = (args) => <NavBar {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <NavItem label='Home' active/>
      <NavItem
        label='About'
        dropdown={
          <>
            <NavItem label='Services' />
            <NavItem label='Teams' />
          </>
        }
      />
      <NavItem label='Contact' />
    </>
  )
}

export const Align = () => (
  <Grid gap={2} direction="column">
    <NavBar>
      <NavItem label='Align' active />
      <NavItem label='Left' />
    </NavBar>
    <NavBar align="right">
      <NavItem label='Align' active />
      <NavItem label='Right' />
    </NavBar>
  </Grid>
)

