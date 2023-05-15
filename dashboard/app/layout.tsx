import { Inter } from 'next/font/google';

import { Session } from 'next-auth';
import AuthSessionProvider from '@/components/AuthSessionProvider';
import AppContent from '@/components/AppContent/AppContent';

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
          <AppContent>{children}</AppContent>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
