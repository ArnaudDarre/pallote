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
        component: ''
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
  <Grid gap={2}>
    <Grid item gap={2}>
      <Grid item><Link href="/" color="default">Default</Link></Grid>
      <Grid item><Link href="/" color="alt">Alt</Link></Grid>
      <Grid item><Link href="/" color="disabled">Disabled</Link></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item className="fill-contrast"><Link href="/" color="contrast">Contrast</Link></Grid>
      <Grid item className="fill-contrast"><Link href="/" color="contrastAlt">Contrast alt</Link></Grid>
      <Grid item className="fill-contrast"><Link href="/" color="contrastDisabled">Contrast disabled</Link></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Link href="/" color="primary">Primary</Link></Grid>
      <Grid item><Link href="/" color="secondary">Secondary</Link></Grid>
    </Grid>
    <Grid item gap={2}>
      <Grid item><Link href="/" color="inherit">Inherit</Link></Grid>
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

