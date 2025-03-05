import { Grid, Link } from 'pallote-react'

export const DocLinks = ({ figma, storybook }) => {
  return (
    <Grid gap={4} wrap className="docs_links">
      <Link className="text-bold" isExternal href={figma}>Figma component</Link>
      <Link className="text-bold" isExternal href={storybook}>Storybook documentation</Link>
    </Grid>
  )
}
