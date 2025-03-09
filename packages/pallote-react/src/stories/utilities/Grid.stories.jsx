import React from 'react'

import { Grid } from '../../utilities/Grid'
import { Text } from '../../utilities/Text'
import { Snippet } from '../../components/Snippet'

import { GridExample } from '../components/GridExample'

export default {
  title: 'Utilities/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Container element to arrange items on a page and create a responsive layout.'
      }
    }
  },
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
  gap: 2,
  children: (
    <>
      <Grid item><GridExample fill="grey5" content="1" /></Grid>
      <Grid item><GridExample fill="grey10" content="2" /></Grid>
      <Grid item><GridExample fill="grey20" content="3" /></Grid>
    </>
  )
}

export const Wrap = () => (
  <Grid gap={2} wrap>{exampleSnippet}</Grid>
)

Wrap.parameters = {
  docs: {
    description: {
      story: 'Make all child elements automatically the same width.'
    }
  }
}

export const Direction = () => (
  <Grid gap={4}>
    <Grid item colsm={3} gap={2} direction="column">
      <Grid item><Snippet content="direction='column'" dense /></Grid>
      <Grid item gap={2} direction="column">{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={3} gap={2} direction="column">
      <Grid item><Snippet content="direction='columnReverse'" dense /></Grid>
      <Grid item gap={2} direction="columnReverse">{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={3} gap={2} direction="column">
      <Grid item><Snippet content="direction='row'" dense /></Grid>
      <Grid item gap={2} direction="row">{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={3} gap={2} direction="column">
      <Grid item><Snippet content="direction='rowReverse'" dense /></Grid>
      <Grid item gap={2} direction="rowReverse">{exampleSnippet}</Grid>
    </Grid>
  </Grid>
)

export const Justify = () => (
  <Grid gap={4}>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="justify='center'" dense /></Grid>
      <Grid item gap={2} justify="center">{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="justify='end'" dense /></Grid>
      <Grid item gap={2} justify="end">{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="justify='start'" dense /></Grid>
      <Grid item gap={2} justify="start">{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="justify='spaceAround'" dense /></Grid>
      <Grid item gap={2} justify="spaceAround">{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="justify='spaceBetween'" dense /></Grid>
      <Grid item gap={2} justify="spaceBetween">{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="justify='spaceEvenly'" dense /></Grid>
      <Grid item gap={2} justify="spaceEvenly">{exampleSnippet}</Grid>
    </Grid>
  </Grid>
)

export const Items = () => (
  <Grid gap={4}>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="items='stretch'" dense /></Grid>
      <Grid item gap={2} items="stretch">{exampleText}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="items='center'" dense /></Grid>
      <Grid item gap={2} items="center">{exampleText}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="items='end'" dense /></Grid>
      <Grid item gap={2} items="end">{exampleText}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="items='start'" dense /></Grid>
      <Grid item gap={2} items="start">{exampleText}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="items='baseline'" dense /></Grid>
      <Grid item gap={2} items="baseline">{exampleText}</Grid>
    </Grid>
  </Grid>
)

export const Self = () => (
  <Grid gap={4}>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="self='stretch'" dense /></Grid>
      <Grid item self="stretch">
        <GridExample content="Stretch" />
      </Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="self='center'" dense /></Grid>
      <Grid item self="center">
        <GridExample content="Center" />
      </Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="self='end'" dense /></Grid>
      <Grid item self="end">
        <GridExample content="End" />
      </Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="self='start'" dense /></Grid>
      <Grid item self="start">
        <GridExample content="Start" />
      </Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="self='baseline'" dense /></Grid>
      <Grid item self="baseline">
        <GridExample content="Baseline" />
      </Grid>
    </Grid>
  </Grid>
)

export const Gap = () => (
  <Grid gap={4}>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={1}" dense /></Grid>
      <Grid item gap={1}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={2}" dense /></Grid>
      <Grid item gap={2}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={3}" dense /></Grid>
      <Grid item gap={3}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={4}" dense /></Grid>
      <Grid item gap={4}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={5}" dense /></Grid>
      <Grid item gap={5}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={6}" dense /></Grid>
      <Grid item gap={6}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={7}" dense /></Grid>
      <Grid item gap={7}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={8}" dense /></Grid>
      <Grid item gap={8}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={9}" dense /></Grid>
      <Grid item gap={9}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={10}" dense /></Grid>
      <Grid item gap={10}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={11}" dense /></Grid>
      <Grid item gap={11}>{exampleSnippet}</Grid>
    </Grid>
    <Grid item colsm={4} gap={2} direction="column">
      <Grid item><Snippet content="gap={12}" dense /></Grid>
      <Grid item gap={12}>{exampleSnippet}</Grid>
    </Grid>
  </Grid>
)

export const Col = () => (
  <Grid gap={2}>
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

export const Colxs = () => (
  <Grid gap={2}>
    <Grid item colxs={1}><GridExample content="1" /></Grid>
    <Grid item colxs={2}><GridExample content="2" /></Grid>
    <Grid item colxs={3}><GridExample content="3" /></Grid>
    <Grid item colxs={4}><GridExample content="4" /></Grid>
    <Grid item colxs={5}><GridExample content="5" /></Grid>
    <Grid item colxs={6}><GridExample content="6" /></Grid>
    <Grid item colxs={7}><GridExample content="7" /></Grid>
    <Grid item colxs={8}><GridExample content="8" /></Grid>
    <Grid item colxs={9}><GridExample content="9" /></Grid>
    <Grid item colxs={10}><GridExample content="10" /></Grid>
    <Grid item colxs={11}><GridExample content="11" /></Grid>
    <Grid item colxs={12}><GridExample content="12" /></Grid>
  </Grid>
)

export const Colsm = () => (
  <Grid gap={2}>
    <Grid item colsm={1}><GridExample content="1" /></Grid>
    <Grid item colsm={2}><GridExample content="2" /></Grid>
    <Grid item colsm={3}><GridExample content="3" /></Grid>
    <Grid item colsm={4}><GridExample content="4" /></Grid>
    <Grid item colsm={5}><GridExample content="5" /></Grid>
    <Grid item colsm={6}><GridExample content="6" /></Grid>
    <Grid item colsm={7}><GridExample content="7" /></Grid>
    <Grid item colsm={8}><GridExample content="8" /></Grid>
    <Grid item colsm={9}><GridExample content="9" /></Grid>
    <Grid item colsm={10}><GridExample content="10" /></Grid>
    <Grid item colsm={11}><GridExample content="11" /></Grid>
    <Grid item colsm={12}><GridExample content="12" /></Grid>
  </Grid>
)

export const Colmd = () => (
  <Grid gap={2}>
    <Grid item colmd={1}><GridExample content="1" /></Grid>
    <Grid item colmd={2}><GridExample content="2" /></Grid>
    <Grid item colmd={3}><GridExample content="3" /></Grid>
    <Grid item colmd={4}><GridExample content="4" /></Grid>
    <Grid item colmd={5}><GridExample content="5" /></Grid>
    <Grid item colmd={6}><GridExample content="6" /></Grid>
    <Grid item colmd={7}><GridExample content="7" /></Grid>
    <Grid item colmd={8}><GridExample content="8" /></Grid>
    <Grid item colmd={9}><GridExample content="9" /></Grid>
    <Grid item colmd={10}><GridExample content="10" /></Grid>
    <Grid item colmd={11}><GridExample content="11" /></Grid>
    <Grid item colmd={12}><GridExample content="12" /></Grid>
  </Grid>
)

export const Collg = () => (
  <Grid gap={2}>
    <Grid item collg={1}><GridExample content="1" /></Grid>
    <Grid item collg={2}><GridExample content="2" /></Grid>
    <Grid item collg={3}><GridExample content="3" /></Grid>
    <Grid item collg={4}><GridExample content="4" /></Grid>
    <Grid item collg={5}><GridExample content="5" /></Grid>
    <Grid item collg={6}><GridExample content="6" /></Grid>
    <Grid item collg={7}><GridExample content="7" /></Grid>
    <Grid item collg={8}><GridExample content="8" /></Grid>
    <Grid item collg={9}><GridExample content="9" /></Grid>
    <Grid item collg={10}><GridExample content="10" /></Grid>
    <Grid item collg={11}><GridExample content="11" /></Grid>
    <Grid item collg={12}><GridExample content="12" /></Grid>
  </Grid>
)

export const Colxl = () => (
  <Grid gap={2}>
    <Grid item colxl={1}><GridExample content="1" /></Grid>
    <Grid item colxl={2}><GridExample content="2" /></Grid>
    <Grid item colxl={3}><GridExample content="3" /></Grid>
    <Grid item colxl={4}><GridExample content="4" /></Grid>
    <Grid item colxl={5}><GridExample content="5" /></Grid>
    <Grid item colxl={6}><GridExample content="6" /></Grid>
    <Grid item colxl={7}><GridExample content="7" /></Grid>
    <Grid item colxl={8}><GridExample content="8" /></Grid>
    <Grid item colxl={9}><GridExample content="9" /></Grid>
    <Grid item colxl={10}><GridExample content="10" /></Grid>
    <Grid item colxl={11}><GridExample content="11" /></Grid>
    <Grid item colxl={12}><GridExample content="12" /></Grid>
  </Grid>
)
