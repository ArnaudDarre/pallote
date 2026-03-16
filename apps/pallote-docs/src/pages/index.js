import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Button, Buttons, Card, CardActions, CardContent, CardHeader, Grid, Link as PalloteLink, Section, SectionContent, SectionHeader } from 'pallote-react';

import InstallReact from '../components/index/InstallReact.mdx'
import InstallCSS from '../components/index/InstallCSS.mdx'
import { Cover } from '../components/index/Cover';

const InstallList = [
  {
    title: 'Pallote CSS',
    subtitle: "Stylish CSS library for all your web projects.",
    markdownComponent: <InstallCSS />,
    linkURL: "/docs/getting-started/installation?package=css"
  },
  {
    title: 'Pallote React',
    subtitle: "Leverage the power of the CSS library included in simple, easy to use React components.",
    markdownComponent: <InstallReact />,
    linkURL: "/docs/getting-started/installation?package=react"
  }
]

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <main>
        <Section landing>
          <SectionHeader
            title="Introducing Pallote"
            subtitle={
              <>
                Pallote is a handcrafted, simple and stylish {' '}
                <PalloteLink component={Link} className="dis-inlineBlock text-bold" to="/docs/getting-started/installation?package=react">React</PalloteLink>
                {' '} and {' '}
                <PalloteLink component={Link} className="dis-inlineBlock text-bold" to="/docs/getting-started/installation?package=css">CSS</PalloteLink>
                {' '} component library, built with passion and care
              </>
            }
            actions={
              <Button
                component={Link}
                size="lg"
                to="/docs/getting-started/installation"
              >
                Get started
              </Button>
            }
          />
          <Cover />
        </Section>
        <Section color='paper' id="section-install">
          <SectionHeader
            title="Install the packages"
            subtitle="Get started by installing the packages in your project."
          />
          <SectionContent>
            <Grid gap={3} items="stretch">
              {InstallList.map((props, idx) => (
                <Grid colsm={4} key={idx} item>
                  <Card className="h-full">
                    <CardHeader
                      title={props.title}
                    />
                    <CardContent className="mt-auto gap-4">
                      {props.subtitle}
                      {props.markdownComponent}
                    </CardContent>
                    <CardActions className="mt-0">
                      <Button fullWidth component={Link} to={props.linkURL}>Read the full doc</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </SectionContent>
        </Section>
        <Section color="primary">
          <SectionHeader
            title="Contribute and support"
            subtitle="Pallote is a passion project born of a love for coding and design. All contributions and feedback are welcome to help the project grow."
            actions={
              <Buttons>
                <Button color="secondary" component="a" external href="https://github.com/sponsors/ArnaudDarre">
                  Sponsor on GitHub
                </Button>
                {/* <Button component={Link} to="/contact">
                  Give feedback
                </Button> */}
              </Buttons>
            }
          />
        </Section>
      </main>
    </Layout>
  );
}
