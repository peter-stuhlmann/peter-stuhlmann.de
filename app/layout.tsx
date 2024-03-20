import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '@/components/StyledComponentsRegistry';
import GlobalStyles from '@/components/Global.styles';
import Footer from '@/components/footer';
import Header from '@/components/header';

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
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
