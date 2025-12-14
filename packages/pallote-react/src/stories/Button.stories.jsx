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
    <Button>Button</Button>
    <Button component="a">Anchor link</Button>
    <Button component={Text}>Component</Button>
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
    <Button>Text</Button>
    <Button kind="icon"><Coffee /></Button>
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
    <Button>Fill</Button>
    <Button variant="stroke">Stroke</Button>
    <Button variant="transparent">Transparent</Button>
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
    <Button size="xs">XSmall</Button>
    <Button size="sm">Small</Button>
    <Button>Medium</Button>
    <Button size="lg">Large</Button>
  </Grid>
)

export const Color = () => (
  <Grid gap={4} direction="column">
    <Grid gap={2}>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </Grid>
    <Grid gap={2}>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </Grid>
    <Grid gap={2}>
      <Button color="grey">Grey</Button>
      <Button color="main">Main</Button>
      <Button color="contrast">Contrast</Button>
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
    <Button iconLeft={<Sun />}>Icon left</Button>
    <Button iconRight={<Moon />}>Icon right</Button>
  </Grid>
)

Icons.parameters = {
  docs: {
    description: {
      story: 'Add icons to the left or right of the content with the `iconLeft` and `iconRight` props.'
    }
  }
}

export const Type = () => (
  <Grid gap={4}>
    <Button>Button (default)</Button>
    <Button type="submit">Submit</Button>
    <Button type="reset">Reset</Button>
  </Grid>
)

Type.parameters = {
  docs: {
    description: {
      story: 'By default, buttons have `type="button"` to prevent unintended form submissions. Override with `type="submit"` or `type="reset"` when needed.'
    }
  }
}
