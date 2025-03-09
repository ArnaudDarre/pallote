import React from 'react'

import { Button } from '../components/Button'
import { Buttons } from '../components/Buttons'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Set automated and responsive spacing and wrapping behaviour for a list of Button components.'
      }
    }
  },
  argTypes: {
    direction: { defaultValue: 'landscape' },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Buttons {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: (
    <>
      <Button>Save</Button>
      <Button color="secondary">Edit</Button>
    </>
  )
}

export const Directions = () => (
  <Grid gap={4}>
    <Grid>
      <Buttons>
        <Button>Landscape</Button>
        <Button color="secondary">Landscape</Button>
      </Buttons>
    </Grid>
    <Grid>
      <Buttons direction="portrait">
        <Button>Portrait</Button>
        <Button color="secondary">Portrait</Button>
      </Buttons>
    </Grid>
  </Grid>
)

export const Fullwidth = () => (
  <Buttons fullWidth>
    <Button>Full width</Button>
    <Button color="secondary">Full width</Button>
  </Buttons>
)

export const Wide = () => (
  <Buttons wide>
    <Button>Wide</Button>
    <Button color="secondary">Wide</Button>
  </Buttons>
)
