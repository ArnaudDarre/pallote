import React from 'react'

import { Grid } from '../../utilities/Grid'
import { Text } from '../../utilities/Text'

export default {
  title: 'Utilities/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Use these utility props and classes to override the text style of an element.'
      }
    }
  },
  argTypes: {
    className: { control: false },
    children: { control: { type: 'text' } }
  }
}

const Template = (args) => <Text {...args} />

export const Playground = Template.bind({})

Playground.args = {
  children: 'Text'
}

export const Variant = () => (
  <Grid gap={4} direction="column">
    <Grid gap={2} items="baseline">
      <Grid><Text variant="h1">h1</Text></Grid>
      <Grid><Text variant="h2">h2</Text></Grid>
      <Grid><Text variant="h3">h3</Text></Grid>
      <Grid><Text variant="h4">h4</Text></Grid>
      <Grid><Text variant="h5">h5</Text></Grid>
      <Grid><Text variant="h6">h6</Text></Grid>
    </Grid>
    <Grid gap={2} items="baseline">
      <Grid><Text variant="subtitle">Subtitle</Text></Grid>
      <Grid><Text variant="body">Body</Text></Grid>
      <Grid><Text variant="caption">Caption</Text></Grid>
      <Grid><Text variant="overline">Overline</Text></Grid>
    </Grid>
  </Grid>
)

export const Align = () => (
  <Grid gap={4} direction="column">
    <Grid><Text align="left" className="w-full">Left</Text></Grid>
    <Grid><Text align="center" className="w-full">Center</Text></Grid>
    <Grid><Text align="right" className="w-full">Right</Text></Grid>
    <Grid><Text align="justify" className="w-full">Justify</Text></Grid>
  </Grid>
)

export const Weight = () => (
  <Grid gap={4}>
    <Grid><Text weight="regular">Regular</Text></Grid>
    <Grid><Text weight="bold">Bold</Text></Grid>
  </Grid>
)

export const Transform = () => (
  <Grid gap={4}>
    <Grid><Text transform="none">None</Text></Grid>
    <Grid><Text transform="capitalize">Capitalize</Text></Grid>
    <Grid><Text transform="uppercase">Uppercase</Text></Grid>
    <Grid><Text transform="lowercase">Lowercase</Text></Grid>
    <Grid><Text transform="initial">Initial</Text></Grid>
    <Grid><Text transform="inherit">Inherit</Text></Grid>
  </Grid>
)

export const Italic = () => (
  <Text italic>Italic</Text>
)

export const Underline = () => (
  <Text underline>Underline</Text>
)

export const StrikeThrough = () => (
  <Text strikeThrough>StrikeThrough</Text>
)

export const Code = () => (
  <Text code>Code</Text>
)

export const Color = () => (
  <Grid gap={4}>
    <Grid gap={2}>
      <Grid><Text color="default">Default</Text></Grid>
      <Grid><Text color="alt">Alt</Text></Grid>
      <Grid><Text color="disabled">Disabled</Text></Grid>
    </Grid>
    <Grid gap={2}>
      <Grid className="fill-contrast"><Text color="contrast">Contrast</Text></Grid>
      <Grid className="fill-contrast"><Text color="contrastAlt">Contrast alt</Text></Grid>
      <Grid className="fill-contrast"><Text color="contrastDisabled">Contrast disabled</Text></Grid>
    </Grid>
    <Grid gap={2}>
      <Grid><Text color="primary">Primary</Text></Grid>
      <Grid><Text color="secondary">Secondary</Text></Grid>
    </Grid>
    <Grid gap={2}>
      <Grid><Text color="success">Success</Text></Grid>
      <Grid><Text color="info">Info</Text></Grid>
      <Grid><Text color="warning">Warning</Text></Grid>
      <Grid><Text color="error">Error</Text></Grid>
    </Grid>
  </Grid>
)
