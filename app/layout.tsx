import { TheFooter } from '@/components/footer/theFooter';
import { TheHeader } from '@/components/header/theHeader';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { Providers } from '@/components/providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.body}>
        <Providers>
          <TheHeader />
          <main className={styles.container}>{children}</main>
          <TheFooter />
        </Providers>
      </body>
    </html>
  );
}
