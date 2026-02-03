/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../sites/*/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      // Design Tokens - DelegateML Design System
      colors: {
        // Background colors
        'bg-base': '#fafafa',
        'bg-surface': '#f4f4f5',
        'bg-dark': '#18181b',
        
        // Text colors
        'text-primary': '#18181b',
        'text-secondary': '#52525b',
        'text-muted': '#a1a1aa',
        'text-inverse': '#fafafa',
        
        // Border colors
        'border-light': '#e4e4e7',
        'border-medium': '#d4d4d8',
        
        // Brand accent - Deep navy blue (professional, trustworthy)
        'accent': '#1e3a5f',
        'accent-hover': '#152a45',
        'accent-light': '#e8eef5',
        'accent-pale': '#f5f8fb',
        
        // Success / trust signal
        'success': '#059669',
        'success-light': '#d1fae5',
        
        // Warning
        'warning': '#d97706',
        
        // Error
        'error': '#dc2626',
      },
      
      // Typography - Using system fonts for performance, avoiding overused fonts
      fontFamily: {
        'display': ['Georgia', 'Times New Roman', 'serif'],
        'body': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Inconsolata', 'monospace'],
      },
      
      // Font sizes - B2B SaaS scale from skill file
      fontSize: {
        'h1': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['clamp(2rem, 4vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0.08em' }],
      },
      
      // Spacing scale - 8px base
      spacing: {
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '40px',
        '2xl': '64px',
        '3xl': '96px',
        'section': '80px',
      },
      
      // Border radius
      borderRadius: {
        's': '6px',
        'm': '10px',
        'l': '16px',
        'xl': '24px',
      },
      
      // Box shadows - subtle and professional
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.08)',
        'md': '0 4px 12px rgba(0,0,0,0.10)',
        'lg': '0 8px 30px rgba(0,0,0,0.12)',
        'xl': '0 16px 48px rgba(0,0,0,0.15)',
      },
      
      // Animation durations
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
      
      // Animation timing functions
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // Max widths for containers
      maxWidth: {
        'content': '1200px',
        'narrow': '720px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
