'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import type { FormEventHandler } from 'react';
import styles from './style.module.scss';

function SigninForm() {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res && !res.error) {
      router.push('/profile');
    } else {
      console.log(res);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} type="email" name="email" placeholder='email' required />
      <input className={styles.input} type="password" name="password" placeholder='password' required />
      <button className={styles.submit} type="submit">Sign in</button>
    </form>
  );
}

export { SigninForm };
