# Repository Guidelines

## Project Structure & Module Organization

This repository is a small TypeScript package for validating Lao phone numbers. Public exports live in `src/index.ts`, while validation logic is implemented in `src/functions.ts`. Jest tests are colocated under `src/_test_/` and use the `*.test.ts` suffix. Build output is generated in `dist/`; treat it as derived content and make changes in `src/` instead. Root configuration is kept in `package.json`, `tsconfig.json`, and `jest.config.js`.

## Build, Test, and Development Commands

- `npm install` installs the development dependencies.
- `npm test` runs the Jest suite through `ts-jest` in a Node environment.
- `npm test -- --coverage` produces a local coverage report when checking validation branches.
- `npm run build` bundles CommonJS, ESM, and declaration outputs with `tsup`.
- `npm run release` updates versions and tags through `commit-and-tag-version`; run it only as part of an approved release workflow.

Before submitting changes, run `npm test` and `npm run build`.

## Coding Style & Naming Conventions

Use strict TypeScript and preserve the compiler settings in `tsconfig.json`. Follow the existing two-space indentation in source files. Prefer small, typed functions, `camelCase` for variables and functions, and descriptive names such as `prefixFor8digit`. Keep the package API as named exports from `src/index.ts`. Match the surrounding quote style when editing an existing file. No formatter or linter is configured, so keep diffs focused and consistent.

## Testing Guidelines

Use Jest `describe`/`it` blocks and place tests in `src/_test_/`. Name new files `<feature>.test.ts`. Cover valid and invalid inputs, including country-code variants, local prefixes, incorrect lengths, and nonnumeric values. There is no enforced coverage threshold; prioritize branch and boundary coverage for validation logic.

## Commit & Pull Request Guidelines

Recent history uses short, lowercase subjects such as `fix readme`, with Conventional Commit syntax for release automation, for example `chore(release): 0.1.1`. Keep commits focused and use an imperative subject; prefer `fix:`, `feat:`, `test:`, or `docs:` when appropriate.

Pull requests should explain the behavior change, list verification commands, and link related issues. Include before/after input examples for validation changes. Screenshots are unnecessary unless documentation rendering changes.
