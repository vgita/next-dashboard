'use client';

import { useSession } from 'next-auth/react';
import Dashboard from '../../components/Dashboard';

function DashboardPage() {
  const { data: session } = useSession();
  return (
    session && (
      <>
        <div>Dashboard page</div>
        <Dashboard />
      </>
    )
  );
}

export default DashboardPage;
