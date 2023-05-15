'use client';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { signIn, signOut, useSession } from 'next-auth/react';

function Login() {
  const { data: session } = useSession();

  return session ? (
    <Button variant={'contained'} color={'error'} onClick={() => signOut()}>
      Sign out
    </Button>
  ) : (
    <>
      <h2>Please log in</h2>
      <br />
      <Button variant={'contained'} color={'success'} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}

export default Login;
