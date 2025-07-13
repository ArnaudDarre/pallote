import React from 'react'
import { Coffee, Moon, Sun } from '@phosphor-icons/react'

import { Text } from '../utilities/Text'
import { Button } from '../components/Button'
import { Grid } from '../utilities/Grid'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Component for every call-to-action.'
      }
    }
  },
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
  <Grid gap={4}>
    <Grid><Button>Button</Button></Grid>
    <Grid><Button component="a">Anchor link</Button></Grid>
    <Grid><Button component={Text}>Component</Button></Grid>
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
  <Grid gap={4}>
    <Grid><Button>Text</Button></Grid>
    <Grid><Button kind="icon"><Coffee /></Button></Grid>
  </Grid>
)

Kind.parameters = {
  docs: {
    description: {
      story: 'Set the type of content.'
    }
  }
}

export const Variant = () => (
  <Grid gap={4}>
    <Grid><Button>Fill</Button></Grid>
    <Grid><Button variant="stroke">Stroke</Button></Grid>
    <Grid><Button variant="transparent">Transparent</Button></Grid>
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
  <Grid gap={4}>
    <Grid><Button size="xs">XSmall</Button></Grid>
    <Grid><Button size="sm">Small</Button></Grid>
    <Grid><Button>Medium</Button></Grid>
    <Grid><Button size="lg">Large</Button></Grid>
  </Grid>
)

export const Color = () => (
  <Grid gap={4} direction="column">
    <Grid gap={2}>
      <Grid><Button>Primary</Button></Grid>
      <Grid><Button color="secondary">Secondary</Button></Grid>
    </Grid>
    <Grid gap={2}>
      <Grid><Button color="success">Success</Button></Grid>
      <Grid><Button color="info">Info</Button></Grid>
      <Grid><Button color="warning">Warning</Button></Grid>
      <Grid><Button color="error">Error</Button></Grid>
    </Grid>
    <Grid gap={2}>
      <Grid><Button color="grey">Grey</Button></Grid>
      <Grid><Button color="main">Main</Button></Grid>
      <Grid><Button color="contrast">Contrast</Button></Grid>
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
  <Grid gap={4}>
    <Grid><Button iconLeft={<Sun />}>Icon left</Button></Grid>
    <Grid><Button iconRight={<Moon />}>Icon right</Button></Grid>
  </Grid>
)

Icons.parameters = {
  docs: {
    description: {
      story: 'Add icons to the left or right of the content with the `iconLeft` and `iconRight` props.'
    }
  }
}
