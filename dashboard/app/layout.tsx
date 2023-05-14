import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './globals.css';
import styles from './page.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Data Dashboard',
  description: 'Data Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <Header />
          <SideMenu />
          {children}
        </main>
      </body>
    </html>
  );
}
