'use client';

import GlobalStyles from '../styles/GlobalStyles';

export default function ClientLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
} 