/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./stories/**/*.{js,ts,jsx,tsx,mdx}",
        "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                // Button colors - these will work with bg-, text-, border- prefixes
                'btn-primary-bg': '#283270',
                'btn-primary-hover-bg': '#0a0f2f',
                'btn-secondary-bg': '#fff',
                'btn-secondary-hover-bg': '#283270',
                'btn-secondary-text': '#374151',
                'btn-stroke-bg': '#2563eb',
                'btn-stroke-blue-bg': '#3b82f6',
                'cta-primary-bg': '#2563eb',
            },
            animation: {
                fadeIn: 'fadeIn 0.3s ease-in-out',
                slideIn: 'slideIn 0.3s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};