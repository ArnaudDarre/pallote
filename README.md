# Pallote

Pallote is a comprehensive design system and component library.

It has two packages, **Pallote CSS**, a CSS library, and **Pallote React**, a React component library, which uses Pallote CSS to style React UI components.

## Project Structure

```
pallote/
├── packages/
│   ├── pallote-css/      # CSS component library (npm package)
│   └── pallote-react/    # React component library (npm package)
└── apps/
    └── pallote-docs/     # Documentation site (Docusaurus)
```

## Prerequisites

- Node.js >= 18
- pnpm (managed via corepack)

## Getting Started

1. Clone and install

```bash
git clone <repo-url>
cd pallote
pnpm install
```

2. Build packages (required before running any dev server)

```bash
pnpm build-packages
```

## Development

### Storybook (React components)

```bash
pnpm build-css        # Rebuild CSS if you made changes
pnpm start-react      # Start Storybook at http://localhost:6006
```

### Documentation site

```bash
pnpm build-packages   # Ensure packages are built (run after each change to the packages)
pnpm start-docs       # Start Docusaurus at http://localhost:3000
```

### CSS development

```bash
pnpm watch-css        # Watch mode for CSS changes
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm build-css` | Build pallote-css |
| `pnpm build-react` | Build pallote-react |
| `pnpm build-packages` | Build both packages |
| `pnpm start-react` | Start Storybook dev server |
| `pnpm start-docs` | Start Docusaurus dev server |
| `pnpm build-docs` | Build documentation site (includes package builds) |
| `pnpm build-storybook` | Build static Storybook |
| `pnpm watch-css` | Watch and rebuild CSS on changes |

## Publishing

```bash
pnpm publish-css      # Publish pallote-css to npm
pnpm publish-react    # Publish pallote-react to npm
```

## Notes

- **Build order matters**: `pallote-react` depends on `pallote-css`, and `pallote-docs` depends on both. Always run `pnpm build-packages` after a fresh clone.
- **Workspace dependencies**: Packages reference each other via `workspace:^` in package.json.
