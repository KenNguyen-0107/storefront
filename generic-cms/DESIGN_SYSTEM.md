# Design System Documentation

## Overview

This design system provides a comprehensive set of CSS variables and Tailwind utilities for consistent styling across the application.

## 🎨 Color System

### Usage Philosophy

- Use **semantic color names** (primary, secondary, success) instead of descriptive ones (blue, green)
- All colors use RGB space-separated values for alpha transparency support
- Dark theme automatically handled via CSS variables

### Color Palette

#### Brand Colors

```css
--color-primary: 40 50 112 /* Main brand blue */ --color-secondary: 226 176 16 /* Brand yellow */ --color-accent: 24 102
  132 /* Accent blue */;
```

#### State Colors

```css
--color-success: 0 173 113 /* Green for success states */ --color-warning: 226 176 16 /* Yellow for warnings */
  --color-error: 255 0 0 /* Red for errors */ --color-info: 24 102 132 /* Blue for information */;
```

#### Surface Colors

```css
--color-background: 255 255 255 /* Main background */ --color-foreground: 0 0 0 /* Main text color */ --color-muted: 140
  139 144 /* Subdued text */ --color-border: 216 216 221 /* Borders and dividers */;
```

### Usage Examples

```tsx
// ✅ Good - Semantic naming
<div className="bg-primary text-primary-foreground">
  <p className="text-muted-foreground">Subdued text</p>
</div>

// ❌ Avoid - Descriptive naming
<div className="bg-blue text-white">
  <p className="text-gray-500">Text</p>
</div>
```

## 📏 Spacing System

Based on a 4px grid system for consistent spacing:

```css
--space-1: 0.25rem /* 4px */ --space-2: 0.5rem /* 8px */ --space-3: 0.75rem /* 12px */ --space-4: 1rem /* 16px */
  --space-5: 1.25rem /* 20px */ --space-6: 1.5rem /* 24px */ --space-8: 2rem /* 32px */ --space-10: 2.5rem /* 40px */
  --space-12: 3rem /* 48px */ --space-16: 4rem /* 64px */ --space-20: 5rem /* 80px */ --space-24: 6rem /* 96px */;
```

### Usage Examples

```tsx
// Consistent spacing
<div className="p-4 mb-6 gap-2">
  <h1 className="mb-8">Title</h1>
  <p className="mb-4">Content</p>
</div>
```

## 🔤 Typography System

### Font Sizes

```css
--text-xs: 0.75rem /* 12px */ --text-sm: 0.875rem /* 14px */ --text-md: 1rem /* 16px - base */ --text-lg: 1.125rem
  /* 18px */ --text-xl: 1.25rem /* 20px */ --text-2xl: 1.5rem /* 24px */ --text-3xl: 2rem /* 32px */ --text-4xl: 3.5rem
  /* 56px */;
```

### Line Heights

```css
--leading-sm: 1.4 /* Tight line height */ --leading-md: 1.6 /* Normal line height */ --leading-lg: 1.8
  /* Loose line height */;
```

### Font Families

```css
--font-sans: ui-sans-serif, system-ui, sans-serif --font-mono: ui-monospace, "SF Mono", Consolas, monospace;
```

### Typography Usage

```tsx
// Consistent typography scale
<h1 className="text-4xl font-bold leading-lg">Main Heading</h1>
<h2 className="text-2xl font-semibold leading-md">Subheading</h2>
<p className="text-md leading-md">Body text</p>
<small className="text-sm text-muted-foreground">Caption</small>
```

## 🌙 Theming System

### Theme Structure

The system supports multiple themes through CSS custom properties:

- **Light Theme** (default): Standard light mode colors
- **Dark Theme**: Inverted colors with proper contrast

### Theme Implementation

```tsx
// Theme provider automatically handles theme switching
<ThemeProvider>
  <YourApp />
</ThemeProvider>;

// Theme switching component
const { theme, setTheme } = useTheme();
setTheme("dark"); // or 'light'
```

### Adding New Themes

1. Define theme-specific colors in `globals.css`:

```css
[data-theme="blue"] {
  --color-primary: /* new primary color */;
  --color-background: /* new background */;
  /* ... other overrides */
}
```

2. Update the theme types:

```tsx
export type Theme = "light" | "dark" | "blue";
```

## ♿ Accessibility Features

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled for users who prefer reduced motion */
}
```

### High Contrast Mode

```css
@media (prefers-contrast: high) {
  /* Enhanced contrast for better accessibility */
}
```

### Focus Management

- All interactive elements have visible focus indicators
- Custom focus styles using `--ring` color
- Focus visible only for keyboard navigation

## 🛠️ Best Practices

### Do's ✅

1. **Use semantic color names**: `bg-primary` instead of `bg-blue`
2. **Follow spacing scale**: Use predefined spacing values
3. **Provide fallbacks**: `var(--color, fallback-value)`
4. **Group related variables**: Organize by category (color, spacing, etc.)
5. **Document color usage**: Comment the purpose of each color
6. **Test themes**: Ensure all themes work properly
7. **Use consistent formats**: RGB space-separated for colors

### Don'ts ❌

1. **Don't use hard-coded colors**: Avoid `#ffffff` or `rgb(255,255,255)`
2. **Don't skip fallbacks**: Always provide fallback values
3. **Don't mix color formats**: Stick to RGB space-separated
4. **Don't use descriptive names**: Avoid `--color-blue`, use `--color-primary`
5. **Don't override Tailwind defaults**: Extend instead of replace
6. **Don't ignore accessibility**: Always consider contrast and motion
7. **Don't create unused variables**: Remove variables that aren't used

## 🔄 Migration Guide

### From Old System

If you're migrating from the old color system:

```tsx
// Old approach ❌
<div className="bg-blue text-white">

// New approach ✅
<div className="bg-primary text-primary-foreground">
```

### Color Mapping

| Old Variable     | New Variable        | Usage          |
| ---------------- | ------------------- | -------------- |
| `--color-blue`   | `--color-primary`   | `bg-primary`   |
| `--color-yellow` | `--color-secondary` | `bg-secondary` |
| `--color-duck`   | `--color-accent`    | `bg-accent`    |
| `--color-green`  | `--color-success`   | `bg-success`   |
| `--color-red`    | `--color-error`     | `bg-error`     |

## 🧪 Testing Guidelines

### Visual Testing

1. Test all themes (light/dark)
2. Verify color contrast ratios
3. Check component states (hover, focus, disabled)
4. Test with reduced motion preferences

### Code Review Checklist

- [ ] Uses semantic color names
- [ ] Follows spacing scale
- [ ] Includes proper fallbacks
- [ ] Documented with comments
- [ ] Tested in all themes
- [ ] Accessibility considerations met

## 📚 References

- [WCAG 2.1 Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [CSS Custom Properties Best Practices](https://web.dev/css-custom-properties/)
- [Tailwind CSS Theming Guide](https://tailwindcss.com/docs/theming)

---

**Questions or suggestions?** Please reach out to the design system team or create an issue in the repository.
