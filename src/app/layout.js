import './globals.css';
import StyledComponentsRegistry from '../lib/registry';

export const metadata = {
  title: 'Bogdan\'s Portfolio',
  description: 'Personal portfolio website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
