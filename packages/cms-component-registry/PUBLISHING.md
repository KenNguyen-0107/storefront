# Publishing Guide for @niteco/cms-component-registry

This document provides instructions for publishing the package to npm.

## Prerequisites

1. You need an npm account
2. You need to be added as a collaborator to the @niteco organization
3. You need to be logged in to npm (`npm login`)

## Files We've Set Up

The package includes the following files for npm publishing:

- **package.json**: Main package configuration
- **.npmignore**: Controls which files are excluded from the npm package
- **jest.config.js**: Configuration for Jest testing
- **jest.setup.js**: Setup file for Jest
- **.eslintrc.js**: ESLint configuration
- **scripts/publish.js**: Helper script for publishing

## Project Structure

The package follows a modular structure:

```
/
├── index.ts                 # Main entry point
├── src/
│   ├── registry.ts          # Registry singleton
│   ├── CmsComponentRegistry.ts # Registry implementation
│   ├── interfaces.ts        # Interface definitions
│   ├── types.ts             # Type definitions
│   ├── factoryRegistry.ts   # Factory registry implementation
│   ├── default.tsx          # Default component factory
│   ├── cmsHelper.ts         # Helper functions
│   └── example.ts           # Usage examples
├── __tests__/               # Unit tests
└── scripts/                 # Publishing scripts
```

## Unit Tests

We've added unit tests for the core functionality including:

1. The registry singleton implementation
2. The CmsComponentRegistry class
3. Component registration and resolution with fallback mechanisms

Run tests with:

```bash
npm test
```

Get test coverage information with:

```bash
npm run test:coverage
```

## Publishing Process

### Automated Publishing (Recommended)

We've created a convenience script to handle the publishing process:

```bash
npm run publish:npm
```

This script will:

1. Run tests to ensure everything is working
2. Build the package using TypeScript
3. Prompt for version bump type (patch, minor, major)
4. Update package.json with the new version
5. Create a git tag for the release
6. Publish to npm
7. Optionally push tags to remote repository

### Manual Publishing

If you prefer to do it manually:

1. Make sure all changes are committed
2. Run tests: `npm test`
3. Build the package: `npm run build`
4. Update the version: `npm version patch|minor|major`
5. Publish: `npm publish`
6. Push changes and tags: `git push && git push --tags`

## Versioning Guidelines

Follow [semantic versioning](https://semver.org/) guidelines:

- **PATCH (1.0.0 -> 1.0.1)**: Backwards-compatible bug fixes
- **MINOR (1.0.0 -> 1.1.0)**: New functionality added in a backwards-compatible manner
- **MAJOR (1.0.0 -> 2.0.0)**: Incompatible API changes

## Pre-publish Checklist

Before publishing, make sure to:

- [ ] Update the README with any new features or changes
- [ ] Verify all tests pass with `npm test`
- [ ] Ensure code is properly linted with `npm run lint`
- [ ] Check that the build works with `npm run build`
- [ ] Update any relevant examples or documentation

## Continuous Integration Considerations

For a more robust workflow, consider setting up CI/CD with GitHub Actions to:

- Run tests on every pull request
- Publish automatically on merges to main/master branch
- Generate and publish documentation

## Troubleshooting

If you encounter issues during publishing:

1. Ensure you're logged in to npm with `npm whoami`
2. Check that you have the correct permissions for the @niteco organization
3. Try clearing npm cache with `npm cache clean --force`
4. Ensure the package version hasn't been published already
