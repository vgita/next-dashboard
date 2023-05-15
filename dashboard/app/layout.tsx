import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './globals.css';
import styles from './page.module.css';
import { Inter } from 'next/font/google';

import { Session } from 'next-auth';
import AuthSessionProvider from '@/components/AuthSessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Data Dashboard',
  description: 'Data Dashboard',
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthSessionProvider session={session}>
          <main className={styles.main}>
            <Header />
            <SideMenu />
            {children}
          </main>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
