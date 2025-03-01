import React from 'react'

import { Text } from '../utilities/Text'
import { Grid } from '../components/Grid'
import { Snippet } from '../components/Snippet'

import { GridExample } from './components/GridExample'

export default {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    item: { control: false },
    xs: { control: false },
    sm: { control: false },
    md: { control: false },
    lg: { control: false },
    xl: { control: false },
    className: { control: false },
    children: { control: false }
  }
}

const exampleSnippet = (
  <>
    <Grid item><GridExample fill="grey5" content="1" /></Grid>
    <Grid item><GridExample fill="grey10" content="2" /></Grid>
    <Grid item><GridExample fill="grey20" content="3" /></Grid>
  </>
)

const exampleText = (
  <>
    <Grid item><Text variant="h6" code>1</Text></Grid>
    <Grid item><Text variant="h2" code>2</Text></Grid>
    <Grid item><Text variant="overline" code>3</Text></Grid>
  </>
)

const Template = (args) => <Grid {...args} />

export const Playground = Template.bind({})

Playground.args = {
  spacing: 2,
  children: (
    <>
      <Grid item><GridExample fill="grey5" content="1" /></Grid>
      <Grid item><GridExample fill="grey10" content="2" /></Grid>
      <Grid item><GridExample fill="grey20" content="3" /></Grid>
    </>
  )
}

export const Wrap = () => (
  <Grid spacing={2} wrap>{exampleSnippet}</Grid>
)

Wrap.parameters = {
  docs: {
    description: {
      story: 'Make all child elements automatically the same width.'
    }
  }
}

