'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
      'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
      'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
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
    color: #333;
    background: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
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