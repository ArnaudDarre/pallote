# Contributing to Pallote

Any feedback and help is very welcomed. If you would like to contribute to the project, please contact me.

The monorepo has two packages and one app:

- `pallote-css`, the CSS library
- `pallote-react`, the React component library, which uses Pallote CSS to style React UI components. It has a specific documentation built with Storybook.
- `pallote-docs`, the documentation for both packages, built with Docusaurus.

## Start the project

### Install dependencies

If you are running the repo for the first time, install the dependencies using pnpm

```shell
pnpm install
```

### Run the packages locally

To run the packages locally, run the following commands from the root of the repo. 

**Watch changes to the css files in `pallote-css`**

```shell
pnpm watch-css
```

**Start `pallote-react` Storybook**

```shell
pnpm start-react
```

> When making changes to the components in `pallote-react`, you need to run `pnpm build-react` for the changes to be reflected in `pallote-docs`.

**Start `pallote-docs` app**

```shell
pnpm start-docs
```

## Commit and pull requests guidelines

### Commit guidelines

Any commit should follow the same structure:

```shell
(app) Decription of changes commited
```

The item in brackets defines for which app the changes were made. Available options are:

- `root`: changes made to files at the root of the repo
- `css`: changes made only to files in the `pallote-css` packages
- `react`: changes made only to files in the `pallote-react` packages (either the React components or the Storybook documentation)
- `docs`: changes made to the documentation in `pallote-docs`
- `packages`: changes made only to the packages and not to the documentation
- `all`: changes made that affect all three folders

## Deployment

Both the Sotrybook of `pallote-react` and `pallote-docs` can be deployed. Both deployment are triggered when changes are pushed to the `main` branch.

| Package | URL |
| - | - |
| `pallote-react` | [react.pallote.com](https://react.pallote.com/)
| `pallote-docs` | [pallote.com](https://pallote.com/)

