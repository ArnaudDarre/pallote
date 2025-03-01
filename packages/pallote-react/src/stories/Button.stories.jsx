import React from 'react'
import { Coffee, Moon, Sun } from '@phosphor-icons/react'

import { Text } from '../utilities/Text'
import { Button } from '../components/Button'
import { Grid } from '../components/Grid'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    iconLeft: { control: false },
    iconRight: { control: false },
    className: { control: false },
    children: { control: false }
  }
}

const Template = (args) => <Button {...args} />

export const Playground = Template.bind({})

export const Component = () => (
  <Grid spacing={4}>
    <Grid item><Button>Button</Button></Grid>
    <Grid item><Button component="a">Anchor link</Button></Grid>
    <Grid item><Button component={Text}>Component</Button></Grid>
  </Grid>    
)

Component.parameters = {
  docs: {
    description: {
      story: 'Change the HTML tag of the component'
    }
  }
}

export const Kind = () => (
  <Grid spacing={4}>
    <Grid item><Button>Text</Button></Grid>
    <Grid item><Button kind="icon"><Coffee /></Button></Grid>
  </Grid>
)

Kind.parameters = {
  docs: {
    description: {
      story: 'Set the button content type.'
    }
  }
}

export const Variant = () => (
  <Grid spacing={4}>
    <Grid item><Button>Fill</Button></Grid>
    <Grid item><Button variant="stroke">Stroke</Button></Grid>
    <Grid item><Button variant="transparent">Transparent</Button></Grid>
  </Grid>
)

Variant.parameters = {
  docs: {
    description: {
      story: 'Change the button style.'
    }
  }
}

export const Size = () => (
  <Grid spacing={4}>
    <Grid item><Button size="xs">XSmall</Button></Grid>
    <Grid item><Button size="sm">Small</Button></Grid>
    <Grid item><Button>Medium</Button></Grid>
    <Grid item><Button size="lg">Large</Button></Grid>
  </Grid>
)

export const Color = () => (
  <Grid spacing={4}>
    <Grid item spacing={2}>
      <Grid item><Button>Primary</Button></Grid>
      <Grid item><Button color="secondary">Secondary</Button></Grid>
    </Grid>
    <Grid item spacing={2}>
      <Grid item><Button color="success">Success</Button></Grid>
      <Grid item><Button color="info">Info</Button></Grid>
      <Grid item><Button color="warning">Warning</Button></Grid>
      <Grid item><Button color="error">Error</Button></Grid>
    </Grid>
    <Grid item spacing={2}>
      <Grid item><Button color="grey">Grey</Button></Grid>
      <Grid item><Button color="main">Main</Button></Grid>
      <Grid item><Button color="contrast">Contrast</Button></Grid>
    </Grid>
  </Grid>
)

export const Fullwidth = () => (
  <Button fullWidth>Full width</Button>
)

export const Disabled = () => (
  <Button disabled>Disabled</Button>
)

Disabled.parameters = {
  docs: {
    description: {
      story: 'Prevent users from clicking the button and change its styling and hover state accordingly. If the component prop is set to `button` it will add the `disabled` attribute.'
    }
  }
}

export const Icons = () => (
  <Grid spacing={4}>
    <Grid item><Button iconLeft={<Sun />}>Icon left</Button></Grid>
    <Grid item><Button iconRight={<Moon />}>Icon right</Button></Grid>
  </Grid>
)

Icons.parameters = {
  docs: {
    description: {
      story: 'Add icons to the left or right of the content with the `iconLeft` and `iconRight` props.'
    }
  }
}
