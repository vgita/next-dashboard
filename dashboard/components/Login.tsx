'use client';

import Button from '@mui/material/Button';
import { signIn, signOut, useSession } from 'next-auth/react';

function Login() {
  const { data: session } = useSession();

  return session ? (
    <Button variant={'contained'} color={'error'} onClick={() => signOut()}>
      Sign out
    </Button>
  ) : (
    <>
      <Button variant={'contained'} color={'success'} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}

export default Login;
