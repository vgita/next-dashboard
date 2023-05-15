'use client';

import Login from '@/components/Login';
import Box from '@mui/material/Box';
import { useSession } from 'next-auth/react';

function SignInPage() {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>{session ? 'Thanks for logging in' : 'Please log in'}</h2>
      <Login />
    </Box>
  );
}

export default SignInPage;
