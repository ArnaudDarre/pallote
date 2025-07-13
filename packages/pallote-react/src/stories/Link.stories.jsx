import React from 'react'
import { ArrowRight } from '@phosphor-icons/react'

import { Grid } from '../utilities/Grid'
import { Link } from '../components/Link'

export default {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Reference to a resource, either external (a link to a different website) or internal (a link to another page or document).'
      }
    }
  },
  argTypes: {
    icon: { defaultValue: false },
    disabled: { defaultValue: false },
    className: { control: false }
  }
}

const Template = (args) => <Link {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Link'
}

export const Icon = () => (
  <Link icon={<ArrowRight />}>Link with icon</Link>
)

export const Color = () => (
  <Grid gap={2} direction="column">
    <Grid gap={2}>
      <Grid><Link href="/" color="default">Default</Link></Grid>
      <Grid><Link href="/" color="alt">Alt</Link></Grid>
      <Grid><Link href="/" color="disabled">Disabled</Link></Grid>
    </Grid>
    <Grid gap={2}>
      <Grid className="fill-contrast"><Link href="/" color="contrast">Contrast</Link></Grid>
      <Grid className="fill-contrast"><Link href="/" color="contrastAlt">Contrast alt</Link></Grid>
      <Grid className="fill-contrast"><Link href="/" color="contrastDisabled">Contrast disabled</Link></Grid>
    </Grid>
    <Grid gap={2}>
      <Grid><Link href="/" color="primary">Primary</Link></Grid>
      <Grid><Link href="/" color="secondary">Secondary</Link></Grid>
    </Grid>
    <Grid gap={2}>
      <Grid><Link href="/" color="inherit">Inherit</Link></Grid>
    </Grid>
  </Grid>
)

Color.parameters = {
  docs: {
    description: {
      story: 'Overrides the link color. The inherit value means that the link will inherit the parent text colour.'
    }
  }
}

export const IsExternal = () => (
  <Link isExternal href="https://pallote.com">External link</Link>
)

