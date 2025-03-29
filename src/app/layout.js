import StyledComponentsRegistry from '../lib/registry';
import ClientLayout from './components/ClientLayout';

export const metadata = {
  title: 'Bogdan\'s Portfolio',
  description: 'Personal portfolio website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>
            {children}
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
