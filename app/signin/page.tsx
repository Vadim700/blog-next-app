import { GoogleButton } from '@/components/googleButton/GoogleButton';
import { SigninForm } from '@/components/signinForm.tsx/SigninForm';
import { Suspense } from 'react';

export default async function Signin() {
  return (
    <div>
      <h1>Sign in</h1>
      <Suspense>
        <GoogleButton />
        <div>or</div>
        <SigninForm />
      </Suspense>
    </div>
  );
}
