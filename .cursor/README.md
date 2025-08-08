# Cursor Project Rules

This directory contains the configuration for our project's code quality and consistency checks.

## Structure

```
.cursor/
├── config.json           # Main configuration file
├── rules/
│   ├── code-style.mdc    # Code style rules
│   └── commit-convention.mdc  # Git commit message rules
└── README.md            # This file
```

## Pre-commit Checks

The following checks run automatically before each commit:

1. **Commit Message Format**
   - Enforces conventional commit message format
   - Example: `feat(auth): add login functionality`

2. **Code Style**
   - Checks naming conventions
   - Validates code organization
   - Ensures consistent formatting

## How it Works

1. When you stage files for commit, Cursor automatically runs the checks
2. If any violations are found, you'll see immediate feedback
3. Fix the violations before proceeding with the commit

## Common Violations and Fixes

### Commit Messages

❌ Bad: `fixed bug`
✅ Good: `fix(api): resolve timeout issue in auth endpoint`

### Code Style

❌ Bad: `function Calculate_total()`
✅ Good: `function calculateTotal()`

## Bypassing Checks (Not Recommended)

Checks cannot be bypassed as configured in `config.json`:

```json
"settings": {
  "enforcePreCommit": true,
  "allowSkip": false
}
```

## Adding New Rules

1. Create a new `.mdc` file in the `rules/` directory
2. Add the rule to `config.json`
3. Update this README with new rule details