export const Direction = () => (
  <Grid spacing={4}>
    <Grid item sm={3} spacing={2} direction="column">
      <Grid item><Snippet content="direction='column'" dense /></Grid>
      <Grid item spacing={2} direction="column">{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={3} spacing={2} direction="column">
      <Grid item><Snippet content="direction='columnReverse'" dense /></Grid>
      <Grid item spacing={2} direction="columnReverse">{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={3} spacing={2} direction="column">
      <Grid item><Snippet content="direction='row'" dense /></Grid>
      <Grid item spacing={2} direction="row">{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={3} spacing={2} direction="column">
      <Grid item><Snippet content="direction='rowReverse'" dense /></Grid>
      <Grid item spacing={2} direction="rowReverse">{exampleSnippet}</Grid>
    </Grid>
  </Grid>
)

export const JustifyContent = () => (
  <Grid spacing={4}>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='center'" dense /></Grid>
      <Grid item spacing={2} justifyContent="center">{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='end'" dense /></Grid>
      <Grid item spacing={2} justifyContent="end">{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='start'" dense /></Grid>
      <Grid item spacing={2} justifyContent="start">{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='spaceAround'" dense /></Grid>
      <Grid item spacing={2} justifyContent="spaceAround">{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='spaceBetween'" dense /></Grid>
      <Grid item spacing={2} justifyContent="spaceBetween">{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="justifyContent='spaceEvenly'" dense /></Grid>
      <Grid item spacing={2} justifyContent="spaceEvenly">{exampleSnippet}</Grid>
    </Grid>
  </Grid>
)

export const AlignItems = () => (
  <Grid spacing={4}>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='stretch'" dense /></Grid>
      <Grid item spacing={2} alignItems="stretch">{exampleText}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='center'" dense /></Grid>
      <Grid item spacing={2} alignItems="center">{exampleText}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='end'" dense /></Grid>
      <Grid item spacing={2} alignItems="end">{exampleText}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='start'" dense /></Grid>
      <Grid item spacing={2} alignItems="start">{exampleText}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignItems='baseline'" dense /></Grid>
      <Grid item spacing={2} alignItems="baseline">{exampleText}</Grid>
    </Grid>
  </Grid>
)

export const AlignSelf = () => (
  <Grid spacing={4}>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='stretch'" dense /></Grid>
      <Grid item alignSelf="stretch">
        <GridExample content="Stretch" />
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='center'" dense /></Grid>
      <Grid item alignSelf="center">
        <GridExample content="Center" />
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='end'" dense /></Grid>
      <Grid item alignSelf="end">
        <GridExample content="End" />
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='start'" dense /></Grid>
      <Grid item alignSelf="start">
        <GridExample content="Start" />
      </Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="alignSelf='baseline'" dense /></Grid>
      <Grid item alignSelf="baseline">
        <GridExample content="Baseline" />
      </Grid>
    </Grid>
  </Grid>
)

export const Spacing = () => (
  <Grid spacing={4}>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={1}" dense /></Grid>
      <Grid item spacing={1}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={2}" dense /></Grid>
      <Grid item spacing={2}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={3}" dense /></Grid>
      <Grid item spacing={3}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={4}" dense /></Grid>
      <Grid item spacing={4}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={5}" dense /></Grid>
      <Grid item spacing={5}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={6}" dense /></Grid>
      <Grid item spacing={6}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={7}" dense /></Grid>
      <Grid item spacing={7}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={8}" dense /></Grid>
      <Grid item spacing={8}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={9}" dense /></Grid>
      <Grid item spacing={9}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={10}" dense /></Grid>
      <Grid item spacing={10}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={11}" dense /></Grid>
      <Grid item spacing={11}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item sm={4} spacing={2} direction="column">
      <Grid item><Snippet content="spacing={12}" dense /></Grid>
      <Grid item spacing={12}>{exampleSnippet}</Grid>
    </Grid>
  </Grid>
)

export const Col = () => (
  <Grid spacing={2}>
    <Grid item col={1}><GridExample content="1" /></Grid>
    <Grid item col={2}><GridExample content="2" /></Grid>
    <Grid item col={3}><GridExample content="3" /></Grid>
    <Grid item col={4}><GridExample content="4" /></Grid>
    <Grid item col={5}><GridExample content="5" /></Grid>
    <Grid item col={6}><GridExample content="6" /></Grid>
    <Grid item col={7}><GridExample content="7" /></Grid>
    <Grid item col={8}><GridExample content="8" /></Grid>
    <Grid item col={9}><GridExample content="9" /></Grid>
    <Grid item col={10}><GridExample content="10" /></Grid>
    <Grid item col={11}><GridExample content="11" /></Grid>
    <Grid item col={12}><GridExample content="12" /></Grid>
  </Grid>
)

Col.parameters = {
  docs: {
    description: {
      story: 'Define the default width, based on a 12 column grid.'
    }
  }
}

export const XS = () => (
  <Grid spacing={2}>
    <Grid item xs={1}><GridExample content="1" /></Grid>
    <Grid item xs={2}><GridExample content="2" /></Grid>
    <Grid item xs={3}><GridExample content="3" /></Grid>
    <Grid item xs={4}><GridExample content="4" /></Grid>
    <Grid item xs={5}><GridExample content="5" /></Grid>
    <Grid item xs={6}><GridExample content="6" /></Grid>
    <Grid item xs={7}><GridExample content="7" /></Grid>
    <Grid item xs={8}><GridExample content="8" /></Grid>
    <Grid item xs={9}><GridExample content="9" /></Grid>
    <Grid item xs={10}><GridExample content="10" /></Grid>
    <Grid item xs={11}><GridExample content="11" /></Grid>
    <Grid item xs={12}><GridExample content="12" /></Grid>
  </Grid>
)

export const SM = () => (
  <Grid spacing={2}>
    <Grid item sm={1}><GridExample content="1" /></Grid>
    <Grid item sm={2}><GridExample content="2" /></Grid>
    <Grid item sm={3}><GridExample content="3" /></Grid>
    <Grid item sm={4}><GridExample content="4" /></Grid>
    <Grid item sm={5}><GridExample content="5" /></Grid>
    <Grid item sm={6}><GridExample content="6" /></Grid>
    <Grid item sm={7}><GridExample content="7" /></Grid>
    <Grid item sm={8}><GridExample content="8" /></Grid>
    <Grid item sm={9}><GridExample content="9" /></Grid>
    <Grid item sm={10}><GridExample content="10" /></Grid>
    <Grid item sm={11}><GridExample content="11" /></Grid>
    <Grid item sm={12}><GridExample content="12" /></Grid>
  </Grid>
)

export const MD = () => (
  <Grid spacing={2}>
    <Grid item md={1}><GridExample content="1" /></Grid>
    <Grid item md={2}><GridExample content="2" /></Grid>
    <Grid item md={3}><GridExample content="3" /></Grid>
    <Grid item md={4}><GridExample content="4" /></Grid>
    <Grid item md={5}><GridExample content="5" /></Grid>
    <Grid item md={6}><GridExample content="6" /></Grid>
    <Grid item md={7}><GridExample content="7" /></Grid>
    <Grid item md={8}><GridExample content="8" /></Grid>
    <Grid item md={9}><GridExample content="9" /></Grid>
    <Grid item md={10}><GridExample content="10" /></Grid>
    <Grid item md={11}><GridExample content="11" /></Grid>
    <Grid item md={12}><GridExample content="12" /></Grid>
  </Grid>
)

export const LG = () => (
  <Grid spacing={2}>
    <Grid item lg={1}><GridExample content="1" /></Grid>
    <Grid item lg={2}><GridExample content="2" /></Grid>
    <Grid item lg={3}><GridExample content="3" /></Grid>
    <Grid item lg={4}><GridExample content="4" /></Grid>
    <Grid item lg={5}><GridExample content="5" /></Grid>
    <Grid item lg={6}><GridExample content="6" /></Grid>
    <Grid item lg={7}><GridExample content="7" /></Grid>
    <Grid item lg={8}><GridExample content="8" /></Grid>
    <Grid item lg={9}><GridExample content="9" /></Grid>
    <Grid item lg={10}><GridExample content="10" /></Grid>
    <Grid item lg={11}><GridExample content="11" /></Grid>
    <Grid item lg={12}><GridExample content="12" /></Grid>
  </Grid>
)

export const XL = () => (
  <Grid spacing={2}>
    <Grid item xl={1}><GridExample content="1" /></Grid>
    <Grid item xl={2}><GridExample content="2" /></Grid>
    <Grid item xl={3}><GridExample content="3" /></Grid>
    <Grid item xl={4}><GridExample content="4" /></Grid>
    <Grid item xl={5}><GridExample content="5" /></Grid>
    <Grid item xl={6}><GridExample content="6" /></Grid>
    <Grid item xl={7}><GridExample content="7" /></Grid>
    <Grid item xl={8}><GridExample content="8" /></Grid>
    <Grid item xl={9}><GridExample content="9" /></Grid>
    <Grid item xl={10}><GridExample content="10" /></Grid>
    <Grid item xl={11}><GridExample content="11" /></Grid>
    <Grid item xl={12}><GridExample content="12" /></Grid>
  </Grid>
)
