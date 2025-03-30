/**
 * Global styles for the portfolio website.
 * This file contains the base styles that apply to the entire application:
 * - Reset default browser styles
 * - Set base font family and size
 * - Define color variables
 * - Set default margins and padding
 * - Apply smooth scrolling behavior
 * 
 * These styles ensure consistent typography and spacing across all components.
 */

'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
      'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
      'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #f8f9fa;
    --text-color: #333;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: var(--text-color);
    background-color: var(--background-color);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: darken(var(--primary-color), 10%);
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  .min-h-screen {
    min-height: 100vh;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .text-center {
    text-align: center;
  }

  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .font-bold {
    font-weight: 700;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .pt-16 {
    padding-top: 4rem;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default GlobalStyles; 