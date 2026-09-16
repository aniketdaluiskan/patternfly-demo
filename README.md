# PatternFly Component Demo

A small, self-contained React + Vite application that exercises a wide
variety of [PatternFly](https://www.patternfly.org/) React components on a
single page, with clean, semantic ARIA markup. It is intended as a stable UI
target for testing automated UI resolver/tracker tooling — every control is
a real PatternFly component (no placeholder/gibberish content).

## Components included

Masthead + Page + Nav, Button, TextInput, FormSelect, Checkbox, Radio,
Switch, Slider, Tabs, Modal, Dropdown/Menu, ExpandableSection, a data table,
and Alerts (multiple variants, dismissible and inline).

## Local development

```bash
npm install
npm run dev
```

This starts the Vite dev server (default: http://localhost:5173) with hot
module reloading.

To produce a production build:

```bash
npm run build
```

The build output is written to `dist/`. `vite.config.js` sets `base: './'`
so the build works when hosted from a GitHub Pages project subpath
(`https://<user>.github.io/<repo>/`).

To preview the production build locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

This repository includes `.github/workflows/deploy.yml`, which builds the
app and deploys `dist/` via `actions/upload-pages-artifact` and
`actions/deploy-pages` on every push to `main`.

For the workflow to publish successfully, set the repository's **Pages
source to "GitHub Actions"**: repository Settings → Pages → Build and
deployment → Source → GitHub Actions.
