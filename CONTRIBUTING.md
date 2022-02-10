# Contributing to Ninja Kit

Check out existing [Discussions](discussions) and [Issues](issues). Otherwise, create a new discussion or issue to kick off your idea or problem you'd like to address before opening a pull request.

## Setup

```zsh
git clone git@github.com:ninja/ninjakit.git
cd ninjakit
npm install
```

## Local Development

```zsh
npm start
```

## Local Production

```zsh
npx vite build
npx vite preview
```

## Test

```zsh
npm test
```

Ninja Kit versions are automatically derrived, therefore commit messages must be [Conventional Commits](https://www.conventionalcommits.org).

When you commit changes, all staged files are automatically formatted by ESLint/Prettier via a git pre-commit hook.

Any pull request opened to the `master` branch triggers a GitHub action to ensure all files are correctly formatted, type-checking does not fail, the library and website build without error and all tests pass.

You can verify all the above locally:

```zsh
npm run check
npm run build
npx vite build
npm test
```
