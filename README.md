# Word Cloud

A simple project that displays a word cloud using [topics data](https://gist.githubusercontent.com/grahamscott/65b43572ad18c5fbdd87/raw/d755523d6a281695e3b882db8c115ff37fc070fa/topics.json).
The production version is available via GitHub Pages:

[Word Cloud On GitHub Pages](https://ajanes93.github.io/wordcloud/)

## Browser Support

The following [Browserlist compatible query](https://github.com/browserslist/browserslist) is used
with the `@vitejs/plugin-legacy` to provide browser support for the following:

`'defaults', 'Chrome >= 62', 'Safari >= 11', 'Edge >= 40', 'Firefox >= 57'`

## Built with:

-   Vue 3
-   Pinia
-   Axios
-   Vite
-   Vitest
-   Typescript
-   Tailwind CSS
-   Eslint & Prettier

## CI/CD tooling

-   husky
-   lint-staged
-   GitHub Actions

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Preview the built files (should be run after the build command)

```
npm run preview
```

## Linting and formatting

### Lints and fixes files

```
npm run lint
```

### Formats code using Prettier

```
npm run format
```

## Testing

### Run tests in watch mode

```
npm run test:watch
```

### Run tests and generate junit and coverage reports

```
npm run test
```

## Recommended IDE Setup

-   [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
