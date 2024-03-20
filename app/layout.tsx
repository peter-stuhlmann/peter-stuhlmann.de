import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '@/components/StyledComponentsRegistry';
import GlobalStyles from '@/components/Global.styles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Peter R. Stuhlmann | Webentwickler und Fotograf',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <html lang="de">
        <body className={inter.className}>{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
