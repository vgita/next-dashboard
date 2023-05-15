'use client';

import { useSession } from 'next-auth/react';

const SideMenu = () => {
  const { data: session } = useSession();

  return (
    session && (
      <ul>
        <li>Analytics</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    )
  );
};

export default SideMenu;
