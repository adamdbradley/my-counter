# Stencil Filesize Measurements

## Bundle size of 1 component without library bundled

This is the cost to expect for every new my-counter-like component added to the same page. The library is not included.

| Filename            | Size |
|---------------------|------|
| my-counter.entry.js | 348b |


## Bundle size of 1 component with library bundled

If you only deliver a single Web Component you have the full cost of the library for a single component. This is the total cost of a single component with the library included.

| Description | Filename            | Size  |
|-------------|---------------------|-------|
| Library     | core-99f62c26.js    | 4043b |
| Component   | my-counter.entry.js | 348b  |
| __Total__   |                     | __4391b__ |


## Estimated Bundle size of the library at runtime

* Identical to "Bundle size of 1 component with library bundled"


## Estimated Bundle size of 30 components using the same library

This is an estimated size of a bundle of 30 my-counter-like components using the same library. All components will share the library code so the estimated size is calculated with: 1 bundle-with-dependencies + 29x bundles-without-dependencies.

| Description   | Size   |
|---------------|--------|
| Library       | 4043b  |
| 30 Components | 10440b |
| __Total__     | __14483b__ |

-----------

## Local Dev

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```
